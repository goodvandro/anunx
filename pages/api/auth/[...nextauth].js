import axios from 'axios'
import NextAuth from "next-auth"
import Providers from "next-auth/providers"

export default NextAuth({
  providers: [
    Providers.Credentials({
      name: 'Credentials',
      async authorize(credentials) {
        const res = await axios.post('/api/auth/signin', {
          method: 'POST',
          body: JSON.stringify(credentials),
          headers: { 'Content-Type': 'application/json' }
        })

        const user = res.data

        if (user) {
          return user
        } else {
          throw '/auth/signin?i=1'
        }
      }
    })
  ],

  session: {
    jwt: true,
  },

  jwt: {
    secret: process.env.JWT_SECRET,
  },

  database: process.env.MONGODB_URI,
})