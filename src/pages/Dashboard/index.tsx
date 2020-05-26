import React from 'react'
import { FiChevronRight } from 'react-icons/fi'

import logoImg from '../../assets/logo.svg'

import { Title, Form, Repositories } from './styles'

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="Github Explorer" />
      <Title>Explore repositórios no Github.</Title>

      <Form>
        <input type="text" placeholder="Digite o nome do repositório" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="teste">
          <img
            src="https://avatars2.githubusercontent.com/u/5384507?s=460&v=4"
            alt="Amanda Vianna"
          />
          <div>
            <strong>amandavianna</strong>
            <p>Neque magni occaecati optio maiores enim aliquam.</p>
          </div>
          <FiChevronRight size={20} />
        </a>

        <a href="teste">
          <img
            src="https://avatars2.githubusercontent.com/u/5384507?s=460&v=4"
            alt="Amanda Vianna"
          />
          <div>
            <strong>amandavianna</strong>
            <p>Neque magni occaecati optio maiores enim aliquam.</p>
          </div>
          <FiChevronRight size={20} />
        </a>

        <a href="teste">
          <img
            src="https://avatars2.githubusercontent.com/u/5384507?s=460&v=4"
            alt="Amanda Vianna"
          />
          <div>
            <strong>amandavianna</strong>
            <p>Neque magni occaecati optio maiores enim aliquam.</p>
          </div>
          <FiChevronRight size={20} />
        </a>

        <a href="teste">
          <img
            src="https://avatars2.githubusercontent.com/u/5384507?s=460&v=4"
            alt="Amanda Vianna"
          />
          <div>
            <strong>amandavianna</strong>
            <p>Neque magni occaecati optio maiores enim aliquam.</p>
          </div>
          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  )
}

export default Dashboard
