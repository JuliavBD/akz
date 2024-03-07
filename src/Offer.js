import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Offer = () => {
    useEffect(() => {
      AOS.init({
        duration: 1500,
      });
    }, []);

  return (
        <>
        <main className='positionCenter' id='boxOffer'>
            <section id='titleOffer' >
                <div className='animBox' data-aos="fade-right">
                    <div className='descriptiveText'>
                    <h1>Oferta</h1>
                    <p>Nasza firma tworzy unikatowe, nowoczesne i funkcjonalne meble na wymiar, dostosowane do Twoich potrzeb i gustu. Dzięki naszemu doświadczeniu i pasji do stolarstwa, zapewniamy pełne zadowolenie z naszych usług.</p>
                    </div>
                    </div>
                </section>
            <section className='boxesOffer'>
                <article className='offer '>
                    <h2>Kuchnie</h2>
                    <hr />
                    <p>Usługa mebli na wymiar do kuchni - funkcjonalne, estetyczne i trwałe rozwiązania dopasowane idealnie do Twoich potrzeb i przestrzeni.</p>
                </article>
                <article className='offer'>
                    <h2>Łazienki</h2>
                    <hr />
                    <p>Tworzymy meble łazienkowe na wymiar, łącząc funkcjonalność z eleganckim designem, zapewniając wyjątkową przestrzeń do relaksu i pielęgnacji.</p>
                </article>
                <article className='offer'>
                    <h2>Szafy</h2>
                    <hr />
                    <p>Zapewniamy szafki na wymiar, idealnie dopasowane do Twoich potrzeb i przestrzeni, łączące funkcjonalność z doskonałą jakością wykonania.</p>
                </article>
                <article className='offer'>
                    <h2>Garderoby</h2>
                    <hr />
                    <p>Nasze garderoby na wymiar oferują optymalną przestrzeń do przechowywania ubrań, łącząc funkcjonalność z elegancją.</p>
                </article>
                <article className='offer'>
                    <h2>Wszelkie zabudowy stolarskie</h2>
                    <hr />
                    <p>Dołożymy wszelkich starań by wykonać jak najlepszą zabudowe.</p>
                </article>
            </section>
        </main>
        </>
  );
};

export default Offer;