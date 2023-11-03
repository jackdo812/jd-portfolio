import { useState, useEffect } from 'react'
import Loading from '../components/Loading'
import SocialMedia from '../components/SocialMedia';
import CopyToClipboard from '../utilities/CopyToClipBoard';


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
        <div className='wrapper flex flex-col min-h-screen'>
            <div className='content flex-1'> 
                <article id={`post-${data.id}`}>
                    <h1 className='font-bold uppercase text-center text-3xl pt-20 mb-14'>{data.title.rendered}</h1>
                    <div className="text-center mb-10" dangerouslySetInnerHTML={{__html:data.content.rendered}}>
                    </div>
                    <div className='flex justify-center pt-10'>
                        {(data.acf.linkedin_link || data.acf.github_link) &&
                            <SocialMedia linkedInLink={data.acf.linkedin_link} githubLink={data.acf.github_link}/>
                        }
                    </div>
                    {data.acf.contact_email &&
                        <CopyToClipboard emailAdress={data.acf.contact_email}/>
                    }    
                </article>
            </div>
        </div>
    )
}

export default Connect
