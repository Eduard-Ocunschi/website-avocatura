"use client";

import { useForm } from "react-hook-form";
import styles from "./Form.module.css";
import toast from "react-hot-toast";

function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);

    try {
      await new Promise((res) => setTimeout(res, 10000));
      toast.success(
        "Mesajul a fost trimis cu sucches! Te vom contacta in curand."
      );
      reset();
    } catch (error) {
      toast.error("Mesajul nu a fost trimis! Te rugăm, încearcă din nou!");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <div className={styles.inner_form}>
        <p className={styles.titlu_form}>Suntem aici pentru a te ajuta!</p>
        <div className={styles.control_container}>
          <div className={styles.input_group}>
            <label htmlFor="name" className={styles.label}>
              Nume
            </label>
            <input
              id="name"
              type="text"
              className={styles.input}
              {...register("name", {
                required: "Numele este obligatoriu",
              })}
            />
            {errors.name && (
              <span className={styles.error}>{errors.name.message}</span>
            )}
          </div>

          <div className={styles.input_group}>
            <label htmlFor="surname" className={styles.label}>
              Prenume
            </label>
            <input
              id="surname"
              type="text"
              className={styles.input}
              {...register("surname")}
            />
            {errors.surname && (
              <span className={styles.error}>{errors.surname.message}</span>
            )}
          </div>
        </div>

        <div className={styles.control_container}>
          <div className={styles.input_group}>
            <label htmlFor="email" className={styles.label}>
              Email
            </label>
            <input
              id="email"
              type="email"
              className={styles.input}
              {...register("email", {
                required: "Email-ul este obligatoriu",
              })}
            />
            {errors.email && (
              <span className={styles.error}>{errors.email.message}</span>
            )}
          </div>

          <div className={styles.input_group}>
            <label htmlFor="phone" className={styles.label}>
              Telefon
            </label>
            <input
              id="phone"
              type="number"
              className={styles.input}
              {...register("phone")}
            />
            {errors.phone && (
              <span className={styles.error}>{errors.phone.message}</span>
            )}
          </div>
        </div>

        <div className={styles.input_group}>
          <label htmlFor="message" className={styles.label}>
            Mesaj
          </label>
          <textarea
            id="message"
            className={styles.textarea}
            {...register("message")}
          />
          {errors.message && (
            <span className={styles.error}>{errors.message.message}</span>
          )}
        </div>
        <button className={styles.btn_submit} disabled={isSubmitting}>
          {isSubmitting
            ? "Cerere in curs de trimitere..."
            : "Solicită o consultanță gratuită"}
        </button>
      </div>
    </form>
  );
}

export default Form;
