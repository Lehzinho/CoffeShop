import styled from "styled-components";

export const NewCheckoutForm = styled.div<{ $numColumn: number }>`
  grid-area: info;
  display: flex;
  padding: 40px;
  flex-direction: column;
  align-items: flex-start;
  gap: 32px;
  align-self: stretch;

  border-radius: 6px;
  background: var(--Base-Card, #f3f2f2);
  .title {
    display: flex;
    svg {
      color: ${({ theme }) => theme.yellow};
    }
    h1 {
      color: var(--Base-Subtitle, #403937);

      font-size: 1rem;
      line-height: 130%;
    }
    p {
      color: var(--Base-Text, #574f4d);

      font-size: 0.875rem;
      line-height: 130%;
    }
  }
  & > div {
    width: 100%;
    grid-template-columns: ${({ $numColumn }) => $numColumn};
    display: grid;
    gap: 12px;
    margin-bottom: 0.75rem;
  }
`;
