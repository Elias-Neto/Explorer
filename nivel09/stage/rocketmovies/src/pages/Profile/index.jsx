import { Container, Form, Avatar } from "./styles"

import { FiArrowLeft, FiMail, FiLock, FiUser, FiCamera } from "react-icons/fi"

import { Link } from "react-router-dom"

import Input from "../../components/Input"
import Button from "../../components/Button"

export default function Profile() {
  return (
    <Container>
      <header>
        <Link to="/">
          <FiArrowLeft />
          <span>Voltar</span>
        </Link>
      </header>

      <Form>
        <Avatar>
          <img src="https://github.com/Elias-Neto.png" alt="Foto do usuário" />

          <label htmlFor="avatar">
            <FiCamera />

            <input type="file" id="avatar" />
          </label>
        </Avatar>

        <div id="textInputWrapper">
          <Input placeholder="Nome" type="text" icon={FiUser} />
          <Input placeholder="E-mail" type="text" icon={FiMail} />
        </div>

        <div id="passwordInputWrapper">
          <Input placeholder="Senha Atual" type="password" icon={FiLock} />
          <Input placeholder="Nova Senha" type="password" icon={FiLock} />
        </div>

        <Button title="Salvar" />
      </Form>
    </Container>
  )
}
