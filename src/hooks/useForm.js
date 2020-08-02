import { useState } from 'react';

function useForm(valoresIniciais) {
  const [values, setValues] = useState(valoresIniciais);

  function setValue(chave, valor) {
    setValues({
      ...values,
      [chave]: valor,
    });
  }

  // function handleChange(info) {
  //     const { getAttribute, value} = info.target;
  //     setValue(
  //         getAttribute('name'),
  //         value
  //     );
  // }
  function handleChange(info) {
    setValue(
      info.target.getAttribute('name'),
      info.target.value,
    );
  }

  function clearForm() {
    setValues(valoresIniciais);
  }

  return {
    values,
    handleChange,
    clearForm,
  };
}

export default useForm;
