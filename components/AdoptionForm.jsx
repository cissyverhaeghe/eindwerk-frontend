import { useState } from "react";
import Image from "next/image";
import axios from "axios";

const AdoptionForm = ({ animal: { id, name, photo } }) => {
  const [message, setMessage] = useState("");

  const handleFormSubmit = async () => {
    axios
      .post({
        url: "http://127.0.0.1:8000/api/adoptionrequest",
        data: {
          date: "2022-06-14T15:06:21.407Z",
          message: "string",
          animal: 1,
          user: 1,
          status: 1,
        },
      })
      .then(
        (response) => {
          console.log(response);
        },
        (error) => {
          console.log(error);
        }
      );
  };

  return (
    <div>
      <h1>Adoption Request</h1>
      <h2>You are filing a request to adopt {name}</h2>
      <div className="imageholder">
        <Image
          src={"/" + photo}
          alt="animal"
          width={300}
          height={300}
          layout="responsive"
        />
      </div>
      <h2>Please let us know why you would like to adopt {name}</h2>
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button onClick={handleFormSubmit}>Submit request</button>
    </div>
  );
};

export default AdoptionForm;
