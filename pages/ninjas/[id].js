import Link from "next/link";

export const getStaticPaths = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json(); //data berupa array of object

  const paths = data.map((ninja) => {
    return {
      params: { id: ninja.id.toString() },
    };
  });

  return {
    paths: paths, //karena sama bisa disingkat jadi paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await fetch("https://jsonplaceholder.typicode.com/users/" + id);
  const data = await res.json();

  return {
    props: { ninja: data },
  };
};

const Details = ({ ninja }) => {
  return (
    <div>
      <h1>Name = {ninja.name}</h1>
      <h1>Email = {ninja.email}</h1>
      <h1>Phone = {ninja.phone}</h1>
      <h1>
        Address = {ninja.address.street}, {ninja.address.city}
      </h1>
      <Link href="/ninjas">Go Back</Link>
    </div>
  );
};

export default Details;
