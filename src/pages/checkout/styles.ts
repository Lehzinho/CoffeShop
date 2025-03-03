import styled from "styled-components";

export const Checkout = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  form {
    margin: 0 auto;
    display: grid;
    grid-template-columns: 650px 448px;
    gap: 2rem;
    grid-template-areas: "info checkout" "payment checkout";
  }
`;
