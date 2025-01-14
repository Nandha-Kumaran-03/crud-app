// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import axios from 'axios';

function CreateUser() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [age, setAge] = useState("");

    const Submit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:3001/createUser", { name, email, age })
            .then(result => console.log(result))
            .catch(err => console.log(err));
    };

    return (
        <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
            <div className="w-50 bg-white rounded p-3">
                <form onSubmit={Submit}>
                    <h2>Add User</h2>
                    <div className="mb-2">
                        <label htmlFor="name">Name</label>
                        <input 
                            type="text" 
                            placeholder="Enter Name" 
                            className="form-control" 
                            value={name} 
                            onChange={(e) => setName(e.target.value)} // Correctly place onChange
                        />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="email">Email</label>
                        <input 
                            type="text" 
                            placeholder="Enter Email" 
                            className="form-control" 
                            value={email} 
                            onChange={(e) => setEmail(e.target.value)} // Correctly place onChange
                        />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="age">Age</label>
                        <input 
                            type="text" 
                            placeholder="Enter Age" 
                            className="form-control" 
                            value={age} 
                            onChange={(e) => setAge(e.target.value)} // Correctly place onChange
                        />
                    </div>
                    <button type="submit" className="btn btn-success">Submit</button>
                </form>
            </div>
        </div>
    );
}

export default CreateUser;
