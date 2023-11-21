import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import Loading from '../components/Loading'
import FullWidthTabs from '../components/FullWidthTabs'
import Carousels from '../components/Carousels'
import { Fade } from "react-awesome-reveal"
import { useSelector } from 'react-redux';


// SEO
import { Helmet } from 'react-helmet-async';

// TanQuery Components
import {useQuery} from '@tanstack/react-query';
import {getPost} from '../api/fetchData';

const SingleProject = () => {
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

    const { slug } = useParams();
    const { isPending, error, data } = useQuery({
        queryKey: ['singleProjectData', slug],
        queryFn: () => getPost(slug)
      })
    
      if (isPending) return <Loading />
    
      if (error) return 'An error has occurred: ' + error.message
     
    return (
    showLoading ? <Loading /> : (
    <Fade>
        <div className='single-project-content mx-4 bp-800:max-w-[1200px] bp-800:!mx-auto bp-800:my-0'>
                {/* SEO */}
                <Helmet>          
                    <title>Projects - {slug.charAt(0).toUpperCase() + slug.slice(1)}</title>
                    <meta name="description" content={`This is the single project page, which showcases the details of ${slug.charAt(0).toUpperCase() + slug.slice(1)} project. Let's check it out!`} />
                 </Helmet>
             
                {/* Project Video Teaser- Mobile */}
                {data[0].acf.project_video_teaser &&
                   
                    <video className={`gif-teaser-mobile bp-800:hidden ${data[0].acf.video_teaser_vertically ? 'w-[300px]' : 'w-[450px]'} mx-auto my-10 rounded shadow-md`} controls autoPlay muted loop>
                        <source src={data[0].acf.project_video_teaser.url} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                
                }

                <article id={`post-${data[0].id}`} className="entry-content bp-800:mx-6">
                    <div className='project-overview-wrapper bp-800:mt-16 bp-800:flex bp-800:gap-4'>

                        <div className='project-info-section bp-800:w-[55%]'>
                            {/* Project Title */}
                            {data[0].title.rendered &&
                                <h1 className='font-bold font-roboto uppercase text-3xl pt-2' dangerouslySetInnerHTML={{__html:data[0].title.rendered}}></h1>
                            }
                            {/* Project Tech Stack */}
                            {data[0]._embedded["wp:term"][1] &&
                                <p className='italic mt-2 mb-4'>
                                {data[0]._embedded["wp:term"][1].map((tag, index) => (
                                    <span key={index}>{tag.name}{index < data[0]._embedded["wp:term"][1].length - 1 ? " | " : null}</span>
                                ))}
                                </p>
                            }
                            {/* Project Overview */}
                            {data[0].acf.project_overview &&
                                <p className='mb-3'>
                                    <span className='font-bold'>Project Overview: </span>
                                    {data[0].acf.project_overview}
                                </p>
                            }
                            {/* Project Duration */}
                            {data[0].acf.project_duration &&
                                <p className='mb-3'>
                                    Project Duration:
                                    <span className='font-bold'> {data[0].acf.project_duration}</span>
                                </p>
                            }
                            {/* Project Collaboration */}
                            {data[0].acf.collaboration &&
                                <p className='mb-3'>
                                    Collaboration:
                                    <span className='font-bold'> {data[0].acf.collaboration}</span>
                                </p>
                            }
                            {/* Project Role */}
                            {data[0].acf.roles &&
                                <p className='mb-3'>
                                    Role(s):
                                    <span className='font-bold'> {data[0].acf.roles.join(', ')}</span>
                                </p>
                            }
                            {/* Project Requirements */}
                            {data[0].acf.project_requirements &&
                                <p className='mb-4'>
                                <span className='font-bold'>Project Requirements: </span>
                                {data[0].acf.project_requirements}
                            </p>
                            }
                        </div>
                        <div className='videos-ctas-section bp-800:w-[45%]'>

                            {/* Video Teaser - Desktop */}

                            {data[0].acf.project_video_teaser &&
                            
                            <video className={`gif-teaser-desktop hidden bp-800:block ${data[0].acf.video_teaser_vertically ? 'w-[300px]' : 'w-[450px]'} mx-auto my-10 rounded shadow-[0_0_4px_1px_gray]`} controls autoPlay muted loop>
                                <source src={data[0].acf.project_video_teaser.url} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
               
                             }    
                             {/* Output Message if the project is a browser-based game only */}
                             {data[0].slug &&
                                <p className={`${data[0].slug==='typomon' ? 'block' : 'hidden'} italic pb-4 md:hidden`}>Note: Please try the game on desktop screen size &#40;Best experience at full screen: 1512px x 945px&#41;.</p>
                             }
                            <div className='flex justify-evenly'>

                                {/* Primary CTA*/}
                                {(data[0].acf.single_project_primary_cta_text && data[0].acf.single_project_primary_cta_link) &&
                                    <Link to={data[0].acf.single_project_primary_cta_link} className={`${data[0].slug==='typomon' && 'hidden'} primary-button md:block md:hover:primary-button-hover md:transition-all md:duration-500`} target='_blank' rel='noopener'> 
                                        {data[0].acf.single_project_primary_cta_text}
                                    </Link>
                                }
                                {/* Secondary CTA*/}
                                {(data[0].acf.single_project_secondary_cta_text && data[0].acf.single_project_secondary_cta_link) &&
                                    <Link to={data[0].acf.single_project_secondary_cta_link} className={` ${isDarkMode ? 'secondary-button-dark md:hover:secondary-button-hover-dark' : 'secondary-button md:hover:secondary-button-hover'} md:transition-all md:duration-500`} target='_blank' rel='noopener'> 
                                        {data[0].acf.single_project_secondary_cta_text}
                                    </Link>
                                }
                            </div>
                        </div>
                    </div>
                    {/* Project Details */}
                    {data[0].acf.section_2_heading ? (
                        <h2 className='mt-12 font-roboto font-bold text-2xl'>{data[0].acf.section_2_heading}</h2>
                    ) : (
                        <h2 className='mt-12 font-roboto font-bold text-2xl'>Project Details</h2>
                    )}
                    {data[0].acf.project_details_heading_1 && data[0].acf.project_details_content_1 && data[0].acf.project_details_heading_2 && data[0].acf.project_details_content_2 && data[0].acf.project_details_heading_3 && data[0].acf.project_details_content_3 && 
                        <FullWidthTabs dataACF={data[0].acf}/>
                    }
                    {/* See other project carousels */}
                    <h2 className='mt-12 font-roboto font-bold text-2xl'>See Other Projects</h2>
                    <Carousels singleProjectData={data[0]}/>
                </article>
            
       
        </div>   
     </Fade>
    )
    )
}

export default SingleProject
