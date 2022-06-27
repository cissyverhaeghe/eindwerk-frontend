import { useContext, useEffect, useState } from "react";
import Image from "next/image";
import axios from "axios";
import moment from "moment";
import Link from "next/link";
import { UserContext } from "../context/UserContext";

const AdoptionForm = ({ animal: { id, name, photo } }) => {
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [triedToApply, setTriedToApply] = useState(false);
  const [charErrorMessage, setCharErrorMessage] = useState(false);
  const [apiErrorMessage, setAPIErrorMessage] = useState(false);

  const date = moment().format();
  const userCtxt = useContext(UserContext);
  let loggedIn = userCtxt.isLoggedIn;

  useEffect(() => {
    if (triedToApply) {
      if (message.length > 5 && message.length < 500) {
        setCharErrorMessage(false);
      } else setCharErrorMessage(true);
    }
  }, [message, triedToApply]);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (message.length < 5 || message.length > 500) {
      setTriedToApply(true);
      setCharErrorMessage(true);
    } else {
      setCharErrorMessage(false);
      (async () => {
        try {
          const body = {
            date: date,
            message: message,
            animal_id: id,
            user_id: userCtxt.user.id,
            status_id: 1,
          };
          const data = await axios(
            `${process.env.NEXT_PUBLIC_BASEPATH}/api/adoptionrequest`,
            {
              method: "POST",
              data: JSON.stringify(body),
            }
          );
          if (data) {
            setSubmitted(true);
            setAPIErrorMessage(false);
          }
        } catch (error) {
          console.log(error);
          setAPIErrorMessage(true);
        }
      })();
    }
  };

  return (
    <div className="adoption">
      <section>
        <h1>Adoption Request</h1>
        <h2>You are filing a request to adopt {name}.</h2>
        {!loggedIn && (
          <>
            <p>You have to be logged in to see this page</p>
            <Link href="/login">
              <button>Go to login</button>
            </Link>
          </>
        )}
        {!submitted && loggedIn && (
          <>
            <p>Please let us know why you would like to adopt {name}.</p>
            <form>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Message"
                maxLength="500"
                minLength="5"
                required
                spellCheck="false"
              />
              {charErrorMessage && (
                <p className="error">
                  Your message should be between 5 and 500 characters
                </p>
              )}
              {apiErrorMessage && (
                <p className="error">
                  Something went wrong. Please try again later.
                </p>
              )}
              <button onClick={handleFormSubmit}>Submit request</button>
            </form>
          </>
        )}
        {submitted && (
          <>
            <p>We have received your request successfully!</p>
            <Link href={"/overview"}>
              <button>Go to overview</button>
            </Link>
          </>
        )}
      </section>
      <aside>
        <div className="imageholder">
          <Image
            src={"/" + photo}
            alt="animal"
            width={300}
            height={300}
            layout="responsive"
          />
        </div>
      </aside>
    </div>
  );
};

export default AdoptionForm;
