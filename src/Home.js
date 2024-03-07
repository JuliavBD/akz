import { Link} from "react-router-dom";
const Home = () => {
    return (
        <>
            <main className="homeBox positionCenter">
                <h1>AKZ - Meble wykonane z pasją</h1>
                <section className='homeText'>
                    <span>
                    Odkryj nasze meble na wymiar, zaprojektowane specjalnie dla Ciebie. Stwórz idealne wnętrze, które odzwierciedla Twój wyjątkowy styl życia.
                    </span>
                </section>
                <nav className='positionCenter' id='boxBtn'>
                    <Link to={'/offer'}><button className='homeBtn'>Oferta</button></Link> 
                    <Link to={'/gallery'}><button className='homeBtn'>Galeria</button></Link>
                    <Link to={'/contact'}><button className='homeBtn'>Kontakt</button></Link>
                </nav>
            </main>
        </>
    )
}

export default Home;