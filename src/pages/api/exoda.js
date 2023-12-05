import prisma from "../../../lib/prisma";

export default async function handle(req, res) {
  if (req.method == "GET") {
    // const { title } = req.body;
    const exoda = await prisma.exoda.findMany();
    // const exoda = await prisma.User.findUnique({
    //   where: {
    //     email: "manos@gmail.com", // Replace with the specific user ID you want to query
    //   },
    //   include: {
    //     exoda: true,
    //   },
    // });

    return res.json(exoda);
  } else {
    // return error msg
    return res.status(405).json({ msg: "We only support GET" });
  }
}
