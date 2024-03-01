import NextAuth from "next-auth";
import { authConfig } from "./auth.config";
import Credentials from "next-auth/providers/credentials";
import { getEmployeeData } from "./service";

export const { auth, signIn } = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
      async authorize(credentials) {
        const parsedCredentials = credentials;

        if (parsedCredentials !== null) {
          const { email, password } = parsedCredentials;

          const employee = await getEmployeeData(email).then((res) => res);

          if (!employee) {
            return null;
          }

          const passwordMatch = password === employee.password;

          if (passwordMatch) {
            return employee;
          }
        }

        console.log("Invalid credentials");

        return null;
      },
    }),
  ],
});
