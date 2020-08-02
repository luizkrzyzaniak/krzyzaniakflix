import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/button';
import useForm from '../../../hooks/useForm';

function CadastroCategoria() {
  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '#000000',
  };

  const { handleChange, values, clearForm } = useForm(valoresIniciais);

  const [categorias, setcategorias] = useState([]);

  useEffect(() => {
    const URL = window.location.hostname.includes('localhost')
      ? 'http://localhost:8080/categorias'
      : 'https://krzyzaniakflix.herokuapp.com/categorias';
    fetch(URL)
      .then(async (respServ) => {
        const resposta = await respServ.json();
        setcategorias([
          ...resposta,
        ]);
      });
  }, []);

  return (
    <PageDefault>
      <h1>
        Cadastro de Categoria:
        {values.nome}
      </h1>
      <form onSubmit={function handleSubmit(info) {
        info.preventDefault();
        setcategorias([
          ...categorias,
          values,
        ]);
        clearForm();
      }}
      >
        <FormField
          label="Nome da Categoria:"
          type="text"
          name="nome"
          value={values.nome}
          onChange={handleChange}
        />
        <FormField
          label="Descrição:"
          type="textarea"
          name="descricao"
          value={values.descricao}
          onChange={handleChange}
        />
        <FormField
          label="Cor:"
          type="color"
          name="cor"
          value={values.cor}
          onChange={handleChange}
        />
        <Button>
          Cadastrar
        </Button>
      </form>
      { categorias.length === 0 && (
      <div>
        Loanding
      </div>
      )}
      <ul>
        {categorias.map((categoria) => (
          <li key={`${categoria.nome}`}>
            {categoria.nome}
          </li>
        ))}
      </ul>

      <Link to="/cadastro/video">
        Voltar
      </Link>
    </PageDefault>
  );
}

export default CadastroCategoria;
