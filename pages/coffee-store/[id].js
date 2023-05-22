import { Box, Typography } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/router";

const CoffeeStore = () => {
  const router111 = useRouter();
  console.log(router111);
  return (
    <Box>
      <Typography>Coffee Store</Typography>
      <Link href="/">Back Home</Link>
    </Box>
  );
};
export default CoffeeStore;
