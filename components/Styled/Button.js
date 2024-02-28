const { default: styled } = require("styled-components");

const Styledbutton = styled.button`
  background-color: pink;
  border: none;
  box-shadow: 2px black;
  color: #0047ab;
  margin: 1rem;

  &:hover {
    color: white;
  }
`;

export default Styledbutton;
