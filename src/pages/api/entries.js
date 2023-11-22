import prisma from "../../../lib/prisma";

export default async function handle(req, res) {
  if (req.method == "POST") {
    // creating a new todo.
    const { date, number, grossValue, netValue, transactor, vatClass, vatValue } = req.body;
    console.log(req.body);

    const result = await prisma.Esoda.create({
      data: {
        userId: 2,
        q: 1,
        date,
        invoiceNumber: number,
        finalPrice: grossValue,
        income: netValue,
        vatPerc: vatClass,
        vatEuro: vatValue,
        forCompany: 0,
        client: transactor,
      },
    });
    return res.json(result);
  } else {
    // return error msg
    return res.status(405).json({ msg: "We only support POST" });
  }
}
