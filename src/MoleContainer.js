import { useState } from 'react'
import Mole from './Mole'
import EmptySlot from './EmptySlot'

function MoleContainer({ setScore }) {
    const [displayMole, setDisplayMole] = useState(false);

    const moleBopped = () => {
        if (displayMole) {
            setScore((prevScore) => prevScore + 1);
            setDisplayMole(false);
        }
    }

    function showMole() {
        return displayMole ? <Mole /> : <EmptySlot />;
    }

    return (
        <div> {/* possible add this to the div for click functionality onClick={moleBopped} */}
            {showMole()}
        </div>
    );
}

export default MoleContainer;
