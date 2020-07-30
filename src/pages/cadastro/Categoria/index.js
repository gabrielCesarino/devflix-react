import React, { useState } from 'react'
import PageDefault from "../../../components/PageDefault"
import { Link } from 'react-router-dom'

function CadastroCategoria(){
   const [categorias, setCategorias] = useState(['Teste'])
   const valoresIniciais={
     nome: 'Valor',
     descricao: 'descricao',
     cor: '#000'
   }
   const [values, setValues] = useState(valoresIniciais)
    
   function setValue(chave, valor){
      setValues({
        ...values,
        [chave]: valor
      })
   }

   function onChangeHandler(e) {
    setValue(e.target.getAttribute('name'), e.target.value)
  }

    return(
      <PageDefault>
        <h1>Cadastro de Categoria: {values.nome}</h1>
        <form onSubmit={function handleSubmit (e){
          e.preventDefault()
          setCategorias([
            ...categorias,
            values
          ])
        }}>
          <div>
            <label>
              Nome da Categoria:
            <input type="text"
                name="nome"
                value={values.nome}
                onChange={onChangeHandler}
              />
            </label>
          </div>

          <div>
            <label>
              Descrição:
            <textarea
                value={values.descricao}
                name="descricao"
                onChange={onChangeHandler}
             />
            </label>
          </div>

          <div>
            <label>
              Descrição:
            <input type="color"
                value={values.cor}
                name="cor"
                onChange={onChangeHandler}
              />
            </label>
          </div>

          <button>Cadastrar</button>
        </form>

        <ul>
          {categorias.map((categoria, index) => {
            return (
              <li key={`${categoria}${index}`}>
                {categoria}
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