import { useEffect } from "react"

const useTitle = title =>{
    useEffect(()=>{
        document.title = `${title} | ToyPlanet`;
    },[title])
}

export default useTitle;