import styled from "styled-components";

export const Header = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 10rem;
  & > div {
    display: flex;
    gap: 0.75rem;
    p {
      display: flex;
      align-items: center;
      padding: 0.25rem 0.5rem;
      gap: 0.25rem;
      font-size: 0.875rem;
      color: ${({ theme }) => theme["purple-dark"]};
      background-color: ${({ theme }) => theme["purple-light"]};
      border-radius: 0.5rem;
    }
  }
`;
