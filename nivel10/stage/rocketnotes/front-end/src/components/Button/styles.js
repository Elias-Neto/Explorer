import styled from "styled-components"

export const Container = styled.button`
  width: 100%;
  height: 56px;
  border: none;
  border-radius: 10px;
  padding: 0 16px;
  background-color: ${({ theme }) => theme.COLORS.ORANGE};

  font-weight: 500;

  &:disabled {
    opacity: 0.5;
    color: #000;
  }
`
