import styled from "styled-components"

export const Container = styled.textarea`
  width: 100%;
  height: 150px;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
  border: none;
  border-radius: 10px;
  padding: 20px 16px;
  resize: none;

  color: ${({ theme }) => theme.COLORS.WHITE};

  &::placeholder {
    color: ${({ theme }) => theme.COLORS.GRAY_300};
  }
`
