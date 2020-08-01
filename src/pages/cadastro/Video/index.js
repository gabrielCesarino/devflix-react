import React from 'react'
import PageDefault from "../../../components/PageDefault"
import { Link, useHistory } from 'react-router-dom'
import useForm from '../../../hooks/useForm'
import FormField from '../../../components/FormField'
import Button from '../../../components/Button'
import videoRepository from '../../../repositories/videos'

function CadastroVideo(){
    const { onChangeHandler, values } = useForm({
      titulo: 'Titulo Padrão',
      url: 'https://www.youtube.com/watch?v=Ll1uAZ-WRa0',
      categoria: 'Front End'
    })
    const history = useHistory()


    return(
      <PageDefault>
      <h1>Cadastro de vídeo</h1>

      <form onSubmit = {(e) => {
        e.preventDefault()

        videoRepository.create({
            titulo: values.titulo,
            values: values.url,
            categoriaId: 1,
          })
          .then(() => {
            console.log('Cadastrou com sucesso')
            history.push('/')
          })
       
      }}
      >
          <FormField
            label="Titulo do vídeo"
            name="titulo"
            value={values.titulo}
            onChange={onChangeHandler}
          />

          <FormField
            label="URL"
            name="titulo"
            value={values.url}
            onChange={onChangeHandler}
          />

          <FormField
            label="Categoria"
            name="categoria"
            value={values.categoria}
            onChange={onChangeHandler}
          />

          <Button type="submit">
            Cadastrar
          </Button>
      </form>


        <Link to='/cadastro/categoria'>
          Cadastrar Categoria
        </Link>
      </PageDefault>
    )
}

export default CadastroVideo