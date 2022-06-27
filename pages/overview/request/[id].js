import axios from "axios";

import NavBar from "../../../components/NavBar";
import Banner from "../../../components/Banner";
import AdoptionForm from "../../../components/AdoptionForm";
import Footer from "../../../components/Footer";
import Link from "next/link";

import { useRouter } from "next/router";
import { useContext } from "react";
import { UserContext } from "../../../context/UserContext";

const Request = ({ adoptionrequest }) => {
  const router = useRouter();
  const userCtxt = useContext(UserContext);
  let loggedIn = userCtxt.isLoggedIn;
  return (
    <>
      <NavBar />
      <Banner title="ADOPT" />
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
      {loggedIn && (
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
      )}

      <Footer />
    </>
  );
};

export default Request;

export const getStaticPaths = async () => {
  const { data: adoptionrequests } = await axios(
    `${process.env.NEXT_PUBLIC_BASEPATH}/api/adoptionrequests`
  );

  return {
    paths: adoptionrequests.map(({ id }) => ({
      params: { id: id.toString() },
    })),
    fallback: "blocking",
  };
};

export const getStaticProps = async (ctx) => {
  const {
    params: { id },
  } = ctx;

  const { data: adoptionrequest } = await axios(
    `${process.env.NEXT_PUBLIC_BASEPATH}/api/adoptionrequests/${id}`
  );

  return {
    props: {
      adoptionrequest,
      revalidate: 3600,
    },
  };
};
