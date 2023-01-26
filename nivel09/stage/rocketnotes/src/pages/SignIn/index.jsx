import { Container, Form, BackgroundImg } from "./styles"

import { FiMail, FiLock } from "react-icons/fi"

import { Link } from "react-router-dom"

import Input from "../../components/Input"
import Button from "../../components/Button"
import ButtonText from "../../components/ButtonText"

export default function SignIn() {
  return (
    <Container>
      <Form>
        <header>
          <h1>Rocket Notes</h1>
          <p>Aplicação para salvar e gerenciar seus links úteis.</p>
        </header>

        <h2>Faça seu Login</h2>

        <div id="inputWrapper">
          <Input placeholder="E-mail" type="text" icon={FiMail} />

          <Input placeholder="Senha" type="password" icon={FiLock} />
        </div>

        <div id="buttonWrapper">
          <Button title="Entrar" />

          <Link to="/register">Criar Conta</Link>
        </div>
      </Form>

      <BackgroundImg />
    </Container>
  )
}
