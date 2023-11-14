import Link from 'next/link';

export default function Home() {
  return (
    <div>
          Hello World from Panaverse DAO!
          <br/>
          <Link href="/about/about-college">About College</Link>
          <br/>
          <Link href="/about/about-student">About Student</Link>
          <br/>
          <Link href="/login/student-login">Student logn</Link>
          <br/>
          You can also create a dynamic page by entering this URL in the browser: http://localhost:3000/xyz
    </div>
  )
}