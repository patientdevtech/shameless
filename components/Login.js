import Image from "next/image";
import { signIn } from "next-auth/client";


function Login() {
  return (
    <div className="grid place-items-center">
          <Image 
                src="https://imgur.com/gHPxE9V.png" 
                alt="fb.login.img"
                width={300}
                height={300} 
                objectFit="contain"
            />
            <h1 
                onClick={signIn} 
                className="p-5 bg-blue-800 rounded-full text-white text-center cursor-pointer"
            >
                Login with Facebook
            </h1>
    </div>
  );
}

export default Login

 