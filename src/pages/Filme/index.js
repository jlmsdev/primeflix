import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from '../../Services/api'
import Loader from '../../components/Loader';

import { toast } from 'react-toastify';

import './filme.css';



export default function Filme() {

    const { id } = useParams();
    const [filme, setFilmes] = useState({});
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();
    
    useEffect(() => {
        async function loadFilmes() {
            await api.get(`/movie/${id}`, {
                params: {
                    api_key: 'dbb3cfe4abf34e041d60ee088811235f',
                    language: 'pt-BR'
                }
            })
            .then((res) => {
                setFilmes(res.data)
                setLoading(false);
            })
            .catch((err) => {
                console.log(`Algo deu errado ${err}`);
                navigate('/', { replace: true});
                return false;
            })
        }   
        loadFilmes();

        return () => {
            console.log(`Componente foi desmontado`)
        }

    }, [id, navigate])

    function salvarFilme() {
        const minhaLista = localStorage.getItem('jlmsFilmes');

        let filmesSalvos = JSON.parse(minhaLista) || [];

        const hasFilme = filmesSalvos.some((filmeSalvo) => filmeSalvo.id === filme.id )

        if(hasFilme) {
            toast.warn('Você já possui este filme na lista.', {
                position: "top-right",
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });
            return false;

        } else {

            filmesSalvos.push(filme);
            localStorage.setItem('jlmsFilmes', JSON.stringify(filmesSalvos))

            toast.info('Filme Favoritado', {
                position: "top-right",
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });

        }

        

        
    }

    if(loading) {

        return(
            <Loader />
        )
    }


    return(
        <div className="filmeInfo">
            <h1>{filme.title}</h1>
            <img src= {`https://image.tmdb.org/t/p/original/${filme.backdrop_path}`} alt={filme.title} />

            <h3>Sinopse</h3>
            <span className="detalheFilme">{filme.overview}</span>
            <strong>Avaliação: {filme.vote_average.toFixed(2)} / 10.00</strong>

            <div className="areaButtons">
                <button onClick={salvarFilme}>Salvar</button>

                <button>
                    <a href={`https://www.youtube.com/results?search_query=Trailer:${filme.title}`} target="blank" rel="external">Ver Trailer</a>
                </button>
            </div>

        </div>
    );
}