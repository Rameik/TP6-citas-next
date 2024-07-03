'use client'
import { createContext, useState, useEffect } from "react";
import Cita from "../models/Cita";

export const CitasContext = createContext()

export function CitasProvider ({children}) {
    const [citas, setCitas] = useState([])

    useEffect(() => {
        setCitas(JSON.parse(window.localStorage.getItem('citas')) ? JSON.parse(window.localStorage.getItem('citas')) : [new Cita("Nina", "Martin", "2021-08-05", "08:20", "Le duele la pierna"),
            new Cita("Sifon", "Flecha", "2023-08-05", "09:24", "Duerme mucho"),
            new Cita("Floki", "Ari", "2023-08-05", "16:15", "No está comiendo")])
    }, [])
    
    useEffect(()=> {
        window.localStorage.setItem('citas', JSON.stringify(citas))
    }, [citas])

    return (
        <CitasContext.Provider value={{
            citas,
            setCitas
        }}>
            {children}
        </CitasContext.Provider>
    )
}