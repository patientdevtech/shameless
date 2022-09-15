import "../styles/globals.css";
// import { SessionProvider } from "next-auth/react"
// import {useSession} from "next-auth/react"
import { Provider } from "next-auth/react"

//keep user logged in between pages
function MyApp({ Component, pageProps }) {
  return (
  // <Provider session={ pageProps.session }>
  <Component {...pageProps} />
  // </Provider>
  )
}

export default MyApp
