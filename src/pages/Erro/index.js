import { Link } from "react-router-dom";
import "./erro.css";
import { Fragment } from "react";

export default function Erro() {
  return (
    <Fragment>

        <div className="containerErro">
            <h2>404</h2>
            <span>Pagina não encontrada</span>
            <Link to='/'>Voltar para os Filmes</Link>
        </div>

    </Fragment>
  );
}
