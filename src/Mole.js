import {useEffect} from 'react'
import moleImg from './assets/mole.png'
import './App.css'

function Mole({ setDisplayMole }){
    useEffect(() => {
        let randSeconds = Math.ceil(Math.random() * 5000)
        let timer = setTimeout(() => {
            setDisplayMole(false)
        }, randSeconds)
        return () => clearTimeout(timer)
    })

    return (
        <div>
            <img style={{ width: '10vw' }}
             src={moleImg} alt="Mole" 
             onClick={() => setDisplayMole(false)} />
        </div>
    )
}


export default Mole