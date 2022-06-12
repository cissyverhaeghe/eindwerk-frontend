import Image from "next/image";
import Link from "next/link";

const Cats = ({ allCats }) => {
  let cats = allCats.slice(0, 4);

  return (
    <div className="animals">
      <div className="container">
        <div className="above">
          <div className="titles">
            <h1>Our Cats</h1>
            {cats.length > 0 ? (
              <h2>
                There {allCats.length > 1 ? "are " : "is "} {allCats.length}{" "}
                {allCats.length > 1 ? "cats" : "cat"} to adopt
              </h2>
            ) : (
              <h2>There are no cats to adopt</h2>
            )}
          </div>
          {cats.length > 0 && (
            <Link href="/cats">
              <button>+ See all</button>
            </Link>
          )}
        </div>
        <div className="pictures">
          {cats &&
            cats.map(({ id, name, photo }) => (
              <Link key={id} href={`cats/cat/${id}`}>
                <div className="imageholder">
                  <Image
                    src={"/" + photo}
                    alt="cat"
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

export default Cats;
