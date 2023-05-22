import Link from "next/link";
import { Typography } from "@mui/material";
import Image from "next/image";

const Card = (props) => {
  return (
    <Link href={props.link}>
      <a>
        <h2>{props.title}</h2>
        <Image src={props.linkImage} alt="picture2" width={260} height={260} />
      </a>
    </Link>
  );
};
export default Card;
