import Loading from '../components/Loading'
import { Link } from 'react-router-dom';
import JackGif from '../assets/gifs/jack_cartoon.gif'
import ProjectCard from '../components/ProjectCard';

// TanQuery Components
import {useQuery} from '@tanstack/react-query';
import {getPage, getPost} from '../api/fetchData';

const Home = ( ) => {

    const { isPending, error, data, isSuccess } = useQuery({
        queryKey: ['homeData'],
        queryFn: () => getPage(7)
      })

    const { isPending: postsIsPending, error: postsError, data: postsData } = useQuery({
    queryKey: ['postProjectsData'],
    queryFn: () => getPost(),
        enabled: isSuccess,
    })
    
      if (isPending) return <Loading />
      if (postsIsPending) return <Loading />
    
      if (error) return 'An error has occurred: ' + error.message
      if (postsError) return 'An error has occurred: ' + postsError.message
    
    return (
        <>
        {data.acf.title && 
            <h1>{data.acf.title}</h1>      
        }
            <article id={`post-${data.id}`}>
                <div className="entry-content">
                    <section className='intro-section'>
                        {/* Intro Messages */}
                        {data.acf.intro_messages && 
                            <h2 className='text-2xl' dangerouslySetInnerHTML={{__html:data.acf.intro_messages}}></h2>
                        }
                        {data.acf.intro_messages_2 && 
                            <p className='text-2xl' dangerouslySetInnerHTML={{__html:data.acf.intro_messages_2}}></p>
                        }
                        {/* Animated Portrait */}
                        
                        <img src={data.acf.portrait} alt="" />
                        {/* Funny Quote */}
                        {data.acf.quote &&
                            <q className='italic'>{data.acf.quote}</q>
                        }
                        {/* Primary CTA */}
                        {(data.acf.primary_cta_text && data.acf.primary_cta_link) &&
                            <Link to={data.acf.primary_cta_link} className='text-2xl' target='_blank' rel='noopener'> 
                                {data.acf.primary_cta_text}
                            </Link>
                        }
                        {/* Secondary CTA */}
                        {(data.acf.secondary_cta_text && data.acf.secondary_cta_link) && 
                            <Link to={data.acf.secondary_cta_link} className='text-2xl' target='_blank' rel='noopener'> 
                                {data.acf.secondary_cta_text}
                            </Link>
                        }
                    </section>
                    {/* Scroll down arrow */}
                    <a href='#featured-projects-section'>
                        <div className='animate-bounce '>
                            <svg className='w-[48px] h-[48px] rotate-90 ' aria-hidden="true" role="img" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                <title>Arrow Down icon</title>
                                <path d="M10.024 4h6.015l7.961 8-7.961 8h-6.015l7.961-8-7.961-8zm-10.024 16h6.015l7.961-8-7.961-8h-6.015l7.961 8-7.961 8z"/></svg>
                        </div>
                    </a>
                <section id='featured-projects-section' className='featured-projects'>
                    {data.acf.section_2_title &&
                        <h2>{data.acf.section_2_title}</h2>
                    }
                    {/* Project List */}
                    {postsData &&
                        <ProjectCard postsData={postsData} isOnHome={true} />
                    }
                    {/* See all button */}
                    {(data.acf.section_2_cta_text && data.acf.section_2_cta_link) &&
                        <Link to={data.acf.section_2_cta_link} className='text-2xl' target='_blank' rel='noopener'>
                            {data.acf.section_2_cta_text}
                        </Link>
                    }
                </section>
                </div>
            </article>
        </>            
    )
}

export default Home
