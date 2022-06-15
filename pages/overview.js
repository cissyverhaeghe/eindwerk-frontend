import axios from "axios";
import NavBar from "../components/NavBar";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import moment from "moment";
import Link from "next/link";
import { AiOutlineSearch, AiOutlineDelete } from "react-icons/ai";

const overview = ({ adoptionrequests }) => {
  console.log(adoptionrequests);
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
                  <AiOutlineDelete />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
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
