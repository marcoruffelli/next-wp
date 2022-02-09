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
        <h1 className={styles.title}>modifica 9/2/2022</h1>
        <img src="https://pepenet.info/img/foto-1.webp" alt="prova" />
        <img src="https://pepenet.info/img/foto-2.webp" alt="prova" />
        <img src="https://pepenet.info/img/foto-3.webp" alt="prova" />
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
