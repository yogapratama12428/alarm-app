import axios from 'axios';
import { useEffect, useState } from 'react'

export const useFetching = (url) => {

    const [data, setData] = useState("")
    const [Loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true)
                const response = await axios.get(url)
                setData(response.data)
                console.log(response)
            } catch (error) {
                setError(error)
            } finally {
                setLoading(false)
            }
        }

        fetchData()
    }, [url])


    return { data, Loading, error }
}

