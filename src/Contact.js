import { Table } from "react-bootstrap";

const Contact = () => {
    return (
        <main id="contact" className="positionCenter">
            <section id="mainContactBox" className="positionCenter">
                <div id="contactText" >
                    <h1>Kontakt</h1><hr />
                    <p>Zapraszamy do kontaktu, abyśmy mogli wspólnie stworzyć idealne rozwiązanie dla Twojej przestrzeni!</p><hr />
                </div>
                <section id="positionContact">
                <div className="contactMedia">
                    <h3>DANE KONTAKTOWE</h3><hr />
                    <b>Telefon: </b><a className="btnLink" href="tel:+48 535279758">+48 535279758</a><br />
                    <b>E-mail: </b><a className="btnLink" href="mailto:akz.meble.kijewski@o2.pl">akz.meble.kijewski@o2.pl</a><br />
                    
                </div>
                <section className="contactMedia">
                    <h3>GODZINY OTWARCIA</h3><hr />
                    <table>
            <tbody>
                <tr>
                    <td>Poniedziałek-Piatęk</td>
                    <td>09:00 - 17:00</td>
                </tr>
                <tr>
                    <td>Sobota-Niedziela</td>
                    <td>ZAMKNIĘTE</td>
                </tr>
            </tbody>
        </table>
                </section>
                
                </section>
                <section className="media">
                    <h3>MEDIA SPOŁECZNOŚCIOWE</h3> <hr />
                    <a className="btnLink" href="https://www.facebook.com/profile.php?id=100086287315254" target="blank"><b>Facebook</b></a>
                </section>
                <section>
                    <h3>LOKALIZACJA</h3><hr />
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2509.986924930411!2d20.48527328946771!3d51.016390398751405!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47182d1cd55774bb%3A0x1267a407b326705f!2sEkologiczna%2024%2C%2026-080%20Mni%C3%B3w!5e0!3m2!1spl!2spl!4v1709745261594!5m2!1spl!2spl" height="250" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe><hr />
                </section>
                
            </section>
        </main>
    )
}
export default Contact;