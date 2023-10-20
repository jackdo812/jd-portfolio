import { useState, useEffect } from 'react'
import Loading from './Loading'

const Home = ( {restBase} ) => {
    const restPath = restBase + 'pages/7?_embed'
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
                <div className="entry-conten" dangerouslySetInnerHTML={{__html: restData.content.rendered}}>
                    
                </div>
                <p className='text-orange-600'>Testing Tailwind</p>
            </article>
        : 
            <Loading /> 
        }
        </>            
    )
}

export default Home
