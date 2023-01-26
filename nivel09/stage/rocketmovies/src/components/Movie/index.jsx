import { Container } from "./styles"

import RatingStar from "../RatingStar"
import Tag from "../../components/Tag"

export default function Movie({ data, ...rest }) {
  return (
    <Container {...rest}>
      <header>
        <h3>{data.title}</h3>
        <RatingStar rating={data.rating} />
      </header>

      <div id="description">
        <p>{data.description}</p>

        <span>...</span>
      </div>

      {data.tags && (
        <ul>
          {data.tags.map((tag) => (
            <li key={tag.id}>
              <Tag bgIsGray title={tag.name} />
            </li>
          ))}
        </ul>
      )}
    </Container>
  )
}
