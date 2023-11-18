import Link from "next/link";
 const Layout=({
    children,
  }: {
    children: React.ReactNode
  })=>{
    return(
        <div className="display-flex">
            
          <nav>My NavBar for About page</nav>
        </div>
    )
}
export default Layout;