import CardAbout from "../CardAbout/CardAbout";
import styles from "./About.module.css";
import { RiAuctionFill } from "react-icons/ri";
import { RiShakeHandsFill } from "react-icons/ri";
import { GrSafariOption } from "react-icons/gr";
import { RiBuilding2Fill } from "react-icons/ri";
import Image from "next/image";
import thinker from "@/public/thinker.jpg";

function About() {
  const textData = [
    {
      title: "Te vom reprezenta agresiv",
      text: "Nulla fringilla, orci ac euismod semper, magna diam porttitor mauris, quis sollicitudin.",
      icon: <RiAuctionFill />,
    },
    {
      title: "Castigul tau este castigul nostru",
      text: "Nulla fringilla, orci ac euismod semper, magna diam porttitor mauris, quis sollicitudin.",
      icon: <RiShakeHandsFill />,
    },
    {
      title: "Consultanta activa mereu",
      text: "Morbi euismod magna ac lorem rutrum elementum. Donec viverra auctor lobortis.",
      icon: <RiBuilding2Fill />,
    },
    {
      title: "Te vom indruma la fiecare pas",
      text: "Aliquam erat volutpat., orci ac euismod semper, nec diam  mattis viverra, quis sollicitudin.",
      icon: <GrSafariOption />,
    },
  ];

  return (
    <section className={styles.section_about}>
      <div className={styles.container_main}>
        <h1 className={styles.section_title}>Despre noi</h1>
        <article className={styles.text_about}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
          luctus urna sed urna ultricies ac tempor dui sagittis. In condimentum
          facilisis porta. Sed nec diam eu diam mattis viverra. Nulla fringilla,
          orci ac euismod semper, magna diam porttitor mauris, quis sollicitudin
          sapien justo in libero. Vestibulum mollis mauris enim. Morbi euismod
          magna ac lorem rutrum elementum. Donec viverra auctor lobortis.
          Pellentesque eu est a nulla placerat dignissim. Morbi a enim in magna
          semper bibendum. Etiam scelerisque, nunc ac egestas consequat, odio
          nibh euismod nulla, eget auctor orci nibh vel nisi. Aliquam erat
          volutpat.
        </article>
        <article className={styles.section_reasons}>
          <div className={styles.container_reasons}>
            <h3 className={styles.reasons_title}>De ce noi?</h3>
            <div className={styles.reasns_cards}>
              {textData.map((data) => (
                <CardAbout
                  title={data.title}
                  text={data.text}
                  icon={data.icon}
                  key={data.title}
                />
              ))}
            </div>
          </div>
          <div className={styles.reasons_picture}>
            <Image src={thinker} fill alt="Picture" />
          </div>
        </article>
      </div>
    </section>
  );
}

export default About;
