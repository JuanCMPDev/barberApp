"use client"

import { useState } from "react"

export default function Page() {
    const [data, setData] = useState({
        name: '',
        email: '',
        password: '',
        rol : "cliente"
    });

    const [message, setMessage] = useState('');

    const handleChange = (e) => {
        setData(prevData => ({
            ...prevData,
            [e.target.name]: e.target.value
        }));
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:8800/api/auth/register', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data)
            });

            const result = await response.json();

            if (response.ok) {
                setMessage(result.message || 'Registro exitoso');
            } else {
                setMessage(result.message || 'Error en el registro');
            }
        } catch (error) {
            setMessage('Error en la comunicación con el servidor');
        }
    }

    return (
        <div className="flex w-full h-full items-center justify-center flex-col">
            <h1 className="mb-5 font-bold">Register</h1>
            <form className="flex flex-col gap-10" onChange={handleChange} onSubmit={handleSubmit}>
                <input className="border border-gray-500 rounded-md p-1" type="text" name="name" placeholder="Nombre" />
                <input className="border border-gray-500 rounded-md p-1" type="email" name="email" placeholder="Email" />
                <input className="border border-gray-500 rounded-md p-1" type="password" name="password" placeholder="Contraseña" />
                <button type="submit" className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Register</button>
            </form>
            {message && <p className="mt-5 text-center">{message}</p>}
        </div>
    )
}
