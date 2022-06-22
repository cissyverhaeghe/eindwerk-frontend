import Link from "next/link";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";

const NavBar = () => {
  const userCtxt = useContext(UserContext);
  let loggedIn = userCtxt.isLoggedIn;
  let userName = userCtxt.user.firstname;
  return (
    <div className="navbar">
      <div className="logo">
        <Link href="/">LASH</Link>
      </div>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/cats">Cats</Link>
        </li>
        <li>
          <Link href="/dogs">Dogs</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          {loggedIn ? (
            <Link href="/overview">Adoptionrequests</Link>
          ) : (
            <Link href="/login">Login</Link>
          )}
        </li>
        {loggedIn && <li>Logout</li>}
      </ul>
    </div>
  );
};

export default NavBar;
