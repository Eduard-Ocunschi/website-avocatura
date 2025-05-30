import Form from "../Form/Form";
import styles from "./Contact.module.css";
import ContactCard from "../ContactCard/ContactCard";
import { Suspense, lazy } from "react";
import Spinner from "../Spinner/Spinner";
const Map = lazy(() => import("../Map/Map"));

const information = [
  {
    icon: "/pin.svg",
    title: "Adresa",
    data1: "Bd. Lapusneanu, 23",
    data2: "Bucuresti, Sector 5",
    href: "https://maps.app.goo.gl/ihgJxrPuWFeKLKNb6",
    alt: "Iconita adresa",
  },
  {
    icon: "/phone.svg",
    title: "Numere de telefon",
    data1: "+40 (257) 388-689",
    data2: "+40 (333) 388-459",
    alt: "Iconita telefon",
  },
  {
    icon: "/mail.svg",
    title: "Adrese de Email",
    data1: "email@yahoo.com",
    data2: "placeholder@gmail.com",
    alt: "Iconita email",
  },
  {
    icon: "/time.svg",
    title: "Program de lucru",
    data1: "Lu-Vi  08:00AM - 08:00PM ",
    data2: "Sâ-Du  10:00AM - 02:00PM",
    alt: "Iconita program",
  },
];

function Contact() {
  return (
    <>
      <section className={styles.section_contact}>
        <h1 className={styles.titlu}>Contactează-ne</h1>
        <div className={styles.container}>
          <div className={styles.container_right}>
            <Form />
          </div>
          <div className={styles.container_left}>
            <div className={styles.text_container}>
              <h2 className={styles.subtitle}>
                Ai o intrebare? <br />
                Nu ezita sa ne contactezi!
              </h2>
              <p className={styles.text}>
                Adipiscing nam neque hendrerit nec pellentesque diam a. Varius
                quisque odio mauris lectus consequat sed. Pretium purus feugiat
                volutpat{" "}
              </p>
            </div>
            <div className={styles.informations}>
              {information.map((info) => (
                <ContactCard {...info} key={info.title} />
              ))}
            </div>
          </div>
        </div>
      </section>
      <Suspense fallback={<Spinner />}>
        <Map />
      </Suspense>
    </>
  );
}

export default Contact;
