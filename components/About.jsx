import Image from "next/image";

const About = () => {
  return (
    <div className="about">
      <section>
        <h1>Who is LASH?</h1>
        <h2>Sed ut perspiciatis</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus
          asperiores repellat pariatur, impedit dolore dolores, minima mollitia
          voluptatum at, iste excepturi vero quibusdam quae.
        </p>
        <p>
          Corporis illo quo temporibus qui magnam. Inventore quia voluptate
          sequi eligendi quidem. Accusamus sint nemo corporis.
        </p>
        <button>More</button>
        <button>Donate</button>
      </section>
      <aside>
        <div className="imageholder">
          <Image
            src="/cat1.png"
            alt="cat"
            layout="responsive"
            width={300}
            height={300}
          />
        </div>
      </aside>
    </div>
  );
};

export default About;
