import Link from "next/link";

const dogs = () => {
  return (
    <>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/cats">Cats</Link>
        </li>
        <li>
          <Link href="/dogs">Dogs</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
      </ul>
      <div>dogs</div>
    </>
  );
};

export default dogs;
