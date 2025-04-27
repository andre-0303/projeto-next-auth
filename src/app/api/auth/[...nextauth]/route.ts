import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import { signIn } from "next-auth/react"

const handler = NextAuth({
    pages: {
        signIn: '/',
    },
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: "Email", type: "email"},
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials, req) {
        if(!credentials) {
            return null;
        }
    
        if (credentials.email === "zidas123@gmail.com" && credentials.password === '123456') {
            return {
                id: '1',
                name: 'Zidas',
                email: 'zidas123@gmail.com'
            }
        }
    
        return null; // <---- IMPORTANTE!
    }    
    })
  ]
})

export { handler as GET, handler as POST }