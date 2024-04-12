import React, { useEffect, useState } from 'react'

export default function Blink() {
    const [flag, setFlag] = useState(0);
    useEffect(() => {
        setFlag(1);
    }, [])
    if(flag === 1){
        setInterval(() => {
            document.getElementById("blink").style.color = "red";
        }, 1500)
        setInterval(() => {
            document.getElementById("blink").style.color = "blue";
        }, 3000)
    }

    return (
        <div className="container">
            {/* <marquee behavior="right" direction="alternate" style= {{Color: "red", backgroundColor: "pink", fontSize: "large"}}>TextUtils- Manipulate your text here🤔🫡</marquee> */}
            <h2 id="blink" style={{ display: "flex", alignContent: "center", justifyContent: "center" }}>TextUtils- Manipulate your text here🤔🫡</h2>
        </div>
    );
}