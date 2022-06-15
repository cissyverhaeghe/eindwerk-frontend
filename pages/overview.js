import axios from "axios";
import NavBar from "../components/NavBar";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Link from "next/link";
import { AiOutlineSearch, AiOutlineDelete } from "react-icons/ai";

const overview = () => {
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
            <tr>
              <td>1234</td>
              <td>22-07-98</td>
              <td>Mini</td>
              <td>Pending</td>
              <td>
                <AiOutlineSearch />
              </td>
              <td>
                <AiOutlineDelete />
              </td>
            </tr>
            <tr>
              <td>1234</td>
              <td>22-07-98</td>
              <td>Mini</td>
              <td>Pending</td>
              <td>
                <AiOutlineSearch />
              </td>
              <td>
                <AiOutlineDelete />
              </td>
            </tr>
            <tr>
              <td>1234</td>
              <td>22-07-98</td>
              <td>Mini</td>
              <td>Pending</td>
              <td>
                <AiOutlineSearch />
              </td>
              <td>
                <AiOutlineDelete />
              </td>
            </tr>
            <tr>
              <td>1234</td>
              <td>22-07-98</td>
              <td>Mini</td>
              <td>Pending</td>
              <td>
                <AiOutlineSearch />
              </td>
              <td>
                <AiOutlineDelete />
              </td>
            </tr>
            <tr>
              <td>1234</td>
              <td>22-07-98</td>
              <td>Mini</td>
              <td>Pending</td>
              <td>
                <AiOutlineSearch />
              </td>
              <td>
                <AiOutlineDelete />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <Footer />
    </>
  );
};

export default overview;

// export const getServerSideProps = async () => {
//   const { data: cats } = await axios("http://127.0.0.1:8000/api/cats");
//   const { data: dogs } = await axios("http://127.0.0.1:8000/api/dogs");

//   return {
//     props: {
//       cats,
//       dogs,
//     },
//   };
// };
