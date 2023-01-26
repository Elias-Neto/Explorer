import { Container, Profile } from "./styles"

import { FiSearch } from "react-icons/fi"

import { Link } from "react-router-dom"

import Input from "../../components/Input"

export default function Header() {
  return (
    <Container>
      <h1>
        <Link to="/">RocketMovies</Link>
      </h1>

      <Input type="text" placeholder="Pesquisar pelo título" icon={FiSearch} />

      <Profile>
        <div>
          <strong>Elias Neto</strong>
          <Link>
            <span>sair</span>
          </Link>
        </div>

        <Link to="/profile">
          <img src="https://github.com/Elias-Neto.png" alt="Foto do usuário" />
        </Link>
      </Profile>
    </Container>
  )
}
