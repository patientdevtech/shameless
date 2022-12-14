// import { useSession } from "next-auth/react";
import Image from "next/image";
import { CameraIcon, EmojiHappyIcon, VideoCameraIcon } from "@heroicons/react/solid";
import { useRef, useState } from "react";
// import { db } from "../firebase";
// import firebase from "firebase";

function Inputbox() {
//   const [session] = useSession();
    const inputRef = useRef(null)
    const filepickerRef = useRef(null)
    const [imageToPost, setImageToPost] = useState(null);
//prevent page from auto refreshing and reloading
  const sendPost = (e) => {
    e.preventDefault();


    if(!inputRef.current.value) return;

    db.collection('posts')
        .add({
            message: inputRef.current.value,
            name: session.user.name,
            email: session.user.email,
            image: session.user.image,
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        })
        .then((doc) => {
            if (imageToPost) {
                const uploadTask = storage
                    .ref(`posts/${doc.id}`)
                    .putString(imageToPost,'data_url')
            
                removeImage();

                uploadTask.on(
                    'state_change', 
                    null, 
                    (error) => console.error(error),
                    () => {
                        //When upload completes successfully ppr 2h57
                        
                    }) 
            }   
        })
        inputRef.current.value = "";
    }

  const addImageToPost = (e) => {
    const reader = new FileReader();
    if (e.target.files[0]) {
        reader.readAsDataURL(e.target.files[0]);
    }

    reader.onload = (readerEvent) => {
        // setImageToPost{readerEvent.target.result}
    }
  }

  const removeImage = () => {
    setImageToPost(null)
  }

  return (
    <div className="bg-white p-2 rounded-2xl shadow-md text-pink-500 font-medium mt-6">
        <div className="flex space-x-4 p-4 items-center">
            <Image
                className="rounded-full h-12 bg-gray-100 flex-grow px-5 focus:outline-"
                // src={session.user.image}
                src=""
                alt=""
                width={40}
                height={40}
                layout="fixed"
            />
            <form className="flex flex-1">
                <input 
                    className="rounded-full h-12 bg-gray-100 flex-grow px-5 focus:outline-none"
                    type="text" 
                    ref={inputRef}
                    // placeholder={`There are no overshares here!, 
                    // ${session.user.name}`}
                />
                <button hidden type="submit" onClick={sendPost}>
                    Submit
                </button>
            </form>

            {imageToPost && (
                <div onClick={removeImage} className="flex flex-col filter hover:brightness-110 transition duration-150 transform hover:scale-105 cursor:pointer"
                >
                    <Image
                     className="h-10 object-contain" 
                     src={imageToPost} 
                     alt=""/>
                    <p> className</p>
                </div>
            )}

        </div>
        <div className="flex justify-evenly p-2 border-t">
            <div className="InputIcon">
                <VideoCameraIcon className="h-7 text-pink-500" />
                <p className="text-xs sm:text-sm xl:text-base">Live Video</p>
            </div>
            <div 
                onClick={() => filepickerRef.current.click()} 
                className="InputIcon"
            >
                <CameraIcon className="h-7 text-green-300" />
                <p className="text-xs sm:text-sm xl:text-base">Photo/Video</p>
                <input ref={filepickerRef} onChange={addImageToPost} type="file" hidden/>
            </div>
                <div className="InputIcon">
                    <EmojiHappyIcon className="h-7 text-yellow-300" />
                    <p className="text-xs sm:text-sm xl:text-base">Emotions</p>
                </div>
            </div>
    </div>
  )
}

export default Inputbox