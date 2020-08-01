import { useState } from 'react'


function useForm(valoresIniciais){
    const [values, setValues] = useState(valoresIniciais)
  
    function setValue(chave, valor) {
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
  
    function clearForm(){
      setValues(valoresIniciais)
    }
  
    return {
      values,
      onChangeHandler,
      clearForm,
    }
  
}

export default useForm