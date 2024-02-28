import Link from "next/link";
import Form from "@/components/Form";

export default function createPlace({ handleAddPlace }) {
  return (
    <>
      <Link href="/">got back</Link>
      <Form onSubmit={(formData) => handleAddPlace(formData)} />
    </>
  );
}
