import axios from "axios";
import NavBar from "../../components/NavBar";
import Banner from "../../components/Banner";
import Footer from "../../components/Footer";
import { UserContext } from "../../context/UserContext";

import Link from "next/link";
import { AiOutlineSearch, AiOutlineDelete } from "react-icons/ai";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useContext, useEffect, useState } from "react";

const Overview = () => {
  const [adoptionRequests, setAdoptionRequests] = useState("");
  const userCtxt = useContext(UserContext);
  const [loading, setLoading] = useState(false);
  let loggedIn = userCtxt.isLoggedIn;
  console.log(userCtxt.user);

  const notify = () => toast("Your request has been deleted successfully");
  useEffect(() => {
    getAdoptionRequests(userCtxt.user.id);
  }, []);

  function confirmAction(id) {
    let confirmAction = confirm(
      "Are you sure you want to delete this request?"
    );
    if (confirmAction) {
      (async () => {
        try {
          const data = await axios(
            `${process.env.NEXT_PUBLIC_BASEPATH}/api/adoptionrequests/${id}`,
            {
              method: "DELETE",
            }
          );
          console.log(data);
          getAdoptionRequests(userCtxt.user.id);
        } catch (error) {
          console.log(error);
        }
      })();
      notify();
    }
  }

  function getAdoptionRequests(id) {
    (async () => {
      setLoading(true);
      try {
        const {
          data: { adoptionrequests },
        } = await axios(`${process.env.NEXT_PUBLIC_BASEPATH}/api/users/${id}`);
        console.log(adoptionrequests);
        setAdoptionRequests(adoptionrequests);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.log(error);
      }
    })();
  }

  const handleDelete = (e, id) => {
    e.preventDefault();
    confirmAction(id);
  };

  return (
    <>
      <NavBar />
      <Banner title="OVERVIEW" />
      {loggedIn && (
        <div className="overview">
          <h2>Below you can find your adoption requests</h2>
          {loading && <p>Loading...</p>}
          {!loading && adoptionRequests.length === 0 && (
            <p>You have no pending adoptionrequests</p>
          )}
          {adoptionRequests.length > 0 && (
            <table>
              <thead>
                <tr>
                  <td>Request#</td>
                  <td>Request date</td>
                  <td>Animal name</td>
                  <td>Status</td>
                  <td></td>
                  <td></td>
                </tr>
              </thead>
              <tbody>
                {adoptionRequests.map(({ id, dateString, animal }) => (
                  <tr key={id}>
                    <td>{id}</td>
                    <td>{dateString}</td>
                    <td>
                      <Link href={`/cats/cat/${animal.id}`}>{animal.name}</Link>
                    </td>
                    <td>Pending</td>
                    <td>
                      <Link href={`/overview/request/${id}`}>
                        <AiOutlineSearch />
                      </Link>
                    </td>
                    <td>
                      <AiOutlineDelete onClick={(e) => handleDelete(e, id)} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      )}
      {!loggedIn && (
        <>
          <div className="loggedout">
            <h2>You have to be logged in to see this page.</h2>
            <Link href="/login">
              <button>Go to login</button>
            </Link>
          </div>
        </>
      )}

      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Footer />
    </>
  );
};

export default Overview;
