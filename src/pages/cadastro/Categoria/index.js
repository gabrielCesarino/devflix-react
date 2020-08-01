import React, { useState, useEffect } from 'react'
import PageDefault from "../../../components/PageDefault"
import { Link } from 'react-router-dom'
import FormField from '../../../components/FormField'
import Button from '../../../components/Button'

function CadastroCategoria(){
  const valoresIniciais={
    nome: '',
    descricao: '',
    cor: ''
  }
   const [categorias, setCategorias] = useState([])
   const [values, setValues] = useState(valoresIniciais)
    
   function setValue(chave, valor){
      setValues({
        ...values,
        [chave]: valor
      })
   }

   function onChangeHandler(e) {
     setValue(
      e.target.getAttribute('name'), 
      e.target.value
      )
  }

  useEffect(() => {
    const urlCategorias = window.location.hostname.includes('localhost') 
    ? 'http://localhost:8080/categorias'
    : 'https://devflix-gabrielcesarino.herokuapp.com/categorias'
    fetch(urlCategorias)
      .then(async (respostaDoServidor) => {
        const resposta = await respostaDoServidor.json()
        setCategorias([
          ...resposta,
        ])
      })
  }, [])

    return(
      <PageDefault>
        <h1>Cadastro de Categoria: {values.nome}</h1>
        <form onSubmit={function handleSubmit (e){
          e.preventDefault()
          setCategorias([
            ...categorias,
            values
          ])
          setValues(valoresIniciais)
        }}>

          <FormField
            label="Nome da Categoria"
            type="text"
            name="nome"
            value = {values.nome}
            onChange = {onChangeHandler}
          />

          <FormField
            label = "Descrição"
            type="textarea"
            name="descricao"
            value = {values.descricao}
            onChange = {onChangeHandler}
          />

          <FormField
            label = "Cor"
            type="color"
            name="cor"
            value = {values.cor}
            onChange = {onChangeHandler}
          />

          <Button> Cadastrar </Button>
        </form>

        {categorias.lenght === 0 && (
          <div>
            Loading...
          </div>
        )}
        <ul>
          {categorias.map((categoria, index) => {
            return (
              <li key={`${categoria.nome}`}>
                {categoria.nome}
              </li>
            )
          })}
        </ul>

        <Link to="/">
          Ir para home
        </Link>
      </PageDefault>
    )
}

export default CadastroCategoria