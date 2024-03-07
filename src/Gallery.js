import Carousel from 'react-bootstrap/Carousel';
import product1 from './Gallery/product1.jpg';
import product2 from './Gallery/product2.jpg';
import product3 from './Gallery/product3.jpg';
import product4 from './Gallery/product4.jpg';
import productKitchen1 from './Gallery/productKitchen1.jpg';
import productKitchen2 from './Gallery/productKitchen2.jpg';
import productKitchen3 from './Gallery/productKitchen3.jpg';
import productKitchen4 from './Gallery/productKitchen4.jpg';
import productWardrobe1 from './Gallery/productWardrobe1.jpg';
import productWardrobe2 from './Gallery/productWardrobe2.jpg';
import productWardrobe3 from './Gallery/productWardrobe3.jpg';
import productWardrobe4 from './Gallery/productWardrobe4.jpg';
import productCabinet1 from './Gallery/productCabinet1.jpg';
import productCabinet2 from './Gallery/productCabinet2.jpg';
import productCabinet3 from './Gallery/productCabinet3.jpg';
import productCabinet4 from './Gallery/productCabinet4.jpg';
import productBathroom1 from './Gallery/productBathroom1.jpg';
import productBathroom2 from './Gallery/productBathroom2.jpg';
import productBathroom3 from './Gallery/productBathroom3.jpg';
import productBathroom4 from './Gallery/productBathroom4.jpg';
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Gallery = () => {
    useEffect(() => {
        AOS.init({
          duration: 1500,
        });
      }, []);

    return (
        <main id='gallery'>
            <section id='galleryTitle' >
                <div className='animBox ' data-aos="fade-right">
                    <div className='descriptiveText'>
                <h1>Galeria</h1>
                <p>Witaj w naszej Galerii! Zapraszamy do zapoznania się z wybranymi pracami naszej firmy, gdzie prezentujemy kilka z licznych projektów mebli na wymiar. Odkryj różnorodność naszych realizacji, inspirujących wzorów i precyzyjnego wykonania, które mogą stać się inspiracją dla Twojego wnętrza.</p>
                </div>
                </div>
            </section>
            <section className='boxGallery'>
    <h1>Wszelkie zabudowy stolarskie</h1>
    <Carousel className='carouselGallery'>
        <Carousel.Item>
            <img
                className="d-block w-100 photoGallery"
                src={product1}
                alt="Biała zabudowa łóżka"
            />
        </Carousel.Item>
        <Carousel.Item>
            <img
                className="d-block w-100 photoGallery"
                src={product2}
                alt="Biała zabudowa łóżka z wysuwanymi szufladami"
            />
        </Carousel.Item>
        <Carousel.Item>
            <img
                className="d-block w-100 photoGallery"
                src={product3}
                alt="Białe biurko na wymiar z trzema szufladami i dwiema półkami"
            />
        </Carousel.Item>
        <Carousel.Item>
            <img
                className="d-block w-100 photoGallery"
                src={product4}
                alt="Szara zabudowa łóżka"
            />
        </Carousel.Item>
    </Carousel>
</section>

<section className='boxGallery'>
    <h1>Kuchnie</h1>
    <Carousel className='carouselGallery'>
        <Carousel.Item>
            <img
                className="d-block w-100 photoGallery"
                src={productKitchen1}
                alt="Czarne meble na wymiar do kuchni, cała ścianka"
            />
        </Carousel.Item>
        <Carousel.Item>
            <img
                className="d-block w-100 photoGallery"
                src={productKitchen2}
                alt="Czarne meble na wymiar do kuchni z brązowym blatem"
            />
        </Carousel.Item>
        <Carousel.Item>
            <img
                className="d-block w-100 photoGallery"
                src={productKitchen3}
                alt="Biało-brązowe szafki do kuchni z miejscem na kuchenkę"
            />
        </Carousel.Item>
        <Carousel.Item>
            <img
                className="d-block w-100 photoGallery"
                src={productKitchen4}
                alt="Białe szafki na wymiar z brązowym blatem w kuchni "
            />
        </Carousel.Item>
    </Carousel>
</section>

<section className='boxGallery'>
    <h1>Łazienki</h1>
    <Carousel className='carouselGallery'>
        <Carousel.Item>
            <img
                className="d-block w-100 photoGallery"
                src={productBathroom1}
                alt="Biała szafka z blatem i białym zlewem w łazience"
            />
        </Carousel.Item>
        <Carousel.Item>
            <img
                className="d-block w-100 photoGallery"
                src={productBathroom2}
                alt="Biała szafka z blatem w łazience"
            />
        </Carousel.Item>
        <Carousel.Item>
            <img
                className="d-block w-100 photoGallery"
                src={productBathroom3}
                alt="Biała szafka otoczona ciemnobrązowymi elementami z miejscem na zlew"
            />
        </Carousel.Item>
        <Carousel.Item>
            <img
                className="d-block w-100 photoGallery"
                src={productBathroom4}
                alt="Biała szafka w łazience"
            />
        </Carousel.Item>
    </Carousel>
</section>

<section className='boxGallery'>
    <h1>Szafy</h1>
    <Carousel className='carouselGallery'>
        <Carousel.Item>
            <img
                className="d-block w-100 photoGallery"
                src={productCabinet1}
                alt="Biała szafka z podświetleniem w łazience"
            />
        </Carousel.Item>
        <Carousel.Item>
            <img
                className="d-block w-100 photoGallery"
                src={productCabinet2}
                alt="Biała duża szafa z miejscem na pralkę w łazience"
            />
        </Carousel.Item>
        <Carousel.Item>
            <img
                className="d-block w-100 photoGallery"
                src={productCabinet3}
                alt="Biała szafka z wieloma półkami"
            />
        </Carousel.Item>
        <Carousel.Item>
            <img
                className="d-block w-100 photoGallery"
                src={productCabinet4}
                alt="Szafka z płyty meblowej imitującej drewno"
            />
        </Carousel.Item>
    </Carousel>
</section>
        <section className='boxGallery'>
              <h1>Garderoby</h1>
          <Carousel className='carouselGallery'>
          <Carousel.Item>
          <img
            className="d-block w-100 photoGallery"
            src={productWardrobe1}
            alt="Szafa z płyty meblowej w kolorze brązowym"
          />
          </Carousel.Item>
          <Carousel.Item>
          <img
            className="d-block w-100 photoGallery"
            src={productWardrobe2}
            alt="Szafa z płyty meblowej w kolorze jasno brązowym"
          />
          </Carousel.Item>
          <Carousel.Item>
          <img
            className="d-block w-100 photoGallery"
            src={productWardrobe3}
            alt="Szafa z płyty meblowej w kolorze szarym z dużym lustrem"
          />
          </Carousel.Item>
          <Carousel.Item>
          <img
            className="d-block w-100 photoGallery"
            src={productWardrobe4}
            alt="Szafa z płyty meblowej w kolorze jasno białym"
          />
          </Carousel.Item>
        </Carousel>
        </section>
        </main>
    )
}
export default Gallery;