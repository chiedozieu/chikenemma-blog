import { Alert, Button, Label, Spinner, TextInput } from "flowbite-react"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"

export default function SignUp() {
  const [formData, setFormData] = useState({})
  const [loading, setLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState(null)
  const navigate = useNavigate()

  const handleChange = (e) => {
    setFormData({...formData, [e.target.id] : e.target.value.trim()})
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!formData.username || !formData.email || !formData.password) {
      return setErrorMessage('Please fill out all fields'); 
    }

    try {
      setLoading(true);
      setErrorMessage(null)
      const res = await fetch('api/auth/signup', { 
        method: 'POST',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify(formData),
      })
      const data = await res.json()
     
      if(data.success===false) {
        return setErrorMessage(data.message)
      }
      setLoading(false)
      if(res.ok) {
        navigate('/sign-in');
      }
    
    } catch (error) {
      setErrorMessage(error.message)
      setLoading(false)
    }

  }
  return (
    <div className='min-h-screen mt-20'>
      <div className="flex  p-3 max-w-4xl mx-auto flex-1 gap-6 flex-col md:flex-row md:items-center">
        <div className="">
          <Link to='/' className='font-bold dark:text-white text-4xl'>
            <span className='px-2 py-1 bg-gradient-to-r from-pink-500 via-purple-600 to-indigo-600 rounded-lg text-white'>CKM's</span>Blog
          </Link>
          <p className="text-sm mt-5">Signup to get the Latest News and Views Breaking Stories and Expert Analysis</p>
        </div>
        <div className="flex-1">
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
             <div className="">
             <Label value="Your username"/>
             <TextInput type="text" placeholder="Username" id="username" onChange={handleChange} />
             </div>
             <div className="">
             <Label value="Your email "/>
             <TextInput type="email" placeholder="Email" id="email" onChange={handleChange} />
             </div>
             <div className="">
             <Label value="Your password"/>
             <TextInput type="password" placeholder="Password" id="password" onChange={handleChange} />
             </div>
             <Button gradientDuoTone='purpleToPink' type="submit" disabled={loading} >
              {
                loading ? (
                  <>
                    <Spinner size='sm' color='purple'/>
                    <span className="pl-3">Loading...</span>
                  </>
                ) : ('Sign up')
              }
             </Button>
          </form>
          <div className="flex gap-2 mt-5 text-sm"><span>Have an account?</span><Link to='/sign-in' className="text-blue-500">Sign In</Link>
          </div>
          
            {
              errorMessage && (
                <Alert className="mt-5" color='failure'>
                 { errorMessage}
                </Alert>
              )
            }
     
        </div> 
      </div>
    </div> 
  )
}