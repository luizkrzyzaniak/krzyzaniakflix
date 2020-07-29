import React, {useState} from 'react';
import PageDefault from '../../../components/PageDefault';
import { Link } from 'react-router-dom';
import FormField from '../../../components/FormField';

function CadastroCategoria(){
    
    const valoresIniciais = {
        nome: '',
        descricao: '',
        cor: '#000000'
    }
    const [values, setValues] = useState(valoresIniciais);
    const [categorias, setcategorias] = useState([]);

    function setValue(chave, valor){
        setValues({
            ...values,
            [chave]: valor,
        })
    }

    // function handleChange(info){
    //     const { getAttribute, value} = info.target;
    //     setValue(
    //         getAttribute('name'),
    //         value
    //     );
    // }
    function handleChange(info) {
        setValue(
            info.target.getAttribute('name'),
            info.target.value
        );
      }

    return (
        <PageDefault>
            <h1>Cadastro de Categoria: {values.nome}</h1>
            <form onSubmit={function handleSubmit(info) {
                info.preventDefault();
                setcategorias([
                    ...categorias,
                    values
                ]);
                setValues(valoresIniciais);
            }}>
                <FormField
                    label="Nome da Categoria:" 
                    type="text"
                    name="nome"
                    value={values.nome}
                    onChange={handleChange}
                />
                <div>
                    <label>
                        Descrição:
                        <textarea type="text"
                            name="descricao"
                            value={values.descricao}
                            onChange={handleChange}
                        />
                    </label>
                </div>
                <FormField
                    label="Cor" 
                    type="color"
                    name="cor"
                    value={values.cor}
                    onChange={handleChange}
                />
                <button>
                    Cadastrar
                </button>
            </form>

            <ul>
                {categorias.map((categoria, indice) => {
                    return (
                        <li key={`${categoria}${indice}`}>
                            {categoria.nome}
                        </li>
                    )
                })}
            </ul>

            <Link to="/cadastro/video">
                Voltar
            </Link>
        </PageDefault>
    )
}

export default CadastroCategoria;