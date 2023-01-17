import React from 'react'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

const Account = () => {

  let router = useRouter()

  useEffect(() => {
   if(!localStorage.getItem('token')){
    router.push('/')
   }
  }, [])
  

  return (
    <div>
      Account
    </div>
  )
}

export default Account
