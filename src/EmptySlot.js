import { useEffect } from "react";
import MoleHill from './assets/molehill.png'
import './App.css'

function EmptySlot({setDisplayMole}){

    useEffect(() => {
        let randSeconds = Math.ceil(Math.random() * 5000)
        let timer = setTimeout(() => {
            setDisplayMole(true)
        }, randSeconds)
        return () => clearTimeout(timer)
    })    
    return (
        <div>
            <img style={{'width': '10vw'}} src={MoleHill} alt="Mole" />
        </div>
    )
}

export default EmptySlot