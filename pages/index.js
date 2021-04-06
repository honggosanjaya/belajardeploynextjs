import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja List | Home</title>
        <meta name="keywords" content="ninjas" />
      </Head>
      <div>
        <h1 className={styles.title}>Home</h1>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque nemo, recusandae non sapiente doloribus eaque autem, cupiditate pariatur repudiandae doloremque explicabo hic consequatur dignissimos velit officiis iusto dolorem
          quo. Qui!
        </p>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque nemo, recusandae non sapiente doloribus eaque autem, cupiditate pariatur repudiandae doloremque explicabo hic consequatur dignissimos velit officiis iusto dolorem
          quo. Qui!
        </p>
        <Link href="/ninjas">
          <a className={styles.btn}>See Ninja Listing</a>
        </Link>
      </div>
    </>
  );
}
