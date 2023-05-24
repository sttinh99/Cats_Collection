import Link from "next/link";
import Image from "next/image";
import styles from "./Card.module.css";
import { Box } from "@mui/material";
import classnames from "classnames";

const Card = (props) => {
  return (
    <Box className={classnames("glass", styles.cardContainer)}>
      <Link href={props.link}>
        <a className={styles.cardLink}>
          <div className={styles.cardHeader}>
            <h2>{props.title}</h2>
          </div>
          <div className={styles.cardImage}>
            <Image
              className={styles.image}
              src={props.linkImage}
              alt="picture2"
              width={350}
              height={250}
            />
          </div>
        </a>
      </Link>
    </Box>
  );
};
export default Card;
