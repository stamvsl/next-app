import { PrismaClient } from "@prisma/client";
import { getServerSession } from "next-auth/next";
import { authOptions } from "src/pages/api/auth/[...nextauth]";

const prisma = new PrismaClient();

export default async function handle(req, res) {
  if (req.method == "GET") {
    const session = await getServerSession(req, res, authOptions);

    if (!session) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    try {
      // Assuming 'userId' is a field in your 'esoda' table that references the user
      const exodaEntries = await prisma.exoda.findMany({
        where: {
          userId: session.user.id,
        },
        // Add any other query parameters or options you need
      });

      res.status(200).json(exodaEntries);
      console.log(session);
    } catch (error) {
      res.status(500).json({ message: "Error fetching data", error });
    }
  }
  //  else if (req.method === "DELETE") {
  //   const session = await getServerSession(req, res, authOptions);

  //   if (!session) {
  //     return res.status(401).json({ message: "Unauthorized" });
  //   }

  //   const exodaId = parseInt(req.query.id); // Assuming the ID is sent as a query parameter

  //   if (!exodaId) {
  //     return res.status(400).json({ message: "Exoda ID is required" });
  //   }

  //   try {
  //     const deletedExoda = await prisma.exoda.delete({
  //       where: { id: exodaId },
  //     });

  //     res.status(200).json({ message: "Exoda deleted successfully", deletedExoda });
  //   } catch (error) {
  //     res.status(500).json({ message: "Error deleting exoda entry", error });
  //   }
  // }
  else {
    // return error msg
    return res.status(405).json({ msg: "We only support GET" });
  }
}
