import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

export default async function signup(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", ["POST"]);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }

  const { email, password, name } = req.body;
  const saltRounds = 10;

  try {
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    const newUser = await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
        name,
      },
    });

    return res.status(201).json({ message: "User created successfully", newUser });
  } catch (error) {
    return res.status(500).json({ message: "Error creating user", error });
  }
}
