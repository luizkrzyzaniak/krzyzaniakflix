import React from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../components/PageDefault';
import img404 from '../../assets/img/page404.png';
import './style.css';
import Button from '../../components/button';

function Page404() {
  return (
    <PageDefault>
      <div className="img404">
        <img src={img404} alt="Pagina não encotrada" />
      </div>
      <div className="divButton">
        <Button as={Link} className="ButtonLink" to="/">
          Voltar para a Home
        </Button>
      </div>

    </PageDefault>
  );
}

export default Page404;
