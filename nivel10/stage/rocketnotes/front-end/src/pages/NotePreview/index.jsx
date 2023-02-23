import { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"

import api from "../../services/api"

import { Container, Content, Links, Tags } from "./styles"

import Button from "../../components/Button"
import Header from "../../components/Header"
import Section from "../../components/Section"
import Tag from "../../components/Tag"
import ButtonText from "../../components/ButtonText"

export default function NotePreview() {
  const [data, setData] = useState(null)

  const parms = useParams()
  const navigate = useNavigate()

  function handleBack() {
    navigate(-1)
  }

  async function handleRemove() {
    const confirm = window.confirm("Deseja realmente remover a nota?")

    if (confirm) {
      await api.delete(`/notes/${parms.id}`)
      navigate(-1)
    }
  }

  useEffect(() => {
    async function fetchNote() {
      const response = await api.get(`/notes/${parms.id}`)
      setData(response.data)
    }

    fetchNote()
  }, [])

  return (
    <Container>
      <Header />

      {data && (
        <main>
          <Content>
            <ButtonText title="Excluir Nota" isActive onClick={handleRemove} />

            <div id="text">
              <h1>{data.title}</h1>

              <p>{data.description}</p>
            </div>

            <div id="sections">
              {data.links && (
                <Section title="Links Úteis">
                  <Links>
                    {data.links.map((link, index) => (
                      <li key={String(index)}>
                        <a href={link.url} target="_blank">
                          {link.url}
                        </a>
                      </li>
                    ))}
                  </Links>
                </Section>
              )}

              {data.tags && (
                <Section title="Marcadores">
                  <Tags>
                    {data.tags.map((tag, index) => (
                      <li key={String(index)}>
                        <Tag title={tag.name} />
                      </li>
                    ))}
                  </Tags>
                </Section>
              )}
            </div>

            <Button title="Voltar" id="return" onClick={handleBack} />
          </Content>
        </main>
      )}
    </Container>
  )
}
