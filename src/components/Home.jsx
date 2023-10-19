import { useState, useEffect } from 'react'
import Loading from './Loading'

const Home = ( {restBase} ) => {
    const restPath = restBase + ''
    const [restData, setData] = useState([])
    const [isLoaded, setLoadStatus] = useState(false)

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(restPath)
            if ( response.ok ) {
                const data = await response.json()
                setData(data)
                setLoadStatus(true)
            } else {
                setLoadStatus(false)
            }
        }
        fetchData()
    }, [restPath])
    
    return (
        <>
        { isLoaded ?
            <article id={`post-${restData.id}`}>
                <h1>{restData.title.rendered}</h1>
                <div className="entry-content">
                    
                </div>
            </article>
        : 
            <Loading /> 
        }
        </>            
    )
}

export default Home
