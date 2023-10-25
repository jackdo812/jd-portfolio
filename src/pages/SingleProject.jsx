import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import Loading from '../components/Loading'

// TanQuery Components
import {useQuery} from '@tanstack/react-query';
import {getPost} from '../api/fetchData';

const SingleProject = () => {
    const { slug } = useParams();
    const slugPath = `slug=${slug}&`;
    const { isPending, error, data } = useQuery({
        queryKey: ['singleProjectData'],
        queryFn: () => getPost(slugPath)
      })
    
      if (isPending) return <Loading />
    
      if (error) return 'An error has occurred: ' + error.message
    
    return (
        <>

            <article id={`post-${data[0].id}`}>
                <h1>{data[0].title.rendered}</h1>
                <div className="entry-content" dangerouslySetInnerHTML={{__html:data[0].content.rendered}}></div>
            </article>
       
        </>   
    )
}

export default SingleProject
