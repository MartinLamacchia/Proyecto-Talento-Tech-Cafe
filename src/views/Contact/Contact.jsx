import React, { useState } from 'react'
import Nav from '../../components/Nav/Nav'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const Contact = () => {
  const [form, setForm] = useState({
    email: "",
    name: "",
    message: ""
  })

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  console.log(form);


  return (
    <>
      <h2>Contactanos</h2>
      <form action="" onSubmit={handleSubmit}>
        <div className="container mt-5">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="name@example.com"
            name={"email"}
            value={form.email}
            onChange={handleChange}
          />
        </div>
        <div className="container mt-5">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Nombre Completo
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="name@example.com"
            name={"name"}
            value={form.name}
            onChange={handleChange}
          />
        </div>
        <div className="container mt-5">
          <label
            htmlFor="exampleFormControlTextarea1"
            className="form-label"
          >
            Mensaje
          </label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
            name={"message"}
            value={form.message}
            onChange={handleChange}
          ></textarea>
        </div>
        <div className='container mt-5'>
          {
            form.email !== "" && form.name !== "" && form.message !== "" ? (
              <button type="button" className="btn btn-outline-primary">Enviar</button>
            ) : (
              <button type="button" class="btn btn-secondary" disabled>Enviar</button>
            )
          }

        </div>
      </form>
    </>
  )
}

export default Contact