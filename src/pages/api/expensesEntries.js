import prisma from "../../../lib/prisma";

function getQuarter(date) {
  const dateObject = new Date(date);
  return Math.floor((dateObject.getMonth() + 3) / 3);
}

export default async function handle(req, res) {
  if (req.method == "POST") {
    // creating a new todo.
    const { date, number, grossValue, netValue, transactor, vatClass, vatValue } = req.body;
    console.log(req.body);

    const quarter = getQuarter(date);

    const result = await prisma.Exoda.createMany({
      data: [
        {
          userId: 2,
          q: quarter,
          date,
          invoiceNumber: number,
          finalPrice: grossValue,
          income: netValue,
          vatPerc: vatClass,
          vatEuro: vatValue,
          client: transactor,
        },
      ],
    });
    return res.json(result);
  } else {
    // return error msg
    return res.status(405).json({ msg: "We only support POST" });
  }
}
