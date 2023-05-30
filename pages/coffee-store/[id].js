import { Box, Typography } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/router";
import listCard from "../../data/coffee-stores.json";
import Head from "next/head";
import styles from "../../styles/coffee_shop.module.css";
import cls from "classnames";
import Image from "next/image";
import addressIcon from "../../public/static/icons/place.svg";
import nextMeIcon from "../../public/static/icons/near.svg";

export function getStaticProps({ params }) {
  console.log("params", params);
  return {
    props: {
      data: listCard.find((card) => card.id.toString() === params.id),
    },
  };
}

export function getStaticPaths() {
  const paths = listCard.map((item) => ({
    params: { id: item.id.toString() },
  }));
  return {
    paths,
    fallback: true,
  };
}

const CoffeeStore = (props) => {
  const router = useRouter();
  if (router.isFallback) {
    return <div>Loading...</div>;
  }
  const { name, address, neighbourhood, imgUrl } = props.data;
  console.log(props);
  return (
    <>
      <Head>
        <title>{name}</title>
      </Head>
      <Box className={cls("glass_detail", styles.container)}>
        <Box className={styles.col1}>
          <Box className={styles.backHome}>
            <Link href="/">Back Home</Link>
          </Box>
          <Typography className={styles.name} variant="h2">
            {name}
          </Typography>
          <Image
            src={imgUrl}
            width={300}
            height={300}
            objectFit="cover"
            alt={name}
            className={styles.imageUrl}
          />
          <Box className={styles.site}>
            <Image
              src={addressIcon}
              width={24}
              height={24}
              alt={address}
              className={styles.imageUrl}
            />
            <p className={styles.siteDetail}>{address}</p>
          </Box>
          <Box className={styles.site}>
            <Image
              src={nextMeIcon}
              width={24}
              height={24}
              alt={address}
              className={styles.imageUrl}
            />
            <p className={styles.siteDetail}>{neighbourhood}</p>
          </Box>
        </Box>
      </Box>
    </>
  );
};
export default CoffeeStore;
