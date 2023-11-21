import { useState, useEffect } from 'react'
import Loading from '../components/Loading'
import SocialMedia from '../components/SocialMedia';
import CopyToClipboard from '../utilities/CopyToClipBoard';
import { Fade } from "react-awesome-reveal";
import { useSelector } from 'react-redux'; 

// SEO
import { Helmet } from 'react-helmet-async';

// TanQuery Components
import {useQuery} from '@tanstack/react-query';
import {getPage} from '../api/fetchData';


const Connect = () => {
    const isDarkMode = useSelector((state) => state.darkMode.isDarkMode);
    const [showLoading, setShowLoading] = useState(true);

    useEffect(() => {
        // Delay the appearance of the loading GIF for 1 second (1000 milliseconds)
        const delayTimeout = setTimeout(() => {
        setShowLoading(false);
        }, 1000);

        // Clear the timeout to avoid memory leaks
        return () => {
        clearTimeout(delayTimeout);
        };
    }, []);
    
    const { isPending, error, data } = useQuery({
        queryKey: ['connectData'],
        queryFn: () => getPage(30)
      })
      
    
      if (isPending) return<Loading />
    
      if (error) return 'An error has occurred: ' + error.message

    return (
    showLoading ? <Loading /> : (
    <Fade>
        <div className='wrapper flex flex-col md:max-w-[800px] md:my-0 md:mx-auto'>
            {/* SEO */}
            <Helmet>
                {data.acf.seo_title_tag ? (
                    <title>{data.acf.seo_title_tag}</title>
                ) : (
                    <title>Connect with me - Jack Do </title>
                )
                    
                }
                {data.acf.seo_meta_description ? (
                    <meta name="description" content={data.acf.seo_meta_description} />
                ) : (
                    <meta name="description" content="Contact Page - Jack Do" />
                )
                
                }
            </Helmet>
            <div className='content flex-1'> 
                <article id={`post-${data.id}`}>
                    <h1 className='font-bold font-roboto uppercase text-center text-3xl pt-20 mb-14'>{data.title.rendered}</h1>
                    <div className="text-center mb-10" dangerouslySetInnerHTML={{__html:data.content.rendered}}>
                    </div>
                    <div className='flex justify-center pt-10'>
                        {(data.acf.linkedin_link || data.acf.github_link) &&
                            <SocialMedia linkedInLink={data.acf.linkedin_link} githubLink={data.acf.github_link} isOnConnect={true} isDarkMode={isDarkMode}/>
                        }
                    </div>
                    {data.acf.contact_email &&                 
                            <CopyToClipboard emailAdress={data.acf.contact_email}/>
                    }    
                </article>
            </div>
        </div>
    </Fade>
        )
    )
}

export default Connect
