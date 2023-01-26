import { Container, Form, BackgroundImg } from "./styles"

import { FiMail, FiLock } from "react-icons/fi"

import { Link } from "react-router-dom"

import Input from "../../components/Input"
import Button from "../../components/Button"

export default function SignIn() {
  return (
    <Container>
      <Form>
        <header>
          <h1>RocketMovies</h1>
          <p>Aplicação para acompanhar tudo que assistir.</p>
        </header>

        <h2>Faça seu Login</h2>

        <div id="formWrapper">
          <div id="inputWrapper">
            <Input placeholder="E-mail" type="text" icon={FiMail} />
            <Input placeholder="Senha" type="password" icon={FiLock} />
          </div>

          <Button title="Entrar" />
        </div>

        <Link to="/register">Criar Conta</Link>
      </Form>

      <BackgroundImg />
    </Container>
  )
}
