import { Container, Form } from "./styles"

import { Link } from "react-router-dom"

import { FiArrowLeft } from "react-icons/fi"

import Header from "../../components/Header"
import Input from "../../components/Input"
import Textarea from "../../components/Textarea"
import TagItem from "../../components/TagItem"
import Button from "../../components/Button"

export default function New() {
  return (
    <Container>
      <Header />

      <main>
        <Form>
          <header>
            <Link to="/">
              <FiArrowLeft />
              Voltar
            </Link>

            <h2>Novo Filme</h2>
          </header>

          <div id="inputWrapper">
            <Input placeholder="Título" />

            <Input placeholder="Sua nota (de 0 a 5)" />
          </div>

          <Textarea placeholder="Observações" />

          <section id="marcadores">
            <p>Marcadores</p>

            <div id="tagItemWrapper">
              <ul>
                <li>
                  <TagItem value="Ficção Científica" />
                </li>
                <li>
                  <TagItem value="Drama" />
                </li>
                <li>
                  <TagItem isNew placeholder="Nova Tag" />
                </li>
              </ul>
            </div>
          </section>

          <div id="buttonWrapper">
            <Button colorInvert title="Excluir Filme" />
            <Button title="Salvar Alterações" />
          </div>
        </Form>
      </main>
    </Container>
  )
}
