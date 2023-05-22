import { Box, Button, Typography } from "@mui/material";

import styles from "./banner.module.css";

const Banner = (props) => {
  return (
    <Box className={styles.container}>
      <Typography variant="h1" className={styles.title}>
        <span className={styles.title1}>{props.title1}</span>
        <span className={styles.title2}>{props.title2}</span>
      </Typography>
      <Typography className={styles.subTitle} variant="subtitle1">
        {props.subtitle}
      </Typography>
      <Button variant="outline" color="success" onClick={props.actionClick}>
        {props.buttonText}
      </Button>
    </Box>
  );
};
export default Banner;
