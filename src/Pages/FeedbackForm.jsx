import React, { useState } from "react";
import { useForm } from "react-hook-form";
import * as motion from "motion/react-client";

export default function FeedbackForm() {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    console.log("Форма отправлена:", data);
    setSubmitted(true);
    reset();
  };

  return (
    <>
      <h1 className="text-center user-select-none mb-4">
        Заполните заявку на обратную связь
      </h1>

      {submitted && (
        <div className="alert alert-success text-center">
          Спасибо! Ваша заявка успешно отправлена 🎉
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Фамилия */}
        <div className="mb-3">
          <label className="form-label">Фамилия</label>
          <input
            {...register("lastName", {
              required: "Обязательное поле для заполнения",
              minLength: { value: 3, message: "Минимальная длина: 3 символа" },
            })}
            type="text"
            className="form-control"
            placeholder="Фамилия"
          />
          <div className="form-text text-danger">
            {errors.lastName?.message}
          </div>
        </div>

        {/* Имя */}
        <div className="mb-3">
          <label className="form-label">Имя</label>
          <input
            {...register("firstName", {
              required: "Обязательное поле для заполнения",
              minLength: { value: 2, message: "Минимальная длина: 2 символа" },
            })}
            type="text"
            className="form-control"
            placeholder="Имя"
          />
          <div className="form-text text-danger">
            {errors.firstName?.message}
          </div>
        </div>

        {/* Отчество */}
        <div className="mb-3">
          <label className="form-label">Отчество</label>
          <input
            {...register("middleName")}
            type="text"
            className="form-control"
            placeholder="Отчество"
          />
          <div className="form-text text-danger">
            {errors.middleName?.message}
          </div>
        </div>

        {/* Email */}
        <div className="mb-3">
          <label className="form-label">Электронная почта</label>
          <input
            {...register("email", {
              required: "Обязательное поле для заполнения",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Введите корректный email",
              },
            })}
            type="email"
            className="form-control"
            placeholder="Email"
          />
          <div className="form-text text-danger">{errors.email?.message}</div>
        </div>

        <div className="mb-3 text-center">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="btn btn-outline-primary"
            type="submit"
          >
            Отправить
          </motion.button>
        </div>
      </form>
    </>
  );
}
