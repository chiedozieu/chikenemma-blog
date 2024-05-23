import { Button, Label, TextInput } from "flowbite-react"
import { Link } from "react-router-dom"

export default function SignUp() {
  return (
    <div className='min-h-screen mt-20'>
      <div className="flex  p-3 max-w-4xl mx-auto flex-1 gap-6 flex-col md:flex-row md:items-center">
        <div className="">
          <Link to='/' className='font-bold dark:text-white text-4xl'>
            <span className='px-2 py-1 bg-gradient-to-r from-pink-500 via-purple-600 to-indigo-600 rounded-lg text-white'>Chikenemms's</span>Blog
          </Link>
          <p className="text-sm mt-5">Signup to get the Latest News and Views Breaking Stories and Expert Analysis</p>
        </div>
        <div className="flex-1">
          <form className="flex flex-col gap-4">
             <div className="">
             <Label value="Your username"/>
             <TextInput type="text" placeholder="Username" id="username" />
             </div>
             <div className="">
             <Label value="Your email "/>
             <TextInput type="text" placeholder="Email" id="email" />
             </div>
             <div className="">
             <Label value="Your password"/>
             <TextInput type="text" placeholder="Password" id="password" />
             </div>
             <Button gradientDuoTone='purpleToPink' type="submit">
              Sign Up
             </Button>
          </form>
          <div className="flex gap-2 mt-5 text-sm"><span>Have ans account?</span><Link to='/sign-in' className="text-blue-500">Sign In</Link></div>
        </div>
      </div>
    </div> 
  )
}