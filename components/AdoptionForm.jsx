import { useState } from "react";
import Image from "next/image";
import axios from "axios";

const AdoptionForm = ({ animal: { id, name, photo } }) => {
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  console.log(submitted);

  const handleFormSubmit = (e) => {
    e.preventDefault();

    (async () => {
      try {
        const body = {
          date: "2022-06-14T15:06:21.407Z",
          message: message,
          animal_id: id,
          user_id: 1,
          status_id: 1,
        };
        const data = await axios("http://127.0.0.1:8000/api/adoptionrequest", {
          method: "POST",
          data: JSON.stringify(body),
        });
        console.log(data);
        if (data) {
          setSubmitted(true);
        }
      } catch (error) {
        console.log(error);
      }
    })();
  };

  return (
    <div className="adoption">
      <section>
        <h1>Adoption Request</h1>
        <h2>You are filing a request to adopt {name}.</h2>

        {!submitted && (
          <>
            <p>Please let us know why you would like to adopt {name}.</p>
            <form>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Message"
              />
              <button onClick={handleFormSubmit}>Submit request</button>
            </form>
          </>
        )}
        {submitted && (
          <>
            <p>We have received your request successfully!</p>
            <button>Go to overview</button>
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
