import background from "./background.jpg";
import "./style.css";
import React, { useState } from "react";
import {useNavigate} from "react-router-dom"
import axios from "axios";

function Signup() {
    const navigate = useNavigate()
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    async function handleSubmit(e) {
        e.preventDefault();

        const result = await axios.post("http://localhost:5000/user/signup", { username, password });
        alert(result.data.msg);
        if( result.data.msg == "User created"  ){
            navigate(`/`)
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit} className="back-login flex">
                <img src={background} className="back-image-login" alt="background" />
                <div className="back-content-login gap flex">
                    <h1>Signup</h1>
                    <div className="input-group flex ">
                        <div className="input-user-name gap flex com-for-input">
                            <span>UserName : </span>
                            <input 
                                placeholder="Username" 
                                className="input-signup input-h-w"
                                name="username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />

                        </div>
                        <div className="input-password gap flex com-for-input">
                            <span>Password : </span>
                            <input 
                                type="password" 
                                placeholder="Password" 
                                className="input-signup input-h-w"
                                name="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                    </div>
                    <button type="submit" className="button-signup">
                        Signup
                    </button>
                </div>
            </form>
        </>
    );
}

export default Signup;
