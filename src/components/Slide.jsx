import React, { useState } from 'react'
import { useEffect } from 'react'

const Slide = () => {

    const [data, setData] = useState([]);

    const fetchData = async () => {

        try {
            const res = await fetch(`https://starwars-databank-server.vercel.app/api/v1/vehicles?page=10&limit=1`)
            const datas = await res.json()
            setData(datas)
            console.log(typeof (datas))
        }
        catch (e) {
            console.error(e)
        }


    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <>
           
        </>
    )
}

export default Slide