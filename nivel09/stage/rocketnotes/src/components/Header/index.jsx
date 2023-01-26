import { RiShutDownLine } from "react-icons/ri"

import { Container, Profile, Logout } from "./styles"

export default function Header() {
  return (
    <Container>
      <Profile to="/profile">
        <img src="https://github.com/Elias-Neto.png" alt="Foto do usuário" />

        <div>
          <span>Bem-vindo,</span>
          <strong>Elias Neto</strong>
        </div>
      </Profile>

      <Logout>
        <RiShutDownLine />
      </Logout>
    </Container>
  )
}
