import NavBar from "../components/NavBar";
import Banner from "../components/Banner";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { parseCookies, setCookie, destroyCookie } from "nookies";
import nookies from "nookies";
import { UserContext } from "../context/UserContext";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const userCtxt = useContext(UserContext);
  let loggedIn = userCtxt.isLoggedIn;
  const router = useRouter();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    (async () => {
      try {
        const body = {
          email,
          password,
        };
        const data = await axios(
          `${process.env.NEXT_PUBLIC_BASEPATH}/app_json_login`,
          {
            method: "POST",
            data: body,
            withCredentials: true,
          }
        );
        userCtxt.login(data.data);
        setError(false);
      } catch (error) {
        console.log(error);
        setError(true);
      }
    })();
  };

  return (
    <>
      <NavBar />
      <Banner title="LOGIN" />
      <div className="login">
        {!loggedIn && (
          <>
            <aside>
              <h1>Welcome!</h1>
              <h2>Let&apos;s login!</h2>
              <form>
                <input
                  type="text"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email"
                ></input>
                <input
                  type="password"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                ></input>
                <button onClick={handleFormSubmit}>Login</button>
              </form>
              {error && <p>Invalid Credentials</p>}
            </aside>
          </>
        )}
        {loggedIn && (
          <>
            <aside>
              <h1>Welcome, {userCtxt.user.firstname}!</h1>
              <h2>You are logged in</h2>
              <button onClick={() => router.back()}>Go back</button>
              <Link href={"/overview"}>
                <button>Go to overview</button>
              </Link>
            </aside>
          </>
        )}
        <div className="picture">
          <div className="imageholder">
            <Image
              src="/cat1.png"
              alt="cat"
              layout="responsive"
              width={300}
              height={300}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
//

// export async function getServerSideProps(ctx) {
//   // Parse
//   const cookies = nookies.get(ctx);

//   // Set
//   nookies.set(ctx, "fromGetInitialProps", "value", {
//     maxAge: 30 * 24 * 60 * 60,
//     path: "/",
//   });

//   // Destroy
//   // nookies.destroy(ctx, 'cookieName')

//   return {
//     props: {
//       cookies,
//     },
//   };
