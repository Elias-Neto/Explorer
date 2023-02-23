import styled from "styled-components"

export const Container = styled.span`
  padding: 5px 14px;
  border-radius: 5px;
  margin-right: 6px;
  background-color: ${({ theme }) => theme.COLORS.ORANGE};

  font-size: 12px;
  color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
`
