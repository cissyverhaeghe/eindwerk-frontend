import Image from "next/image";
import axios from "axios";
import Link from "next/link";

const Cats = ({ cats }) => {
  console.log(cats);

  return (
    <div className="animals">
      <div className="container">
        <div className="above">
          <div className="titles">
            <h1>Our Cats</h1>
            <h2>There are 55 cats to adopt</h2>
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
                  src="/cat1.png"
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
