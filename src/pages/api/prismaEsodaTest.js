import prisma from "../../../lib/prisma";
import esoda from "../../../public/mockData/esoda.json";

export default async function handle(req, res) {
  if (req.method == "POST") {
    // creating a new todo.
    // const { title } = req.body;
    const newEsoda = esoda.data.map((esodo) => {
      return {
        ...esodo,
        date: new Date(esodo.date),
      };
    });
    // console.log("newEsoda :>> ", newEsoda);
    // console.log("xaxa:>> ");
    const result = await prisma.Esoda.createMany({
      data: newEsoda,
    });

    return res.json(result);
  } else {
    // return error msg
    return res.status(405).json({ msg: "We only support POST" });
  }
}
