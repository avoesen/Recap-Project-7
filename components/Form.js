import styled from "styled-components";

export default function Form({ onSubmit, defaultData, id }) {
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    if (id) {
      onSubmit(data, id);
    } else {
      onSubmit(data);
    }
  }
  return (
    <StyledForm onSubmit={handleSubmit}>
      <label htmlFor="name">name:</label>
      <input
        id="name"
        name="name"
        type="text"
        defaultValue={defaultData?.name}
      ></input>
      <label htmlFor="location">location:</label>
      <input
        id="location"
        name="location"
        type="text"
        defaultValue={defaultData?.location}
      ></input>
      <label htmlFor="mapURL">mapURL:</label>
      <input
        id="mapURL"
        name="mapURL"
        type="text"
        defaultValue={defaultData?.mapURL}
      ></input>
      <label htmlFor="image">image:</label>
      <input
        id="image"
        name="image"
        type="text"
        defaultValue={defaultData?.image}
      ></input>
      <label htmlFor="description">description:</label>
      <input
        id="description"
        name="description"
        type="text"
        defaultValue={defaultData?.description}
      ></input>
      <button type="submit">Submit</button>
    </StyledForm>
  );
}
const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #0047ab;
  padding: 2rem;
`;
