import Image from "next/image";
import axios from "axios";
import Link from "next/link";

const Cats = ({ allCats }) => {
  console.log(allCats.length);

  let cats = allCats.slice(0, 4);

  return (
    <div className="animals">
      <div className="container">
        <div className="above">
          <div className="titles">
            <h1>Our Cats</h1>
            <h2>There are {allCats.length} cats to adopt</h2>
          </div>
          <Link href="/cats">
            <button>+ See all</button>
          </Link>
        </div>
        <div className="pictures">
          {cats &&
            cats.map(({ id, name, photo }) => (
              <div key={id} className="imageholder">
                <Image
                  src={"/" + photo}
                  alt="cat"
                  layout="responsive"
                  width={300}
                  height={300}
                />
                <p>{name}</p>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Cats;
