import Link from "next/link";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import {
  FaCat,
  FaDog,
  FaHome,
  FaInfo,
  FaPaperclip,
  FaUserAlt,
  FaUserAltSlash,
} from "react-icons/fa";

const NavBar = () => {
  const userCtxt = useContext(UserContext);
  let loggedIn = userCtxt.isLoggedIn;
  const logoutHandler = () => {
    userCtxt.logout();
  };
  return (
    <div className="navbar">
      <div className="logo">
        <Link href="/">LASH</Link>
      </div>

      <ul className="desktop">
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
        {loggedIn && <li onClick={logoutHandler}>Logout</li>}
      </ul>

      <ul className="mobile">
        <li>
          <Link href="/">
            <FaHome />
          </Link>
        </li>
        <li>
          <Link href="/cats">
            <FaCat />
          </Link>
        </li>
        <li>
          <Link href="/dogs">
            <FaDog />
          </Link>
        </li>
        <li>
          <Link href="/about">
            <FaInfo />
          </Link>
        </li>
        <li>
          {loggedIn ? (
            <Link href="/overview">
              <FaPaperclip />
            </Link>
          ) : (
            <Link href="/login">
              <FaUserAlt />
            </Link>
          )}
        </li>
        {loggedIn && (
          <li onClick={logoutHandler}>
            <FaUserAltSlash />
          </li>
        )}
      </ul>
    </div>
  );
};

export default NavBar;
