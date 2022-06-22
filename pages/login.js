import NavBar from "../components/NavBar";
import Banner from "../components/Banner";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { parseCookies, setCookie, destroyCookie } from "nookies";
import nookies from "nookies";
import { UserContext } from "../context/UserContext";
import Link from "next/link";
import { useRouter } from "next/router";

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
        const data = await axios("http://127.0.0.1:8000/app_json_login", {
          method: "POST",
          data: body,
        });
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
      {!loggedIn && (
        <div>
          <form>
            <label htmlFor="email">Email:</label>
            <input
              type="text"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></input>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            ></input>
            <button onClick={handleFormSubmit}>Login</button>
          </form>
          {error && <p>Invalid Credentials</p>}
        </div>
      )}
      {loggedIn && (
        <>
          <p>Welcome, {userCtxt.user.firstname}!</p>
          <p>You are logged in</p>
          <button onClick={() => router.back()}>Go back</button>
          <Link href={"/overview"}>
            <button>Go to overview</button>
          </Link>
        </>
      )}
    </>
  );
};

export default Login;

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
