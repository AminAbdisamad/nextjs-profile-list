import Link from 'next/link';
import Head from 'next/head';
import styles from '../styles/Home.module.css';

const Home = () => {
  return (
    <>
      <Head>
        <title>Profile List | Home</title>
      </Head>
      <div>
        <h1>Index Page </h1>
        <p>
          Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in
          laying out print, graphic or web designs. The passage is attributed to
          an unknown typesetter in the 15th century who is thought to have
          scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a
          type specimen book.
        </p>
        <Link href="/users">
          <a className={styles.btn}> Profile List</a>
        </Link>
      </div>
    </>
  );
};

export default Home;

// Prerendered pages = during development its done on server-side rendering
// server renders components and sends html file to browser
