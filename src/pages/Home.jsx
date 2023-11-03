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
        {/* Animated Portrait */}
         {data.acf.portrait &&
            <img className='w-[300px] sm:hidden my-2 mx-auto' src={data.acf.portrait} alt="Animated cartoonized portrait" />
        }
        {data.acf.title && 
            <h1 className='font-roboto text-[3.5rem] mb-4 uppercase text-center md:text-[5rem]'>{data.acf.title}</h1>      
        }
            <article id={`post-${data.id}`}>
                <div className="entry-content">
                    <section className='intro-section'>
                        {/* Intro Messages */}
                        {data.acf.intro_messages && 
                            <h2 className='text-2xl text-center underline underline-offset-[5px] decoration-[#ae8b0c75]  ' dangerouslySetInnerHTML={{__html:data.acf.intro_messages}}></h2>
                        }
                        {data.acf.intro_messages_2 && 
                            <p className='text-2xl text-center mb-8' dangerouslySetInnerHTML={{__html:data.acf.intro_messages_2}}></p>
                        }
                        {/* Animated Portrait */}
                        {data.acf.portrait &&
                            <img className='w-[300px] hidden sm:block' src={data.acf.portrait} alt="Animated cartoonized portrait" />
                        }
                        {/* Funny Quote */}
                        {data.acf.quote &&
                            <blockquote className='italic text-center my-4 hidden md:block'>{data.acf.quote}</blockquote>
                        }
                        {/* Primary CTA */}
                        {(data.acf.primary_cta_text && data.acf.primary_cta_link) &&
                            <Link to={data.acf.primary_cta_link} className='primary-button block my-2 mx-auto w-fit transition-all duration-500 md:hover:primary-button-hover' target='_blank' rel='noopener'> 
                                {data.acf.primary_cta_text}
                            </Link>
                        }
                        {/* Secondary CTA */}
                        {(data.acf.secondary_cta_text && data.acf.secondary_cta_link) && 
                            <Link to={data.acf.secondary_cta_link} className='block my-2 mx-auto w-fit transition-all duration-500 secondary-button md:hover:secondary-button-hover' target='_blank' rel='noopener'> 
                                {data.acf.secondary_cta_text}
                            </Link>
                        }
                    </section>
                    {/* Scroll down arrow */}
                    <a href='#featured-projects-section' className='block w-fit my-0 mx-auto'>
                        <div className='animate-bounce mt-14'>
                            <svg className='w-[48px] h-[48px] rotate-90 fill-soil' aria-hidden="true" role="img" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
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
