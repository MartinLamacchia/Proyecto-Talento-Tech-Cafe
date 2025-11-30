import React, { useState } from 'react'
import { useAdminContext } from '../../Context/AdminContext'
import styles from "./Dashboard.module.css"
import { useCartContext } from '../../Context/CartContext'

const Dashboard = () => {
    const { addProduct, handleAddProduct, handleProduct, handleAUpdateProduct, handleDeleteProduct, updateProduct, deleteProduct } = useAdminContext()
    const { products } = useCartContext()
    const [formData, setFormData] = useState({
        name: '',
        description: '',
        image: '',
        price: '',
        type: '',
        essence: ''
    })
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const newForm = { ...formData, [e.target.name]: e.target.value };

        setFormData(newForm);

        const validation = validateForm(newForm);
        setErrors(validation);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        handleProduct("add", formData);

    }

    console.log(products);



    return (
        <div className={styles.containerDashboard}>
            <h2>Dashboard - Area Administrativa</h2>

            <div className={styles.contentDashboard}>
                <ul>
                    <li onClick={handleAddProduct}>Cargar Nuevo Producto</li>
                    <li onClick={handleAUpdateProduct}>Modificar Producto</li>
                    <li onClick={handleDeleteProduct}>Eliminar Producto</li>
                </ul>
                {
                    addProduct && (
                        <div className={styles.formDashboard}>

                            <h3>Formulario para agregar nuevo producto</h3>

                            <form action="" className={styles.formAddProduct} onSubmit={handleSubmit}>
                                <input type="text" placeholder='Nombre del Producto' name="name" value={formData.name} onChange={handleChange} />
                                <input type="text" placeholder='Descripcion' name="description" value={formData.description} onChange={handleChange} />
                                <input type="text" placeholder='Imagen' name="image" value={formData.image} onChange={handleChange} />
                                <input type="number" placeholder='Precio' name="price" value={formData.price} onChange={handleChange} />
                                <input type="text" placeholder='Tipo' name="type" value={formData.type} onChange={handleChange} />
                                <input type="text" placeholder='Esencia' name="essence" value={formData.essence} onChange={handleChange} />
                                <button type='submit'>Agregar Producto</button>
                            </form>
                        </div>
                    )
                }

                {
                    (updateProduct || deleteProduct) && (
                        <div className={styles.formDashboard}>
                            <h3>Lista de Productos</h3>
                            <div className={styles.contentProducts}>
                                {
                                    products.map(product => (
                                        <div key={product.name} className={styles.product}>
                                            <img src={product.image[0]} alt="" />
                                            <h4>{product.name}</h4>
                                            <h4>{product.price}</h4>
                                            {
                                                updateProduct ? (<button className={styles.btnUpdate}>Modificar</button>) : deleteProduct && (<button className={styles.btnDelete}>Eliminar</button>)
                                            }
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    )
                }

            </div>
        </div>
    )
}

export default Dashboard

const validateForm = (formData) => {
    const newErrors = {};

    // Regex
    const nameRegex = /^[a-zA-Z0-9ÁÉÍÓÚáéíóúñÑ ]{3,30}$/;
    const urlRegex = /^(https?:\/\/.*\.(?:png|jpg|jpeg|gif|webp))$/i;

    if (!formData.name.trim()) {
        newErrors.name = "El nombre es obligatorio";
    } else if (!nameRegex.test(formData.name)) {
        newErrors.name = "El nombre solo puede tener letras, números y espacios (3 a 30 caracteres)";
    }

    if (!formData.description.trim()) {
        newErrors.description = "La descripción es obligatoria";
    } else if (formData.description.length < 10) {
        newErrors.description = "La descripción debe tener al menos 10 caracteres";
    }

    if (!formData.image.trim()) {
        newErrors.image = "La imagen es obligatoria";
    } else if (!urlRegex.test(formData.image)) {
        newErrors.image = "Debe ser una URL válida que termine en .jpg .png .jpeg .webp";
    }

    if (!formData.price) {
        newErrors.price = "El precio es obligatorio";
    } else if (formData.price <= 0) {
        newErrors.price = "El precio debe ser mayor a 0";
    }

    if (!formData.type.trim()) {
        newErrors.type = "El tipo es obligatorio";
    }

    if (!formData.essence.trim()) {
        newErrors.essence = "La esencia es obligatoria";
    }

    return newErrors; // <-- ✔ Ahora sí
};