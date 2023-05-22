import { useRouter } from "next/router";

export default function EveryThing() {
  const router = useRouter();
  return (
    <div>
      <p>{router.query.everythings}</p>
    </div>
  );
}
