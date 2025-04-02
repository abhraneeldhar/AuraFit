import NextAuth from "next-auth";

declare module "next-auth" {
  interface User {
    role?: string;
  }

  interface Session {
    user: {
      id: string;
      imageUrl:string;
      email: string;
      role?: string;
      name:string;
    };
  }

  interface JWT {
    id: string;
    name:string;
    email: string;
    role?: string;
  }
}
