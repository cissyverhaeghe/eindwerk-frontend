import Image from "next/image";
import Link from "next/link";

const Dogs = ({ allDogs }) => {
  console.log(allDogs);

  let dogs = allDogs.slice(0, 4);

  return (
    <div className="animals dogs">
      <div className="container">
        <div className="above">
          {dogs.length > 0 && (
            <Link href="/dogs">
              <button>+ See all</button>
            </Link>
          )}
          <div className="titles">
            <h1>Our Dogs</h1>
            {dogs.length > 0 ? (
              <h2>
                There {allDogs.length > 1 ? "are " : "is "} {allDogs.length}{" "}
                {allDogs.length > 1 ? "dogs" : "dog"} to adopt
              </h2>
            ) : (
              <h2>There are no dogs to adopt</h2>
            )}
          </div>
        </div>
        <div className="pictures">
          {dogs &&
            dogs.map(({ id, name, photo }) => (
              <Link key={id} href={`dogs/dog/${id}`}>
                <div key={id} className="imageholder">
                  <Image
                    src={"/" + photo}
                    alt="dog"
                    layout="responsive"
                    width={300}
                    height={300}
                  />
                  <p>{name}</p>
                </div>
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Dogs;
