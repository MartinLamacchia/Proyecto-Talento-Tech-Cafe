import React, { createContext, useState, useEffect, useContext } from "react"
import axios from "axios";

export const AdminContext = createContext()

export const AdminProvider = ({ children }) => {
    const [addProduct, setAddProduct] = useState(false)
    const [updateProduct, setUpdateProduct] = useState(false)
    const [deleteProduct, setDeleteProduct] = useState(false)

    const handleAddProduct = () => {
        setAddProduct(true)
        setUpdateProduct(false)
        setDeleteProduct(false)
    }

        const handleAUpdateProduct = () => {
        setAddProduct(false)
        setUpdateProduct(true)
        setDeleteProduct(false)
    }

        const handleDeleteProduct = () => {
        setAddProduct(false)
        setUpdateProduct(false)
        setDeleteProduct(true)
    }

    const handleProduct = async (type, fomr) => {
        if (type === "add") {
            try {
                const {data} = await axios.post("https://api-cafes-production.up.railway.app/addProductToDB", fomr)
                console.log(data);
            } catch (error) {
                console.error("Error al cargar los productos:", error);
            }
        }
    }



    const value = {
        addProduct,
        handleAddProduct,
        updateProduct,
        deleteProduct,
        handleProduct,
        handleAUpdateProduct,
        handleDeleteProduct
    }

    return (
        <AdminContext.Provider value={value}>
            {children}
        </AdminContext.Provider>
    )

}

export const useAdminContext = () => {
    const context = useContext(AdminContext)
    if (!context) {
        throw new Error("useAppContext debe usarse dentro de AppProvider");
    }
    return context
}

