import NextAuth from "next-auth";
import { FirestoreAdapter } from "@auth/firebase-adapter";
import { Adapter } from "next-auth/adapters";

const handler = NextAuth({
  providers: [],
  adapter: FirestoreAdapter() as Adapter,
});

export { handler as GET, handler as POST };
