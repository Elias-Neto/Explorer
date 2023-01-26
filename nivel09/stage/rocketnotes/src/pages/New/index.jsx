import { Container, Form } from "./styles"

import { Link } from "react-router-dom"

import Header from "../../components/Header"
import Input from "../../components/Input"
import Textarea from "../../components/Textarea"
import Section from "../../components/Section"
import LinkItem from "../../components/LinkItem"
import Button from "../../components/Button"

export default function New() {
  return (
    <Container>
      <Header />

      <main>
        <Form>
          <header>
            <h1>Criar Nota</h1>
            <Link to="/">Voltar</Link>
          </header>

          <div id="inputWrapper">
            <Input placeholder="Título" />

            <Textarea placeholder="Observações" />
          </div>

          <Section title="Links Úteis" id="links">
            <ul>
              <li>
                <LinkItem value="https://rocketseat.com.br" />
              </li>
              <li>
                <LinkItem isNew placeholder="Novo Link" />
              </li>
            </ul>
          </Section>

          <Section title="Marcadores" id="tags">
            <ul>
              <li>
                <LinkItem value="Front-end" />
              </li>
              <li>
                <LinkItem isNew placeholder="Nova Tag" />
              </li>
            </ul>
          </Section>

          <Button title="Salvar" />
        </Form>
      </main>
    </Container>
  )
}
