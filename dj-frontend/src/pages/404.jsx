import { Link } from 'react-router-dom'

export default function Error404() {
  return (
    <main>
      <header aria-hidden></header>
      <h1 >404</h1>
      <h3> Opa, algo deu errado. </h3>
      <p>Desculpe, não conseguimos encontrar sua página.</p>
      <Link
        to='/'
      >
        Voltar para a página principal
      </Link>
      <footer aria-hidden>

      </footer>
    </main>
  )
}
