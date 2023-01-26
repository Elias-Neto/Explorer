import { FiPlus, FiSearch } from "react-icons/fi"

import { Container, Brand, Menu, Search, Content, NewNote } from "./styles"

import Header from "../../components/Header"
import ButtonText from "../../components/ButtonText"
import Input from "../../components/Input"
import Section from "../../components/Section"
import Note from "../../components/Note"

export default function Home() {
  return (
    <Container>
      <Brand>
        <h1>RocketNotes</h1>
      </Brand>

      <Header />

      <Menu>
        <li>
          <ButtonText title="Todos" isActive />
        </li>
        <li>
          <ButtonText title="Front-end" />
        </li>
        <li>
          <ButtonText title="Back-end" />
        </li>
      </Menu>

      <Search>
        <Input placeholder="Procurar pelo título" icon={FiSearch} />
      </Search>

      <Content>
        <Section title="Minhas Notas">
          <ul>
            <Note
              data={{
                title: "Introdução ao React",
                tags: [
                  { id: "1", name: "Front-end" },
                  { id: "2", name: "React" },
                ],
              }}
            />
            <Note
              data={{
                title: "Introdução ao Node.js",
                tags: [
                  { id: "1", name: "Back-end" },
                  { id: "2", name: "Node.js" },
                ],
              }}
            />
          </ul>
        </Section>
      </Content>

      <NewNote to="/new">
        <FiPlus />
        Criar Nota
      </NewNote>
    </Container>
  )
}
