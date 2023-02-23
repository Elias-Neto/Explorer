import styled from "styled-components"

import backgroundImg from "../../assets/background.png"

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: stretch;
`

export const Form = styled.form`
  padding: 0 136px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  text-align: center;

  header,
  h2 {
    margin-bottom: 48px;
  }

  h1 {
    font-size: 48px;
    color: ${({ theme }) => theme.COLORS.ORANGE};
  }

  p {
    font-size: 14px;
    color: ${({ theme }) => theme.COLORS.GRAY_100};
  }

  h2 {
    font-size: 24px;
    color: ${({ theme }) => theme.COLORS.WHITE};
  }

  #inputWrapper {
    display: flex;
    flex-direction: column;
    gap: 8px;

    width: 100%;
    margin-bottom: 24px;
  }

  #buttonWrapper {
    display: flex;
    flex-direction: column;
    gap: 120px;

    width: 100%;
  }

  a {
    color: ${({ theme }) => theme.COLORS.ORANGE};

    width: fit-content;
    margin: 0 auto;
  }
`

export const BackgroundImg = styled.div`
  flex: 1;
  background: url(${backgroundImg}) no-repeat center;
  background-size: cover;
`
