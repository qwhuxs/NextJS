import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

export async function POST(req: Request) {
  const session = await getServerSession(authOptions);

  if (!session?.user?.email) {
    return Response.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = await req.json();

  const user = await prisma.user.update({
    where: { email: session.user.email },
    data: {
      name: body.name,
      age: body.age ? Number(body.age) : null,
    },
  });

  return Response.json(user);
}