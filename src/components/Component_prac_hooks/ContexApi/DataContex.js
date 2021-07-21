import React, { useState, useEffect, createContext } from 'react'
import axios from 'axios'
export const DataContex = createContext()

const DataProvider = ({ children }) => {
    const [data, setData] = useState([])

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users').then(res => setData(res.data))
        console.log(data)
    }, [])
    return (
        <DataContex.Provider value={{ data, setData }}>
            {children}

        </DataContex.Provider>
    )
}

export default DataProvider