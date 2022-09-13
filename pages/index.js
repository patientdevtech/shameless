// import { unstable_getServerSession } from "next-auth/next" 
// import NextAuth from 'pages/api/auth/[...nextauth]'
import { getSession } from 'next-auth/react';
import Head from 'next/head'
import Header from "../components/Header"
import Login from "../components/Login";
import Sidebar from "../components/Sidebar"
import Feed from "../components/Feed"
import Connections from "../components/Connections"




export default function Home({ session }) {
  //if there is no session, return a login component 
  if (!session) return <Login />;
  return (
    <div className="h-screen bg-tan-100 overflow-hidden">
      <Head>
        <title>Shameless Share</title>
      </Head>
  
      <Header />
      
      <main className="flex">
        <Sidebar />
        <Feed />
        <Connections />
      </main>
    </div>
  );
}

//1 uncomment out vvvvvvvvvvv before 1:18 https://www.youtube.com/watch?v=dBotWYKYYWc
// export async function getServerSideProps(context) {
//   //get the user from nextauth library. context is user request.
//   //session info is passed as a prop in user's browser  
//   const session = await getSession(context);

//   return{
//     props: {
//       session
//     }
//   }
// }
//uncomment out ^^^^^^^^^^^^^^^^

//2 uncomment out vvvvvvvvvvv https://next-auth.js.org/v3/getting-started/client
// import { getProviders } from "next-auth/client"

// export default async (req, res) => {
//   const providers = await getProviders()
//   console.log("Providers", providers)
//   res.end()
// }
//uncomment out ^^^^^^^^^^^^^^^^

//3 uncomment out vvvvvvvvvvv before 1:18 https://www.youtube.com/watch?v=dBotWYKYYWc
//context contains request information & response.  It is the request the user sends through when they go to the connected forever ever site.
// return passes user information to component as a prop which renders all info onto user's browser  
// export async function getServerSideProps(context) {
//   //get the user
//   const session = await getSession(context);
//   //return session properties from server
//   return {
//     props: {
//       session
//     }
//   }
// }
//uncomment out ^^^^^^^^^^^^^^^^


// 4 uncomment out vvvvvvvvvvv tutoring session 9.12
// export async function getServerSideProps (context) {
//  let session = await unstable_getServerSession(context.req, context.res);
//  session = JSON.stringify(session);

//  return{
//   props: {
//     session
//   }
//  }
// }
//uncomment out ^^^^^^^^^^^^^^^^
