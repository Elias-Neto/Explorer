import styled from "styled-components"

export const Container = styled.div`
  width: 100%;
  padding: 20px 16px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};

  color: ${({ theme }) => theme.COLORS.GRAY_300};

  display: flex;
  align-items: center;
  gap: 12px;

  input {
    width: 100%;
    background: none;
    border: none;

    color: ${({ theme }) => theme.COLORS.WHITE};

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_300};
    }
  }
`
