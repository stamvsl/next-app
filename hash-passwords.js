const bcrypt = require("bcrypt");
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();
const saltRounds = 10;

async function hashExistingPasswords() {
  try {
    const users = await prisma.user.findMany();

    for (const user of users) {
      const hashedPassword = await bcrypt.hash(user.password, saltRounds);
      await prisma.user.update({
        where: { id: user.id },
        data: { password: hashedPassword },
      });
    }

    console.log("Passwords updated successfully");
  } catch (error) {
    console.error("Error updating passwords:", error);
  }
}

hashExistingPasswords();
