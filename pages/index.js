import Head from "next/head";
import styles from "../styles/Home.module.css";
import Banner from "../components/Banner";
import Image from "next/image";
import Card from "../components/Card";

const url =
  "https://api.foursquare.com/v3/places/search?query=CAT&ll=51.56524879751176%2C-0.09474406102619118&limit=8";
const defaultImage =
  "https://i.pinimg.com/564x/1c/59/6c/1c596c7d8ec56700151a21c5d4a5cfe2.jpg";

export async function getStaticProps(context) {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: process.env.FOURSQUARE_API_KEY,
    },
  };

  const response = await fetch(url, options);
  const dataJSON = await response.json();
  const data = dataJSON.results;

  if (!data.length) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      data,
    },
  };
}

export default function Home(props) {
  const handleOnClickBtn = () => {};

  const bannerProps = {
    title1: "CATs",
    title2: "Collection",
    subtitle: "Discover For My App",
    buttonText: "Get App",
    actionClick: handleOnClickBtn,
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Banner {...bannerProps} />
        <Image
          className={styles.pictureMain}
          src="/static/cat.png"
          alt="picture"
          width={200}
          height={200}
        />
        {props.data.length > 0 && (
          <>
            <h2 className={styles.cardHeader}>Coffee Ahaha</h2>
            <div className={styles.card_container}>
              {props.data.map((card) => (
                <Card
                  key={card.fsq_id}
                  title={card.name}
                  link={`coffee-store/${card.fsq_id}`}
                  linkImage={card.imgUrl || defaultImage}
                />
              ))}
            </div>
          </>
        )}
      </main>
    </div>
  );
}
