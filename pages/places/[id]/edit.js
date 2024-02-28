import { useRouter } from "next/router";
import Form from "@/components/Form";
import Link from "next/link";

export default function EditDetailPage({ handleEditPlace, places }) {
  const router = useRouter();
  const { id } = router.query;
  const place = places.find((place) => place.id === id);
  return (
    <>
      <h1>Edit Place</h1>
      <Link href={`places/${id}`}></Link>
      <Form defaultData={place} onSubmit={handleEditPlace} id={id} />
    </>
  );
}
