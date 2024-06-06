import { useContext } from "react"
import { CitasContext } from "../context/citas"

export const useCitas = () => {
    const citas = useContext(CitasContext)

    if (citas === undefined) {
        throw new Error("useCitas didn't worked because of not including CitasProvider")
    }

    return citas
}