import Link from "next/link";
import LoginComponent from "../../../../component/login";

const StudentLoginPage=()=>{
    return(
        <div className="bg-orange-500">
            <h1 >Student Login Page</h1>
           <LoginComponent/>
           <h6>End</h6>
        </div>
        
    )
}
export default StudentLoginPage;