import styles from "./Testimonials.module.css";
import TestimonialCard from "../TestimonialCard/TestimonialCard";

const testimonials = [
  {
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor consectetur adipiscing elitconsectetur adipiscingelit consectetur adipiscing elit incididunt ut labore et doloremagna aliqua.",
    client: "Hermione Granger",
    company: "Founder Company S.A.",
    image: "/cabin-001.jpg",
  },
  {
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor consectetur adipiscing elitconsectetur adipiscingelit consectetur adipiscing elit incididunt ut labore et doloremagna aliqua.",
    client: "Joe Doevinson",
    company: "Company S.A.",
    image: "/cabin-002.jpg",
  },
  {
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor consectetur adipiscing elit incididunt ut tempor consectetur adipiscing elit incididunt ut labore et dolore magna aliqua.",
    client: "Mark Twain",
    company: "Founder Company S.A.",
    image: "/cabin-003.jpg",
  },
];

function Testimonials() {
  return (
    <section className={styles.testimonials_section}>
      <div className={styles.titles}>
        <h2 className={styles.title}>Ce spun clientii nostri</h2>
        <p className={styles.subtitle}>Testimoniale</p>
      </div>
      <div className={styles.testimonials_container}>
        {testimonials.map((testimonial, index) => (
          <TestimonialCard
            text={testimonial.text}
            client={testimonial.client}
            company={testimonial.company}
            image={testimonial.image}
            key={testimonial.client}
          />
        ))}
      </div>
    </section>
  );
}

export default Testimonials;
