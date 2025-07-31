import { Controller, useForm } from 'react-hook-form'
import './App.css'

type FormData = {
  name: string
  data: string
  subject: string
}

export default function App() {
  const { control, handleSubmit } = useForm<FormData>({
    defaultValues: {
      name: '',
      data: '',
      subject: '',
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

        <Controller
          control={control}
          name="data"
          render={({ field }) => (
            <input
              lang="pt-BR"
              placeholder="Nome do evento"
              type="date"
              {...field}
            />
          )}
        />

        <Controller
          control={control}
          name="subject"
          render={({ field }) => (
            <select {...field}>
              <option disabled value="">
                Selecione...
              </option>

              <option value="react">React</option>
              <option value="nodejs">Node.js</option>
              <option value="javascript">Javascript</option>
              <option value="typescript">Typescript</option>
            </select>
          )}
        />

        <textarea placeholder="Descrição" rows={4} />

        <button type="submit">Salvar</button>
      </form>
    </div>
  )
}
