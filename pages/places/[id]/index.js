import PlaceCard from "@/components/PlaceCard";
import Link from "next/link";
import { useRouter } from "next/router";
import Left from "@/icons/Left.svg";
import styled from "styled-components";
import Styledbutton from "@/components/Styled/Button";

export default function DetailPage({ places, handleDeletePlace }) {
  const router = useRouter();
  const { id } = router.query;
  if (!id) {
    return null;
  }

  const place = places.find((place) => place.id === id);

  if (!place) {
    router.push("/");
  } else {
    return (
      <StyledList>
        <StyledLink href="/">
          <SvgLeft width={60} />
        </StyledLink>
        <PlaceCard places={[place]} />
        <div>
          <Styledbutton onClick={() => handleDeletePlace(place.id)}>
            delete
          </Styledbutton>
          <Link href={`/places/${id}/edit`}>edit</Link>
        </div>
      </StyledList>
    );
  }
}
const SvgLeft = styled(Left)`
  stroke: pink;
  /* background-color: transparent; */
  position: fixed;
  left: 30%;
`;
const StyledLink = styled(Link)`
  color: pink;
`;
const StyledList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  list-style: none;
  margin: 0;
  padding: 0;
  background-color: #0047ab;
`;
