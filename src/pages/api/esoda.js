import { PrismaClient } from "@prisma/client";
import { getSession } from "next-auth/react";
import { getServerSession } from "next-auth";
import { authOptions } from "src/pages/api/auth/[...nextauth]";

const prisma = new PrismaClient();

export default async function handle(req, res) {
  if (req.method == "GET") {
    const session = await getServerSession(req, res, authOptions);

    if (!session) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    try {
      // const esodaEntries = await prisma.User.findUnique({
      //   where: {
      //     id: session.user.id, // Replace with the specific user ID you want to query
      //   },
      //   include: {
      //     esoda: true,
      //   },
      // });
      // Assuming 'userId' is a field in your 'esoda' table that references the user
      const esodaEntries = await prisma.esoda.findMany({
        where: {
          userId: session.user.id,
        },
      });

      res.status(200).json(esodaEntries);
    } catch (error) {
      res.status(500).json({ message: "Error fetching data", error });
    }
  } else {
    // return error msg
    return res.status(405).json({ msg: "We only support GET" });
  }
}
