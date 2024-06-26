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
      const org = await prisma.organization.findMany({
        where: {
          id: session.user.orgId,
        },
      });

      res.status(200).json(org);
    } catch (error) {
      res.status(500).json({ message: "Error fetching data", error });
    }
  } else {
    // return error msg
    return res.status(405).json({ msg: "We only support GET" });
  }
}
