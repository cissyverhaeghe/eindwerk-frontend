import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

const AnimalDetail = ({
  animal: { id, photo, name, sex, breed, neutered, age, description },
}) => {
  console.log(age);
  const router = useRouter();
  return (
    <div className="details">
      <div className="picture">
        <div className="imageholder">
          <Image
            src={"/" + photo}
            alt="animal"
            width={300}
            height={300}
            layout="responsive"
          />
        </div>
      </div>
      <div className="text">
        <h1>{name}</h1>
        <table>
          <tbody>
            <tr>
              <td>Breed</td>
              <td>{breed.name}</td>
            </tr>
            <tr>
              <td>Sex</td>
              <td>{sex.name}</td>
            </tr>
            <tr>
              <td>Neutered</td>
              <td>{(neutered = 1 ? "Yes" : "No")}</td>
            </tr>
            <tr>
              <td>Age</td>
              <td>
                {age > 1
                  ? age + " years old"
                  : !age
                  ? "< 1 year old"
                  : "1 year old"}
              </td>
            </tr>
            <tr>
              <td>Description</td>
              <td>{description}</td>
            </tr>
          </tbody>
        </table>
        <h2>Do you want to adopt {name}?</h2>
        <p>
          <Link href={`adopt/${id}`}>
            Click here to send an adoption request!
          </Link>
        </p>
        <button onClick={() => router.back()}>Go back</button>
      </div>
    </div>
  );
};

export default AnimalDetail;
