import  { useEffect, useState } from 'react';
import api from '../../Services/api';
import { Link } from 'react-router-dom';

import Loader from '../../components/Loader';

import './home.css';




export default function Home() {

    const [filmes, setFilmes] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => { /**useEffect para chamar a API toda vez que a pagina for carregada. */

        async function loadFilmes() {
            /**Corpo da API para fazer a chamada na endpoint */

            const response = await api.get('movie/now_playing', {
                params: {
                    api_key: 'dbb3cfe4abf34e041d60ee088811235f',
                    language: 'pt-BR',
                    page: 1
                }
            })
            setFilmes(response.data.results.slice(0, 10));
            setLoading(false);
        }
        loadFilmes();

    }, []);

    if(loading) {
        return(
            <Loader />
        )
    }



    return(
        <div className='container'>
            <div className='listaFilmes'>
                <h2 className='informativo'>Acompanhe os Filmes Recentes em Cartaz!</h2>
                {filmes.map((filme) => {
                    return(
                        <article key={filme.id}>
                            <strong>{filme.title}</strong>
                            <img src= {`https://image.tmdb.org/t/p/original/${filme.poster_path}`} alt={filme.title} />
                            <Link to={`/filme/${filme.id}`}>Acessar</Link>
                        </article>
                    );
                })}
            </div>
        </div>
    );
}