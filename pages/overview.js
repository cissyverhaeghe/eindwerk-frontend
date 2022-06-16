import axios from "axios";
import NavBar from "../components/NavBar";
import Banner from "../components/Banner";
import Footer from "../components/Footer";

import Link from "next/link";
import { AiOutlineSearch, AiOutlineDelete } from "react-icons/ai";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const overview = ({ adoptionrequests }) => {
  console.log(adoptionrequests);

  const notify = () => toast("Your request has been deleted successfully");

  function confirmAction() {
    let confirmAction = confirm(
      "Are you sure you want to delete this request?"
    );
    if (confirmAction) {
      notify();
    }
  }

  const handleDelete = (e, id) => {
    e.preventDefault();
    confirmAction();

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
          location.reload();
        } catch (error) {
          console.log(error);
        }
      })();
    }
  };

  return (
    <>
      <NavBar />
      <Banner title="OVERVIEW" />
      <div className="overview">
        <h2>Below you can find your adoption requests</h2>
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
            {adoptionrequests.map(({ id, dateString, animal }) => (
              <tr key={id}>
                <td>{id}</td>
                <td>{dateString}</td>
                <td>
                  <Link href={`/cats/cat/${animal.id}`}>{animal.name}</Link>
                </td>
                <td>Pending</td>
                <td>
                  <AiOutlineSearch />
                </td>
                <td>
                  <AiOutlineDelete onClick={(e) => handleDelete(e, id)} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
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

export default overview;

export const getServerSideProps = async () => {
  const {
    data: { adoptionrequests },
  } = await axios("http://127.0.0.1:8000/api/users/1");

  return {
    props: {
      adoptionrequests,
    },
  };
};
