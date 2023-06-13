import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';


import './favoritos.css';

export default function Favoritos() {
    const [filmes, setFilmes] = useState([]);

    useEffect(() => {
        let minhaLista = localStorage.getItem('jlmsFilmes');
         setFilmes(JSON.parse(minhaLista) || [] );

    }, [])

    function excluirFilme(id) {
        let filtroFilmes = filmes.filter((item) => {
            return (item.id !== id);
        })

        setFilmes(filtroFilmes);
        localStorage.setItem('jlmsFilmes', JSON.stringify(filtroFilmes));

        toast.success('Filme Excluido da lista.', {
            position: "top-right",
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
        
    }



    return(
        <div className='filmesFavoritos'>
            <h1>Filmes Favoritados</h1>

            {filmes.length === 0 && <span>Você não possui nenhum filme salvo :(</span>}

            <ul className='listaFavoritos'>
                {
                    filmes.map((item) => {
                        return(
                            <li key={item.id}>
                                <span>{item.title}</span>

                                <div className='btn'>
                                    <Link to={`/filme/${item.id}`}>Detalhes do Filme</Link>
                                    <button onClick={() => excluirFilme(item.id)}>Excluir Filme</button>
                                </div>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    );
}