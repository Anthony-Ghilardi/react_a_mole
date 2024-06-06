import { useState } from 'react'
import Mole from './Mole'
import EmptySlot from './EmptySlot'
import './App.css'

function MoleContainer({ setScore }) {
    const [displayMole, setDisplayMole] = useState(false);

    const moleBopped = () => {
        if (displayMole) {
            setScore((prevScore) => prevScore + 1);
            setDisplayMole(false);
        }
    }

    function showMole() {
        return displayMole ? <Mole setDisplayMole={setDisplayMole} /> : <EmptySlot setDisplayMole={setDisplayMole} />;
    }

    return (
        <div onClick={moleBopped}> {/* possible add this to the div for click functionality onClick={moleBopped} */}
            {showMole()}
        </div>
    );
}

export default MoleContainer;