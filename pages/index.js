import { getSession } from "next-auth/client" 
import Head from 'next/head'
import Header from "../components/Header"
import Login from "../components/Login";
import Sidebar from "../components/Sidebar"
import Feed from "../components/Feed"
import Connections from "../components/Connections"
// import { db } from '../firebase'


export default function Home({ session, posts }) {
  //if there is no session, return a login component 
  if (!session) return <Login />;
  return (
    <div className="h-screen bg-tan-100 overflow-hidden">
      <Head>
        <title>Connected Forever-ever</title>
      </Head>
  
      <Header />
      
      <main className="flex">
        <Sidebar />
        <Feed posts={posts}/>
        <Connections />
      </main>
    </div>
  );
}



export async function getServerSideProps(context) {
  // Get User
  const session = await getSession(context);

  const posts = await db.collection("posts").orderBy("timestamp", "desc").get();

  const docs = posts.docs.map((post) => ({
    id: post.id,
    ...post.data(),
    timestamp: null,
  }));

  return {
    props: { session, posts: docs },
  };
}




// export async function getServerSideProps(context) {
//   return {
//     props: {content}, // will be passed to the page component as props
//   }
// }