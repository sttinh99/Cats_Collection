import Head from "next/head";
import styles from "../styles/Home.module.css";
import Banner from "../components/Banner";
import Image from "next/image";
import Card from "../components/Card";
import listCard from "../data/coffee-stores.json";

export async function getStaticProps(context) {
  return {
    props: {
      data: listCard,
    },
  };
}

export default function Home(props) {
  console.log("props", props);
  const handleOnClickBtn = () => {
    console.log("Click");
  };

  const bannerProps = {
    title1: "SPAM",
    title2: "My App",
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
          width={300}
          height={300}
        />
        {props.data.length > 0 && (
          <>
            <h2 className={styles.cardHeader}>Coffee Ahaha</h2>
            <div className={styles.card_container}>
              {props.data.map((card) => (
                <Card
                  key={card.id}
                  title={card.name}
                  link={`strangelovecoffee/${card.id}`}
                  linkImage={card.imgUrl}
                />
              ))}
            </div>
          </>
        )}
      </main>
    </div>
  );
}
