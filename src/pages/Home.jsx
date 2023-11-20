import Loading from '../components/Loading'
import { Link } from 'react-router-dom';
import {useState, useEffect} from 'react';
import ProjectCard from '../components/ProjectCard';
import { Fade } from "react-awesome-reveal";
import { useSelector } from 'react-redux';

// SEO
import { Helmet } from 'react-helmet-async';

// TanQuery Components
import {useQuery} from '@tanstack/react-query';
import {getPage, getPost} from '../api/fetchData';

const Home = ( ) => {
    const isDarkMode = useSelector((state) => state.darkMode);
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

    const [isSeeAllHovered, setIsSeeAllHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsSeeAllHovered(true);
      };
    
      const handleMouseLeave = () => {
        setIsSeeAllHovered(false);
      };

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
    showLoading ? <Loading /> : (
        <Fade >
        <div className='wrapper md:max-w-[1200px] my-0 mx-auto'>
        {/* SEO */}
        <Helmet>
            {data.acf.seo_title_tag ? (
                <title>{data.acf.seo_title_tag}</title>
            ) : (
                <title>Jack Do - Front-End Web Developer</title>
            )
                
            }
            {data.acf.seo_meta_description ? (
                <meta name="description" content={data.acf.seo_meta_description} />
            ) : (
                <meta name="description" content="Home - Jack Do" />
            )
            
            }
         </Helmet>
        {/* Animated Portrait */}
         {data.acf.portrait &&
            <img className='w-[300px] md:hidden my-2 mx-auto' src={data.acf.portrait} alt="Animated cartoonized portrait" />
        }
            <article className="entry-content my-2" id={`post-${data.id}`}>
                
                    <section className='intro-section md:mt-40 md:flex md:gap-8'>
                        <div className='md:w-[60%]'>
                            {data.acf.title && 
                                <h1 className='font-roboto text-[3rem] my-4 uppercase text-center md:text-[4.5rem] md:pt-8 md:!mb-0'>{data.acf.title}</h1>      
                            }
                            {/* Intro Messages */}
                          
                            {data.acf.intro_messages && !isDarkMode &&
                                <div className={`home-intro text-[1.2rem] text-center decoration-4 min-[500px]:text-[1.4rem] min-[600px]:text-[1.5rem] md:text-[1.7rem] md:!pb-8`} dangerouslySetInnerHTML={{__html:data.acf.intro_messages}}></div>
                            }
                            {data.acf.intro_messages_2 && isDarkMode &&
                                <div className={`home-intro text-[1.2rem] text-center decoration-4 min-[500px]:text-[1.4rem] min-[600px]:text-[1.5rem] md:text-[1.7rem] md:!pb-8`} dangerouslySetInnerHTML={{__html:data.acf.intro_messages_2}}></div>
                            }
                            
                            <div className='md:min-[900px]:flex md:min-[900px]:justify-around'>
                                {/* Primary CTA */}
                                {(data.acf.primary_cta_text && data.acf.primary_cta_link) &&
                                    <Link to={data.acf.primary_cta_link} className='primary-button block my-2 mx-auto w-fit transition-all duration-500 md:hover:primary-button-hover' target='_blank' rel='noopener'> 
                                        {data.acf.primary_cta_text}
                                    </Link>
                                }
                                {/* Secondary CTA */}
                                {(data.acf.secondary_cta_text && data.acf.secondary_cta_link) && 
                                    <Link to={data.acf.secondary_cta_link} className={`block my-2 mx-auto w-fit transition-all duration-500 ${isDarkMode ? 'secondary-button-dark md:hover:secondary-button-hover-dark' : 'secondary-button md:hover:secondary-button-hover'} `} target='_blank' rel='noopener'> 
                                        {data.acf.secondary_cta_text}
                                    </Link>
                                }
                            </div>
                        </div>
                        <div className='md:w-[40%]'>
                            {/* Animated Portrait */}
                            {data.acf.portrait &&
                                <img className='max-w-[250px] mx-auto my-0 hidden md:block' src={data.acf.portrait} alt="Animated cartoonized portrait" />
                            }
                            {/* Funny Quote */}
                            {data.acf.quote &&
                                <blockquote className='italic text-center my-4 hidden md:block'>{data.acf.quote}</blockquote>
                            }
                        </div>
                    </section>
                    {/* Scroll down arrow */}
                    <a href='#featured-projects-section' className='block w-fit my-0 mx-auto'>
                        <div className='animate-bounce mt-20 md:mt-30 min-[900px]:mt-36'>
                            <svg className={`w-[48px] h-[48px] rotate-90 ${isDarkMode ? 'fill-sun md:hover:fill-foggy ' : 'fill-soil md:hover:fill-forest'} md:transition-all md:duration-500`} role="img" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                <title>scrolling down arrow icon</title>
                                <path d="M10.024 4h6.015l7.961 8-7.961 8h-6.015l7.961-8-7.961-8zm-10.024 16h6.015l7.961-8-7.961-8h-6.015l7.961 8-7.961 8z"/></svg>
                        </div>
                    </a>
                    <section id='featured-projects-section' className='featured-projects mb-8 md:pt-20'>
                        {data.acf.section_2_title &&
                            <h2 className='font-roboto text-2xl text-center mt-20 mb-4 md:!text-left md:pl-4'>{data.acf.section_2_title}</h2>
                        }
                        <div className='md:flex'>
                            {/* Project List */}
                            {postsData &&
                                <ProjectCard postsData={postsData} isOnHome={true} />
                            }
                            {/* See all button */}
                            {(data.acf.section_2_cta_text && data.acf.section_2_cta_link) &&
                                <Link to={data.acf.section_2_cta_link} className='primary-button my-8 mx-auto w-fit flex transition-all duration-500 md:h-fit md:self-center md:hover:primary-button-hover ' target='_blank' rel='noopener' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                                    {data.acf.section_2_cta_text}
                                    <svg className={`fill-foggy ml-2 w-[20px] h-[20px] self-center transition-all duration-500 ${isSeeAllHovered ? 'md:fill-forest': ''} `} role="img" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                    <title>arrow icon</title>
                                    <path d="M10.024 4h6.015l7.961 8-7.961 8h-6.015l7.961-8-7.961-8zm-10.024 16h6.015l7.961-8-7.961-8h-6.015l7.961 8-7.961 8z"/></svg>
                                </Link> 
                            }
                        </div>
                    </section>
                
            </article>
        </div>            
    </Fade>
    )
    )
}

export default Home
