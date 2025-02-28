import styled from "styled-components";

export const Header = styled.nav`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 32px 160px;

  & > div {
    display: flex;
    gap: 0.75rem;
    p {
      display: flex;
      align-items: center;
      gap: 0.25rem;

      padding: 0.25rem 0.5rem;

      font-size: 0.875rem;
      color: ${({ theme }) => theme["purple-dark"]};

      background-color: ${({ theme }) => theme["purple-light"]};
      border-radius: 0.375rem;
    }
  }
`;
