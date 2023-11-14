import Link from "next/link";
 const Layout=({
    children,
  }: {
    children: React.ReactNode
  })=>{
    return(
        <div className="display-flex">
            
            <ul>
              <li><Link href={"/"}>Home</Link>
              </li>
            </ul>

           
            <ul>
                <li>
                <Link href={"/login/student-login"}>Student Login</Link>
                </li>
            </ul>
        </div>
    )
}
export default Layout;