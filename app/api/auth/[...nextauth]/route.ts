import NextAuth from "next-auth";
import { authOptions } from "@/app/lib/auth/auth-options";

const handler = NextAuth(authOptions);

// export { handler as GET, handler as POST }
export const GET = handler;
export const POST = handler;
