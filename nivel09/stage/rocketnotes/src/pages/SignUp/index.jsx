import { Container, Form, BackgroundImg } from "./styles"

import { FiMail, FiLock, FiUser } from "react-icons/fi"

import { Link } from "react-router-dom"

import Input from "../../components/Input"
import Button from "../../components/Button"

export default function SignIn() {
  return (
    <Container>
      <BackgroundImg />

      <Form>
        <header>
          <h1>Rocket Notes</h1>
          <p>Aplicação para salvar e gerenciar seus links úteis.</p>
        </header>

        <h2>Crie sua Conta</h2>

        <div id="inputWrapper">
          <Input placeholder="Nome" type="text" icon={FiUser} />

          <Input placeholder="E-mail" type="text" icon={FiMail} />

          <Input placeholder="Senha" type="password" icon={FiLock} />
        </div>

        <div id="buttonWrapper">
          <Button title="Cadastrar" />

          <Link to="/">Voltar para o Login</Link>
        </div>
      </Form>
    </Container>
  )
}
