"use client";
import { useState } from "react";


export default function FormPage() {
    const [userName, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (event: any) => {
        event.preventDefault();
    

        setName("");
        setEmail("");
        setPassword("");

    }

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 p-8">
            <input
                type="text"
                placeholder="Username"
                value={userName}
                onChange={((e) => setName(e.target.value))}
                className="border p-2 rounded"
            />
            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={((e) => setEmail(e.target.value))}
                className="border p-2 rounded"
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={((e) => setPassword(e.target.value))}
                className="border p-2 rounded"
            />
            <button type="submit" className="bg-blue-500 text-white p-2 rounded">
                Login
            </button>

        </form>
    );
}   
