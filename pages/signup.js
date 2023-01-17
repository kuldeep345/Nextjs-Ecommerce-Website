import Link from 'next/link'
import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { useRouter } from 'next/dist/client/router'

const signup = () => {
  const router = useRouter()

  const [details, setDetails] = useState({
    name: "",
    email: "",
    password:""
  })

  useEffect(() => {
    if(localStorage.getItem('token')){
      router.push('/')
    }
  }, [])
  


  const handleChange = (e)=>{
    setDetails({
      ...details,
      [e.target.name]:e.target.value
    })
  }

  
  const handleSubmit = async(e)=>{
    e.preventDefault()
    let res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/signup`,{
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify(details)
    })
    
    let response = await res.json()
    if(response.success === "success"){
      toast.success('Your account has been created', {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        });
    }
    if(response.error === "email"){
      toast.error('Sorry , A user with this email already exists', {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        });
    }
    setDetails({
      name: "",
      email: "",
      password:""
    })
  }

  return (
    <div className='min-h-screen w-full flex bg-[#141516] md:pt-10'>
    <div className="flex flex-col md:px-6 py-8  mx-auto lg:py-0">
  
      <div className="bg-white rounded-lg shadow dark:border md:mt-0 w-[350px] sm:w-[400px] md:w-[500] lg:min-[600px] xl:p-0 dark:bg-gray-800 dark:border-gray-700 ">
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
            Sign up for an account
          </h1>
          <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit} method='POST'>
            <div>
              <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Name</label>
              <input type="name" name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name" required value={details.name}
            onChange={handleChange}/>
            </div>
            <div>
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
              <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required value={details.email}
            onChange={handleChange} />
            </div>
            <div>
              <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
              <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required value={details.password}
              onChange={handleChange}/>
            </div>
          
            <button type='submit' className="relative inline-block px-4 py-2 font-medium group w-full text-center">
              <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
              <span className="absolute inset-0 w-full h-full bg-[#3e4a5b] border-2 border-black group-hover:bg-black"></span>
              <span className="relative font-normal text-white cursor-pointer">Sign up</span>
            </button>
            <p className="text-sm font-light text-gray-500 dark:text-gray-400">
              Already have an account? <Link href="/login"><span className="font-medium hover:underline cursor-pointer !text-gray-500">Sign in</span></Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  </div>
  )
}

export default signup