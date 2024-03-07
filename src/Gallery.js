import Carousel from "react-bootstrap/Carousel";
import product1 from "./Gallery/product1.jpg";
import product2 from "./Gallery/product2.jpg";
import product3 from "./Gallery/product3.jpg";
import product4 from "./Gallery/product4.jpg";
import product5 from "./Gallery/product5.jpg";
import product6 from "./Gallery/product6.jpg";
import kitchen1 from "./Gallery/kitchen1.jpg";
import kitchen2 from "./Gallery/kitchen2.jpg";
import kitchen3 from "./Gallery/kitchen3.jpg";
import kitchen4 from "./Gallery/kitchen4.jpg";
import kitchen5 from "./Gallery/kitchen5.jpg";
import kitchen6 from "./Gallery/kitchen6.jpg";
import wardrobe1 from "./Gallery/wardrobe1.jpg";
import wardrobe2 from "./Gallery/wardrobe2.jpg";
import wardrobe3 from "./Gallery/wardrobe3.jpg";
import closet1 from "./Gallery/closet1.jpg";
import closet2 from "./Gallery/closet2.jpg";
import closet3 from "./Gallery/closet3.jpg";
import closet4 from "./Gallery/closet4.jpg";
import closet5 from "./Gallery/closet5.jpg";
import closet6 from "./Gallery/closet6.jpg";
import bathroom1 from "./Gallery/bathroom1.jpg";
import bathroom2 from "./Gallery/bathroom2.jpg";
import bathroom3 from "./Gallery/bathroom3.jpg";
import bathroom4 from "./Gallery/bathroom4.jpg";
import bathroom5 from "./Gallery/bathroom5.jpg";
import bathroom6 from "./Gallery/bathroom6.jpg";
import bathroom7 from "./Gallery/bathroom7.jpg";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Gallery = () => {
  useEffect(() => {
    AOS.init({
      duration: 1500,
    });
  }, []);

  return (
    <main id="gallery">
      <section id="galleryTitle">
        <div className="animBox " data-aos="fade-right">
          <div className="descriptiveText">
            <h1>Galeria</h1>
            <p>
              Witaj w naszej Galerii! Zapraszamy do zapoznania się z wybranymi
              pracami naszej firmy, gdzie prezentujemy kilka z licznych
              projektów mebli na wymiar. Odkryj różnorodność naszych realizacji,
              inspirujących wzorów i precyzyjnego wykonania, które mogą stać się
              inspiracją dla Twojego wnętrza.
            </p>
          </div>
        </div>
      </section>
      <section className="boxGallery">
        <h1>Wszelkie zabudowy stolarskie</h1>
        <Carousel className="carouselGallery">
          <Carousel.Item>
            <img
              className="d-block w-100 photoGallery"
              src={product1}
              alt="Zabudowa z płyty meblowej"
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
              alt="Białe biurko z trzema szufladami i dwiema półkami"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 photoGallery"
              src={product4}
              alt="Zabudowa z płyty meblowej drewno podobnej w kolorze ciemnobrązowym"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 photoGallery"
              src={product5}
              alt="Zabudowa pod schodami z trzema szufladami"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 photoGallery"
              src={product6}
              alt="Zabudowa z płyty meblowej w kolorze beżowym"
            />
          </Carousel.Item>
        </Carousel>
      </section>

      <section className="boxGallery">
        <h1>Kuchnie</h1>
        <Carousel className="carouselGallery">
          <Carousel.Item>
            <img
              className="d-block w-100 photoGallery"
              src={kitchen1}
              alt="Biała zabudowa do kuchni z jasnobrązowym blatem"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 photoGallery"
              src={kitchen2}
              alt="Biała zabudowa do kuchni z jasnobrązowym blatem, widok z drugiej strony"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 photoGallery"
              src={kitchen3}
              alt="Czarna zabudowa do kuchni wraz z szarymi szafkami z jasnym blatem"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 photoGallery"
              src={kitchen4}
              alt="Czarna część zabudowy do kuchni, widok z bliska"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 photoGallery"
              src={kitchen5}
              alt="Szara zabudowa do kuchni z jasnobrązowym blatem, z miejsce na zmywarkę"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 photoGallery"
              src={kitchen6}
              alt="Szara zabudowa do kuchni, widok z drugiej strony"
            />
          </Carousel.Item>
        </Carousel>
      </section>

      <section className="boxGallery">
        <h1>Łazienki</h1>
        <Carousel className="carouselGallery">
          <Carousel.Item>
            <img
              className="d-block w-100 photoGallery"
              src={bathroom1}
              alt="Biała szafka z blatem i białym zlewem w łazience"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 photoGallery"
              src={bathroom2}
              alt="Szafka z płyty meblowej drewno podobnej w kolorze ciemnego brązu z kilkoma szufladami i białym zlewem w łazience"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 photoGallery"
              src={bathroom3}
              alt="Biała szafka do łazienki z kilkoma szufladami i jasnym blatem i białym zlewem"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 photoGallery"
              src={bathroom4}
              alt="Biała szafka do łazienki z jasnym blatem i białym zlewem"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 photoGallery"
              src={bathroom5}
              alt="Biała duża szafa do łazienki z miejscem na pralkę"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 photoGallery"
              src={bathroom6}
              alt="Biała duża szafka z elementami drewnopodobnymi wokół w kolorze ciemno brązowym w łazience"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 photoGallery"
              src={bathroom7}
              alt="Biała szafka podświetlana od spodu w łazience"
            />
          </Carousel.Item>
        </Carousel>
      </section>

      <section className="boxGallery">
        <h1>Szafy</h1>
        <Carousel className="carouselGallery">
          <Carousel.Item>
            <img
              className="d-block w-100 photoGallery"
              src={closet1}
              alt="Biała szafa z rozsuwanymi drzwiami"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 photoGallery"
              src={closet2}
              alt="Szafa z płyty meblowej w kolorze jasnobrązowym"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 photoGallery"
              src={closet3}
              alt="Biała szafa z rozsuwanymi drzwiami w kolorze jasnobrązowym"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 photoGallery"
              src={closet4}
              alt="Szara szafa z dużym lustrem"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 photoGallery"
              src={closet5}
              alt="Biała duża szafa"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 photoGallery"
              src={closet6}
              alt="Szafka na buty w odcieniu jasnobrązowym"
            />
          </Carousel.Item>
        </Carousel>
      </section>

      <section className="boxGallery">
        <h1>Garderoby</h1>
        <Carousel className="carouselGallery">
          <Carousel.Item>
            <img
              className="d-block w-100 photoGallery"
              src={wardrobe1}
              alt="Mała biała garderoba z wieloma półkami"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 photoGallery"
              src={wardrobe2}
              alt="Duża biała garderoba z wieloma półkami"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 photoGallery"
              src={wardrobe3}
              alt="Garderoba z płyty meblowej w jasnobrązowym kolorze z dużym lustrem pośrodku"
            />
          </Carousel.Item>
        </Carousel>
      </section>
    </main>
  );
};
export default Gallery;
