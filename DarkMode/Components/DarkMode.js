import React, { useState } from 'react'

export default function DarkMode() {
    const [myStyle, setMyStyle] = useState({
        color: "white",
        backgroundColor: 'grey'
    });
    const [btnMode, setBtnMode] = useState("Dark Mode");

    let toggleMode = () => {
        if (myStyle.color === 'white') {
            setMyStyle({
                color: "grey",
                backgroundColor: 'white'
            });
            setBtnMode("Light Mode");
        }
        else {
            setMyStyle({
                color: "white",
                backgroundColor: 'grey'
            });
            setBtnMode("Dark Mode");
        }

    }

    return (

        <div style={myStyle} >


            <h1 className='my-4'>DarkMode</h1>

            <div className="mb-3" style={myStyle}>
                <label for="exampleInputEmail1" className="form-label">Email address</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div className="mb-3" style={myStyle}>
                <label for="exampleInputPassword1" className="form-label">Password</label>
                <input type="password" className="form-control" id="exampleInputPassword1" />
            </div>
            <div className="mb-3 form-check" style={myStyle}>
                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                <label className="form-check-label" for="exampleCheck1">Check me out</label>
            </div>
            <button type="toggleMode" onClick={toggleMode} className="btn btn-primary my-3">{btnMode}</button>

        </div>
    )
}
