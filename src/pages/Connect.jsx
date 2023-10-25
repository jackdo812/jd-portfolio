import { useState, useEffect } from 'react'
import Loading from '../components/Loading'

// TanQuery Components
import {useQuery} from '@tanstack/react-query';
import {getPage} from '../api/fetchData';

const Connect = ( {restBase} ) => {

    const { isPending, error, data } = useQuery({
        queryKey: ['connectData'],
        queryFn: () => getPage(30)
      })
    
      if (isPending) return<Loading />
    
      if (error) return 'An error has occurred: ' + error.message

    return (
        <>
 
            <article id={`post-${data.id}`}>
                <h1>{data.title.rendered}</h1>
                <div className="entry-content" dangerouslySetInnerHTML={{__html:data.content.rendered}}>
                </div>
            </article>
   
   
        </>
    )
}

export default Connect
