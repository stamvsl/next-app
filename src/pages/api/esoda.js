import prisma from "../../../lib/prisma";

export default async function handle(req, res) {
  if (req.method == "GET") {
    // const { title } = req.body;
    const esoda = await prisma.esoda.findMany();
    // const esoda = await prisma.User.findUnique({
    //   where: {
    //     email: "manos@gmail.com", // Replace with the specific user ID you want to query
    //   },
    //   include: {
    //     esoda: true,
    //   },
    // });

    return res.json(esoda);
  } else {
    // return error msg
    return res.status(405).json({ msg: "We only support GET" });
  }
}
