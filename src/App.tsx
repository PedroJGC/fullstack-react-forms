import { useState } from 'react'
import './App.css'

export default function App() {
  const [name, setName] = useState('')

  function onSubmit(e: React.FormEvent<HTMLElement>) {
    e.preventDefault()

    setName('')
  }

  return (
    <div>
      <h1>Evento</h1>

      <form onSubmit={onSubmit}>
        <input
          onChange={(e) => setName(e.target.value)}
          placeholder="Nome do evento"
          type="text"
          value={name} /* Faz com que o input se torne controlado. */
        />
        <span className="error">Nome é obrigatório</span>

        <input lang="pt-BR" placeholder="Nome do evento" type="date" />

        <select defaultValue="">
          <option disabled value="">
            Selecione...
          </option>

          <option value="technology">React</option>
          <option value="entertainment">Node.js</option>
          <option value="business">Javascript</option>
          <option value="business">Typescript</option>
        </select>

        <textarea placeholder="Descrição" rows={4} />

        <button type="submit">Salvar</button>
      </form>
    </div>
  )
}
