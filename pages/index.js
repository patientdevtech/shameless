import { unstable_getServerSession } from "next-auth/next" 
// import NextAuth from 'pages/api/auth/[...nextauth]'
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

//uncomment out vvvvvvvvvvv before 1:18 https://www.youtube.com/watch?v=dBotWYKYYWc
export async function getServerSideProps (context) {
 const session = await unstable_getServerSession(context.req, context.res);
 
 return{
  props: {
    session
  }
 }
}
//uncomment out ^^^^^^^^^^^^^^^^
