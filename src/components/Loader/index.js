import './loader.css';


export default function Loader() {
    return(
        <div className='loader'>
               <div className="loader">
                    <div className="cell d-0"></div>
                    <div className="cell d-1"></div>
                    <div className="cell d-2"></div>

                    <div className="cell d-1"></div>
                    <div className="cell d-2"></div>
                    
                    
                    <div className="cell d-2"></div>
                    <div className="cell d-3"></div>
                    
                    
                    <div className="cell d-3"></div>
                    <div className="cell d-4"></div>
                </div>
                <div className='textLoading'>
                    Carregando
                </div>
            </div>
    )
}