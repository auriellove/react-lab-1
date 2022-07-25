import "./Addesign.css"
import { useState } from "react";


function AdDesign() {
    const [pickFlavor, setPickFlavor] = useState("Strawberry");
    const [pickColor, setPickColor] = useState(false)
    const [pickFontSize, setPickFontSize] = useState(28);

    const styles = {fontSize: pickFontSize + "px"};
    

    let colorClass = "";

    if (pickColor === false) {
        colorClass = "color"
    }

    const incrementCount = () => {
        setPickFontSize(pickFontSize + 1)
    }

    const decrementCount = () => {
        setPickFontSize(pickFontSize -1)
    }



    return (

        <div className="main-container">
            <div>

            <h1>Ad Designer</h1>
            <div className={" box " + colorClass}>
            <p>Vote for</p>
            <p style={styles}>{pickFlavor} </p>
            </div>

            <p>What to support</p>
        <button onClick={() => setPickFlavor("Chocolate")}>Chocolate</button>
        <button onClick={() => setPickFlavor("Strawberry")}>Strawberry</button>
        <button onClick={() => setPickFlavor("Vanilla")}>Vanilla</button>
            </div>


        <div>
        
            <h3>Color Theme</h3>
            <button onClick={() => setPickColor(true)}>Light</button>
            <button onClick={() => setPickColor(false)}>Dark</button>
        </div>


        <div>
            
            <h3>Font Size</h3>
            {/* <button onClick={() => setPickFontSize(size => size += 1)}>up</button> */}
            <button onClick={incrementCount}>up</button>
            <span>{pickFontSize}</span>
            <button onClick={decrementCount}>down</button>
        </div>


        </div>

        
    )
}

export default AdDesign;