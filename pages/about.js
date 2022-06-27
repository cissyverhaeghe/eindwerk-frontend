import NavBar from "../components/NavBar";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Image from "next/image";

const about = () => {
  return (
    <>
      <NavBar />
      <Banner title="ABOUT" />
      <div className="about page">
        <section>
          <h1>Lab Animal Searches Home</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum,
            odit, nemo, nostrum cupiditate consequuntur qui provident expedita
            non quos quia fugiat natus eos modi? Culpa repudiandae ab a impedit
            necessitatibus. Minima cupiditate quos at natus nam dicta quod nemo
            quaerat quam ipsum culpa esse blanditiis omnis fuga architecto
            dolores ad asperiores repellendus, fugit distinctio minus et? Quo,
            consequatur nisi cumque inventore eaque at dolores optio cupiditate.
          </p>
          <p>
            Corporis illo quo temporibus qui magnam. Inventore quia voluptate
            sequi eligendi quidem. Accusamus sint nemo corporis.
          </p>
        </section>
        <aside>
          <div className="imageholder">
            <Image
              src="/pexels-amir-ghoorchiani-1183434.jpg"
              alt="cat"
              layout="responsive"
              width={300}
              height={300}
              objectFit="cover"
            />
          </div>
        </aside>
      </div>
      <div className="about mission">
        <aside>
          <div className="imageholder">
            <Image
              src="/pexels-charles-1851164.jpg"
              alt="cat"
              layout="responsive"
              width={300}
              height={300}
              objectFit="cover"
            />
          </div>
        </aside>
        <section>
          <h1>Our Mission</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum,
            odit, nemo, nostrum cupiditate consequuntur qui provident expedita
            non quos quia fugiat natus eos modi? Culpa repudiandae ab a impedit
            necessitatibus.
          </p>
          <p>
            Minima cupiditate quos at natus nam dicta quod nemo quaerat quam
            ipsum culpa esse blanditiis omnis fuga architecto dolores ad
            asperiores repellendus, fugit distinctio minus et? Quo, consequatur
            nisi cumque inventore eaque at dolores optio cupiditate.
          </p>
        </section>
      </div>
      <div className="about page">
        <section>
          <h1>And you can help!</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum,
            odit, nemo, nostrum cupiditate consequuntur qui provident expedita
            non quos quia fugiat natus eos modi? Culpa repudiandae ab a impedit
            necessitatibus. Minima cupiditate quos at natus nam dicta quod nemo
            quaerat quam ipsum culpa esse blanditiis omnis fuga architecto
            dolores ad asperiores repellendus, fugit distinctio minus et?
          </p>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="http://www.paypal.com"
          >
            <button>Donate</button>
          </a>
        </section>
        <aside>
          <div className="imageholder">
            <Image
              src="/pexels-peng-louis-3073694.jpg"
              alt="cat"
              layout="responsive"
              width={300}
              height={300}
              objectFit="cover"
            />
          </div>
        </aside>
      </div>
      <Footer />
    </>
  );
};

export default about;
