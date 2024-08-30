'use client'
import Image from 'next/image'
import {FcGoogle} from 'react-icons/fc'

import { signIn,useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
export default function Home() {

  const {data:session}=useSession()
  const router=useRouter()

  if(session){
    router.replace('/homePage')
    return null
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-center text-gray-800">Login</h1>
        
        <h2 className="text-xl text-center text-gray-600">Login with Google</h2>

        <button onClick={()=>{
  signIn("google")
}} className="flex items-center justify-center w-full py-3 mt-4 space-x-3 text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300">
          <FcGoogle className="text-2xl" />
          <span className="font-medium">Login with Google</span>
        </button>
      </div>
    </div>
  );
}