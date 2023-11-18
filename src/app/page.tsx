import Image from "next/image";
import Link from "next/link";
import office from "../../component/office.jpg";
import shadi from "../../component/shadi.jpg";

export default function Home() {
  return (
    <div>
      <h1 className="bg-yellow-500 p-400">This is our Home Page </h1>
      <Link href={"/about"}>Go to About Page</Link>
      <br />

      <Link href={"/login"}>Go to Login Page</Link>
      <br />
      <Link href={"/login/teacher-login"}>Go to Teacher-Login</Link>
      <br />
      <Link className="bg-pink-300 text-center " href={"/useState"}>
        Go to useState Page
      </Link>
      <h1 className="text-center bg-yellow-300 font-serif">
        How to insert Image on NextJs 13
      </h1>
      <a className="bg-orange-200" href="/useEffect">
        Go to useEffect Page
      </a>
      <br />
      <a className="bg-orange-200" href="/onChange">
        Go to onChange Page
      </a>
      <br />
      <a className="bg-orange-200" href="/props">
        Go to Props Page
      </a>
      <p>
        Contrary to popular belief, Lorem Ipsum is not simply random text. It
        has roots in a piece of classical Latin literature . Richard McClintock,
        a Latin professor at Hampden-Sydney College in Virginia, looked up one
        of the more obscure Latin words, consectetur, from a Lorem Ipsum
        passage, and going through the cites of the word in classical
        literature, discovered the undoubtable source. Lorem Ipsum comes from
        sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum"{" "}
        <a className="underline decoration-sky-800">Umair Mayo</a> by Cicero,
        written in 45 BC. This book is a treatise on the theory of ethics, very
        popular during the Renaissance. The first line of Lorem Ipsum, "Lorem
        ipsum dolor sit amet..", comes from a line in section 1.10.32.
      </p>
      <Image src={office} alt="Office_Photo" className="ml-5 rounded-full  " />
      <Image src={shadi} alt="Office_Photo" className="ml-5 rounded-full  " />
    </div>
  );
}
