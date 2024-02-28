import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

export default function PlaceCard({ places }) {
  return (
    <StyledList>
      {places.map((place) => (
        <StyledLink key={place.id} href={`places/${place.id}`}>
          <StyledLi>
            <Image
              src={place.image}
              alt={place.name}
              width={300}
              height={200}
            />
            <p>
              {place.name}, {place.location}
            </p>
          </StyledLi>
        </StyledLink>
      ))}
    </StyledList>
  );
}

const StyledList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  list-style: none;
  margin: 0;
  padding: 0;
  background-color: #0047ab;
`;

const StyledLi = styled.li`
  padding: 1rem;
  background-color: white;
  margin: 1rem;
  box-shadow: 2px 2px 2px black;
  box-shadow: 5px 5px 0px pink;
  &:hover {
    color: #0047ab;
  }
`;
const StyledLink = styled(Link)`
  text-decoration: none;
  color: pink;
`;
