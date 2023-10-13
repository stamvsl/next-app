import prisma from "../../../lib/prisma";

export default async function handle(req, res) {
  if (req.method == "POST") {
    // creating a new todo.
    // const { title } = req.body;
    const result = await prisma.User.create({
      data: {
        email: "manosarvanitakis@gmail.com",
        name: "Manos Arvanitakis",
      },
    });
    return res.json(result);
  } else {
    // return error msg
    return res.status(405).json({ msg: "We only support POST" });
  }
}
