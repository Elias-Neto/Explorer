import styled from "styled-components"

import { Link } from "react-router-dom"

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};

  display: grid;
  grid-template-columns: 250px auto;
  grid-template-rows: 105px 128px auto 80px;
  grid-template-areas:
    "brand header"
    "menu search"
    "menu content"
    "newNote content";
`

export const Brand = styled.div`
  grid-area: brand;

  display: flex;
  justify-content: center;
  align-items: center;

  border-bottom: 1px solid ${({ theme }) => theme.COLORS.BACKGROUND_700};
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};

  h1 {
    font-size: 24px;
    color: ${({ theme }) => theme.COLORS.ORANGE};
  }
`

export const Menu = styled.ul`
  grid-area: menu;

  list-style: none;

  padding-top: 64px;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};

  text-align: center;

  display: flex;
  flex-direction: column;
  gap: 24px;
`

export const Search = styled.div`
  grid-area: search;

  padding: 64px 64px 0;
`

export const Content = styled.div`
  grid-area: content;

  padding: 64px;

  ul {
    list-style: none;

    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 16px;
  }
`

export const NewNote = styled(Link)`
  grid-area: newNote;

  background-color: ${({ theme }) => theme.COLORS.ORANGE};

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  font-size: 18px;
  color: ${({ theme }) => theme.COLORS.BACKGROUND_900};

  svg {
    font-size: 20px;
  }
`
