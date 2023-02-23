import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  align-items: center;

  background-color: ${({ theme, isNew }) =>
    isNew ? "transparent" : theme.COLORS.BACKGROUND_900};
  border: ${({ theme, isNew }) =>
    isNew ? `1px dashed ${theme.COLORS.GRAY_300}` : "none"};
  border-radius: 10px;
  padding: 20px 16px;

  color: ${({ theme }) => theme.COLORS.GRAY_300};

  button {
    border: none;
    background: none;

    svg {
      font-size: 20px;
    }
  }

  .buttonDelete {
    color: ${({ theme }) => theme.COLORS.RED};
  }

  .buttonAdd {
    color: ${({ theme }) => theme.COLORS.ORANGE};
  }

  input {
    width: 100%;
    background-color: transparent;
    border: none;

    color: ${({ theme }) => theme.COLORS.WHITE};

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_300};
    }
  }
`
