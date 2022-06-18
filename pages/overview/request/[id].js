import axios from "axios";

import NavBar from "../../../components/NavBar";
import Banner from "../../../components/Banner";
import AdoptionForm from "../../../components/AdoptionForm";
import Footer from "../../../components/Footer";

import { useRouter } from "next/router";

const Request = ({ adoptionrequest }) => {
  console.log(adoptionrequest);
  const router = useRouter();
  return (
    <>
      <NavBar />
      <Banner title="ADOPT" />
      <div className="adoption preview">
        <section>
          <h1>Adoption Request #{adoptionrequest.id}</h1>
          <h2>You filed a request to adopt {adoptionrequest.animal.name}</h2>

          <form>
            <textarea
              placeholder="Message"
              maxLength="500"
              minLength="5"
              readOnly
            >
              {adoptionrequest.message}
            </textarea>
          </form>
          <button onClick={() => router.back()}>Go back</button>
        </section>
      </div>

      <Footer />
    </>
  );
};

export default Request;

export const getServerSideProps = async (ctx) => {
  const {
    params: { id },
  } = ctx;

  const { data: adoptionrequest } = await axios(
    `http://127.0.0.1:8000/api/adoptionrequests/${id}`
  );

  return {
    props: {
      adoptionrequest,
    },
  };
};
