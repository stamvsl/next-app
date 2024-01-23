import prisma from "../../../lib/prisma";
import { getSession } from "next-auth/react";

function getQuarter(date) {
  const dateObject = new Date(date);
  return Math.floor((dateObject.getMonth() + 3) / 3);
}

export default async function handle(req, res) {
  const session = await getSession({ req });
  console.log("Session:", session);
  if (!session) {
    return res.status(401).json({ message: "Unauthorized" });
  }
  if (req.method == "POST") {
    // creating a new todo.
    const { date, number, grossValue, netValue, transactor, vatClass, vatValue, comments } = req.body;
    console.log(req.body);

    const quarter = getQuarter(date);

    try {
      const result = await prisma.Esoda.createMany({
        data: [
          {
            userId: session.user.id,
            q: quarter,
            date,
            invoiceNumber: number,
            finalPrice: grossValue,
            income: netValue,
            vatPerc: vatClass,
            vatEuro: vatValue,
            client: transactor,
            comments: comments,
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
