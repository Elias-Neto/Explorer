import styled from "styled-components"

export const Container = styled.button`
  width: 100%;
  padding: 3.2rem;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_500};
  border: none;
  border-radius: 1.6rem;

  color: ${({ theme }) => theme.COLORS.WHITE_800};

  display: flex;
  flex-direction: column;
  gap: 1.6rem;

  header {
    display: flex;
    flex-direction: column;
    gap: 0.8rem;

    h3 {
      font-size: 2.4rem;
      font-weight: 700;
    }

    div {
      align-self: flex-start;
    }
  }

  #description {
    display: flex;
    align-items: center;
    gap: 0.2rem;

    color: ${({ theme }) => theme.COLORS.GRAY_800};

    p {
      line-height: 2.5rem;
      text-align: justify;

      height: 5rem;
      overflow-y: hidden;
    }

    span {
      align-self: flex-end;
      margin-bottom: 0.2rem;
    }
  }

  ul {
    gap: 1rem;
  }
`
