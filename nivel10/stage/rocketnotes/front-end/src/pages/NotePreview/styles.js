import styled from "styled-components"

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 105px auto;
  grid-template-areas:
    "header"
    "content";

  main {
    grid-area: "content";
    overflow-y: auto;
    padding: 64px 0;
  }
`

export const Content = styled.div`
  max-width: 550px;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  gap: 64px;

  button:first-child {
    align-self: end;
  }

  #text,
  #sections {
    display: flex;
    flex-direction: column;
  }

  #text {
    gap: 16px;

    h1 {
      font-size: 36px;
      font-weight: 500;
    }

    p {
      font-size: 16px;
      text-align: justify;
    }
  }

  #sections {
    gap: 28px;
  }

  button#return {
    margin-top: 64px;
  }
`

export const Links = styled.ul`
  list-style: none;

  display: flex;
  flex-direction: column;
  gap: 12px;

  a {
    color: ${({ theme }) => theme.COLORS.WHITE};
  }
`

export const Tags = styled.ul`
  list-style: none;

  display: flex;
  gap: 10px;
`
