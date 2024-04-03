import { PrismaClient } from "@prisma/client";
import { getServerSession } from "next-auth/next";
import { authOptions } from "src/pages/api/auth/[...nextauth]";

const prisma = new PrismaClient();

export default async function handle(req, res) {
  // GET
  if (req.method == "GET") {
    const session = await getServerSession(req, res, authOptions);

    if (!session) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    try {
      const esodaEntries = await prisma.esoda.findMany({
        where: {
          userId: session.user.id,
        },
      });

      res.status(200).json(esodaEntries);
    } catch (error) {
      res.status(500).json({ message: "Error fetching data", error });
    }
  }
  //  else if (req.method === "DELETE") {
  //   const session = await getServerSession(req, res, authOptions);

  //   if (!session) {
  //     return res.status(401).json({ message: "Unauthorized" });
  //   }

  //   const esodaId = parseInt(req.query.id); // Assuming the ID is sent as a query parameter

  //   if (!esodaId) {
  //     return res.status(400).json({ message: "Esoda ID is required" });
  //   }

  //   try {
  //     const deletedEsoda = await prisma.esoda.delete({
  //       where: { id: esodaId },
  //     });

  //     res.status(200).json({ message: "Esoda deleted successfully", deletedEsoda });
  //   } catch (error) {
  //     res.status(500).json({ message: "Error deleting esoda entry", error });
  //   }
  // }
  else {
    // return error msg
    return res.status(405).json({ msg: "We only support GET" });
  }
}
