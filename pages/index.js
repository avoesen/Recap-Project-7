import PlaceCard from "@/components/PlaceCard";
import Link from "next/link";
import styled from "styled-components";

export default function HomePage({ places }) {
  return (
    <>
      <PlaceCard places={places} />
      <StyledLinki href="/create">+</StyledLinki>
    </>
  );
}
const StyledLinki = styled(Link)`
  text-decoration: none;
  background-color: white;
  color: pink;
  position: fixed;
  z-index: 9000;
  right: 200px;
  left: 210px;
  bottom: 2rem;
  width: 3rem;
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 100%;
  border: 1px solid pink;

  &:hover {
    background-color: pink;
    color: white;
  }
`;
