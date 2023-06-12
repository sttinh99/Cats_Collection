import { Box, Typography } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/router";
import Head from "next/head";
import styles from "../../styles/coffee_shop.module.css";
import cls from "classnames";
import Image from "next/image";
import addressIcon from "../../public/static/icons/place.svg";
import nextMeIcon from "../../public/static/icons/near.svg";
import { fetchCatsCollection } from "../../libs/cats-collection";

export async function getStaticProps({ params }) {
  const data = await fetchCatsCollection();
  return {
    props: {
      data: data.find((card) => card.id === params.id),
    },
  };
}

export async function getStaticPaths() {
  const data = await fetchCatsCollection();
  const paths = data.map((item) => ({
    params: { id: item.id },
  }));
  return {
    paths: paths,
    fallback: true,
  };
}

const CoffeeStore = (props) => {
  const router = useRouter();
  if (router.isFallback) {
    return <div>Loading...</div>;
  }
  const { name, id, address, timezone, imgUrl } = props.data;
  return (
    <div key={id}>
      <Head>
        <title>{name}</title>
      </Head>
      <Box className={cls("glass_detail", styles.container)}>
        <Box className={styles.col1}>
          <Box className={styles.backHome}>
            <Link href="/">Home</Link>
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
            <p className={styles.siteDetail}>{timezone}</p>
          </Box>
        </Box>
      </Box>
    </div>
  );
};
export default CoffeeStore;
