import styled from "styled-components"

export const Container = styled.button`
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
  color: ${({ theme }) => theme.COLORS.WHITE};
  padding: 16px 22px;
  border: none;
  border-radius: 10px;
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 24px;
`
