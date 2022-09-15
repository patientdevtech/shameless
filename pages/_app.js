import "../styles/globals.css";
import { SessionProvider } from "next-auth/react"
// import {useSession} from "next-auth/react"

//keep user logged in between pages
// function MyApp({ Component, pageProps }) {
//   return (
//   <SessionProvider session={ pageProps.session }>
//   <Component {...pageProps} />
//   </SessionProvider>
//   )
// }

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
  )
}

//resource: https://next-auth.js.org/tutorials/securing-pages-and-api-routes 
