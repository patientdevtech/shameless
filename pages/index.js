// import { getSession } from "next-auth/client" 
import Head from 'next/head'
import Header from "../components/Header"
import Login from "../components/Login";
import Sidebar from "../components/Sidebar"
import Feed from "../components/Feed"
import Connections from "../components/Connections"


export default function Home({ session }) {
  //if there is no session, return a login component 
  // if (!session) return <Login />;
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
