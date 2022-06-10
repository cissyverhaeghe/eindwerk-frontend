import Image from "next/image";
import axios from "axios";

const Cats = ({ cats }) => {
  console.log(cats);

  return (
    <div className="cats">
      <div className="container">
        <div className="above">
          <div className="titles">
            <h1>Our Cats</h1>
            <h2>There are 55 cats to adopt</h2>
          </div>
          <button>+ See all</button>
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
        {/* <div className="pictures">
          <div className="imageholder">
            <Image
              src="/cat1.png"
              alt="cat"
              layout="responsive"
              width={300}
              height={300}
            />
            <p>mini</p>
          </div>
          <div className="imageholder">
            <Image
              src="/cat1.png"
              alt="cat"
              layout="responsive"
              width={300}
              height={300}
            />
            <p>mini</p>
          </div>
          <div className="imageholder">
            <Image
              src="/cat1.png"
              alt="cat"
              layout="responsive"
              width={300}
              height={300}
            />
            <p>mini</p>
          </div>
          <div className="imageholder">
            <Image
              src="/cat1.png"
              alt="cat"
              layout="responsive"
              width={300}
              height={300}
            />
            <p>mini</p>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Cats;
