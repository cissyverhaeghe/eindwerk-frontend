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
  const { user } = useContext(UserContext);
  const [loading, setLoading] = useState(false);
  console.log(user);

  const notify = () => toast("Your request has been deleted successfully");
  useEffect(() => {
    getAdoptionRequests(user.id);
  }, []);

  function confirmAction(id) {
    let confirmAction = confirm(
      "Are you sure you want to delete this request?"
    );
    if (confirmAction) {
      (async () => {
        try {
          const data = await axios(
            `http://127.0.0.1:8000/api/adoptionrequests/${id}`,
            {
              method: "DELETE",
            }
          );
          console.log(data);
          getAdoptionRequests(user.id);
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
        } = await axios(`http://127.0.0.1:8000/api/users/${id}`);
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
      <div className="overview">
        <h2>Below you can find your adoption requests</h2>
        {!adoptionRequests && <p>Loading...</p>}
        {adoptionRequests.length === 0 && (
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
