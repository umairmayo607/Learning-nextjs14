import Link from "next/link";
const LoginPage=()=>{
    return(
        <div className="bg-green-400 p-4 ">
            <h1 >Login Page</h1>
            <Link href={"/"}>Go to Home Page</Link>
        </div>
    )
}
export default LoginPage;