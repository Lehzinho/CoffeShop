import styled from "styled-components";

export const NewPaymentForm = styled.div`
  grid-area: payment;
  display: flex;
  padding: 40px;
  flex-direction: column;
  align-items: flex-start;
  gap: 32px;
  align-self: stretch;

  border-radius: 6px;
  background: ${({ theme }) => theme["base-card"]};
  svg {
    color: ${({ theme }) => theme.purple};
  }
  .titleContainer {
    display: flex;
    .title {
      color: ${({ theme }) => theme["base-subtitle"]};
      font-size: 1rem;
      line-height: 130%;
    }
    p {
      color: ${({ theme }) => theme["base-text"]};

      font-size: 0.875rem;
      line-height: 130%;
    }
  }
  .radioContainer {
    display: flex;
    gap: 0.75rem;
  }
`;

export const PaymentButton = styled.label<{ $selected: boolean }>`
  display: flex;
  align-items: center;
  width: 178.667px;
  padding: 16px;
  gap: 12px;

  cursor: pointer;

  border-radius: 6px;
  border: ${({ $selected, theme }) =>
    $selected ? `1px solid ${theme.purple}` : "none"};
  background: ${({ theme, $selected }) =>
    $selected ? theme["purple-light"] : theme["base-button"]};
  color: var(--Base-Subtitle, #403937);

  /* Components/Button S */
  font-family: Roboto;
  font-size: 0.75rem;
  line-height: 160%; /* 19.2px */
  text-transform: uppercase;

  input {
    display: none;
  }

  svg {
    color: ${({ theme }) => theme.purple};
  }

  &:hover {
    background: ${({ theme, $selected }) =>
      !$selected ? theme["base-buton-unchecked"] : theme["purple-light"]};
  }
`;
