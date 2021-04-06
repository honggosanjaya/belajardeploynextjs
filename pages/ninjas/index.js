import ninjasStyles from "../../styles/Ninjas.module.css";
import Link from "next/link";

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  return {
    props: { ninjas: data },
  };
};

const index = ({ ninjas }) => {
  return (
    <div>
      <h1>All Ninja</h1>
      {ninjas.map((ninja) => (
        <div className={ninjasStyles.single} key={ninja.id}>
          <Link href={"/ninjas/" + ninja.id}>
            <a>
              <h3>{ninja.name}</h3>
            </a>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default index;
