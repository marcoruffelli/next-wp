import Head from "next/head";

import styles from "../styles/Home.module.css";

export default function Home({ posts }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>questa modifica è stata effettuata da giancarlo</h1>
        <img src="https://d2j5yhogz3pnm1.cloudfront.net/wp-content/uploads/2022/01/11214427/Cattura.png" alt="prova" />
        <img src="https://imagesnextwp.s3.eu-central-1.amazonaws.com/wp-content/uploads/2022/01/11214427/Cattura.png" alt="prova" />
        {posts.map((post) => {
          return (
            <div className={styles.card} key={post.id}>
              <h2>{post.title.rendered}</h2>
            </div>
          );
        })}
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
}

export async function getStaticProps() {
  const response = await fetch("https://adminwp.pepenet.info/wp-json/wp/v2/posts");
  //const response = await fetch('https://jsonplaceholder.typicode.com/users')
  const data = await response.json();

  return {
    props: {
      posts: data,
    },
  };
}
