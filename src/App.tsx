import { Controller, useForm } from 'react-hook-form'
import './App.css'

type FormData = {
  name: string
}

export default function App() {
  const { control, handleSubmit } = useForm<FormData>({
    defaultValues: {
      name: '',
    },
  })

  function onSubmit(data: FormData) {
    console.log(data)
  }

  return (
    <div>
      <h1>Evento</h1>

      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          control={control}
          name="name"
          render={({ field }) => (
            <input placeholder="Nome do evento" type="text" {...field} />
          )}
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
