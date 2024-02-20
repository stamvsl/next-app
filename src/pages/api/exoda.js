import { PrismaClient } from "@prisma/client";
import { getSession } from "next-auth/react";

const prisma = new PrismaClient();

export default async function handle(req, res) {
  const session = await getSession({ req });
  console.log("Session:", session);
  // if (req.method == "GET") {
  //   // const { title } = req.body;
  //   const exoda = await prisma.exoda.findMany();
  //   // const exoda = await prisma.User.findUnique({
  //   //   where: {
  //   //     email: "manos@gmail.com", // Replace with the specific user ID you want to query
  //   //   },
  //   //   include: {
  //   //     exoda: true,
  //   //   },
  //   // });

  //   return res.json(exoda);
  // } else {
  //   // return error msg
  //   return res.status(405).json({ msg: "We only support GET" });
  // }
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
