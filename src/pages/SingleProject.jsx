import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import Loading from '../components/Loading'
import FullWidthTabs from '../components/FullWidthTabs'
import Carousels from '../components/Carousels'

// TanQuery Components
import {useQuery} from '@tanstack/react-query';
import {getPost} from '../api/fetchData';

const SingleProject = () => {
    const { slug } = useParams();
    const { isPending, error, data } = useQuery({
        queryKey: ['singleProjectData', slug],
        queryFn: () => getPost(slug)
      })
    
      if (isPending) return <Loading />
    
      if (error) return 'An error has occurred: ' + error.message
    
    return (
        <>

            <article id={`post-${data[0].id}`}>
                <h1>{data[0].title.rendered}</h1>
                <div className="entry-content" dangerouslySetInnerHTML={{__html:data[0].content.rendered}}></div>
                <FullWidthTabs />
                <Carousels />
            </article>
       
        </>   
    )
}

export default SingleProject
