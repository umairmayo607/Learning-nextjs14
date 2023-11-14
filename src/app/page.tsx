import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
 
  return (
    <div>
      <h1 className='bg-yellow-500 p-400'>This is our Home Page </h1>
    <Link href={"/about"}>Go to About Page</Link>
    <br />
   
    <Link href={"/login"}>Go to Login Page</Link>



     </div>
     
    )
}
