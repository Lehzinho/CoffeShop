import styled from "styled-components";

export const Input = styled.div`
  position: relative;
  margin-bottom: 16px;
  i {
    position: absolute;
    right: 0.75rem;
    top: 50%;
    transform: translateY(-50%);
    color: ${({ theme }) => theme["base-text-light"]};
    font-size: 0.75rem;
    line-height: 130%; /* 15.6px */
  }
  input {
    width: 100%;
    padding: 0.75rem;

    border-radius: 0.25rem;
    border: 1px solid ${({ theme }) => theme["base-button"]};
    background: ${({ theme }) => theme["base-input"]};
  }
  p {
    font-style: italic;
    font-size: 0.75rem;
    position: absolute;
    color: ${({ theme }) => theme["warning-text"]};
  }
`;
