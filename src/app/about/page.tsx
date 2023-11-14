import Link from "next/link";
const AboutPage=()=>{
    return (
        <div className="bg-pink-400">
            <h1>About Page</h1>
            <Link href={"/"}>Go to Home Page</Link>
        </div>
    )
}
export default AboutPage;