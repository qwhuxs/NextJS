import { prisma } from "@/lib/prisma";
import bcrypt from "bcrypt";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

export async function POST(req: Request) {
  const session = await getServerSession(authOptions);

  if (!session?.user?.email) {
    return Response.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { password } = await req.json();

  const hashed = await bcrypt.hash(password, 10);

  await prisma.user.update({
    where: { email: session.user.email },
    data: { password: hashed },
  });

  return Response.json({ ok: true });
}