import "../styles/globals.css";
import { Provider } from "next-auth/client";
// import {useSession} from "next-auth/react"

//keep user logged in between pages
// function MyApp({ Component, pageProps }) {
//   return (
//   <SessionProvider session={ pageProps.session }>
//   <Component {...pageProps} />
//   </SessionProvider>
//   )
// }

function MyApp({ Component, pageProps }) {
  return (
    <Provider session={pageProps.session}>
      <Component {...pageProps} />
    </Provider>
  );
}
export default MyApp;

//resource: https://next-auth.js.org/tutorials/securing-pages-and-api-routes 

//check all nextauth imports/code
//settings in firestore site 
//config files - index.js next-auth.js 