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

const Login = ({ cookies }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [token, setToken] = useState("");
  const userCtxt = useContext(UserContext);
  let loggedIn = userCtxt.isLoggedIn;
  const router = useRouter();

  console.log(cookies);
  const handleFormSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    (async () => {
      try {
        const body = {
          username: email,
          password,
        };
        const data = await axios(
          `${process.env.NEXT_PUBLIC_BASEPATH}/api/login_check`,
          {
            method: "POST",
            data: body,
            withCredentials: true,
          }
        );
        userCtxt.login(data.data.user);
        console.log(data.data.token);
        setToken(data.data.token);
        setError(false);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setError(true);
        setLoading(false);
      }
    })();
  };

  useEffect(() => {
    if (token) {
      setCookie(null, "cookiebackend", token, {
        maxAge: 1 * 24 * 60 * 60,
        path: "/",
      });
    }
  }, [setToken, token]);

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
              {loading && <p>Loading...</p>}
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
