import { useState, useEffect } from 'react'
import Loading from '../components/Loading'
import SocialMedia from '../components/SocialMedia';

// TanQuery Components
import {useQuery} from '@tanstack/react-query';
import {getPage} from '../api/fetchData';

const Connect = () => {

    const { isPending, error, data } = useQuery({
        queryKey: ['connectData'],
        queryFn: () => getPage(30)
      })
    
      if (isPending) return<Loading />
    
      if (error) return 'An error has occurred: ' + error.message

    return (
        <>
            <h1>{data.title.rendered}</h1>

            <article id={`post-${data.id}`}>
                <div className="entry-content" dangerouslySetInnerHTML={{__html:data.content.rendered}}>
                </div>
                {(data.acf.linkedin_link || data.acf.github_link) &&
                    <SocialMedia linkedInLink={data.acf.linkedin_link} githubLink={data.acf.github_link}/>
                }
            </article>
   
   
        </>
    )
}

export default Connect
