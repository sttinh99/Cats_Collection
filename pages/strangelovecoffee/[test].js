import { useRouter } from "next/router";

const Test = () => {
  const router = useRouter();
  return (
    <div>
      <p>tadakakaka{router.query.test}</p>
    </div>
  );
};
export default Test;
