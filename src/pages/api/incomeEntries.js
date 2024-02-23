import prisma from "../../../lib/prisma";
import { getServerSession } from "next-auth/next";
import { authOptions } from "src/pages/api/auth/[...nextauth]";

function getQuarter(date) {
  const dateObject = new Date(date);
  return Math.floor((dateObject.getMonth() + 3) / 3);
}

export default async function handle(req, res) {
  const session = await getServerSession(req, res, authOptions);

  if (!session || !session.user.id) {
    console.error("Session or user ID missing in API route", { session });
    return res.status(401).json({ message: "Unauthorized" });
  }

  const userId = session.user.id;

  if (req.method == "POST") {
    const { date, number, grossValue, netValue, transactor, vatClass, vatValue, comments, forCompany = 0, description } = req.body;

    const quarter = getQuarter(date);

    try {
      const result = await prisma.Esoda.createMany({
        data: [
          {
            userId,
            q: quarter,
            date,
            invoiceNumber: number,
            finalPrice: grossValue,
            income: netValue,
            vatPerc: vatClass,
            vatEuro: vatValue,
            client: transactor,
            comments: comments,
            forCompany,
            description: description,
          },
        ],
      });

      return res.json(result);
    } catch (error) {
      console.error("Error creating Esoda entry: ", error);
      return res.status(500).json({ message: "Error creating data", error });
    }
  } else {
    return res.status(405).json({ msg: "We only support POST" });
  }
}
