import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import Loading from '../components/Loading'
import FullWidthTabs from '../components/FullWidthTabs'
import Carousels from '../components/Carousels'
import { Fade } from "react-awesome-reveal";

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
    <Fade>
        <div className='single-project-content mx-4 bp-800:max-w-[1200px] bp-800:!mx-auto bp-800:my-0'>
                
                {/* Project Video Teaser - Mobile */}
                {data[0].acf.video_teaser &&
                    <img className='gif-teaser-mobile bp-800:hidden w-[450px] mx-auto my-0' src={data[0].acf.video_teaser} alt="Video Teaser of this Project" />
                }
                
                <article id={`post-${data[0].id}`} className="entry-content bp-800:mx-6">
                    <div className='project-overview-wrapper bp-800:mt-8 bp-800:flex'>

                        <div className='project-info-section bp-800:w-[55%]'>
                            {/* Project Title */}
                            {data[0].title.rendered &&
                                <h1 className='font-bold font-roboto uppercase text-3xl pt-14'>{data[0].title.rendered}</h1>
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
                                    Role:
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
                            {data[0].acf.video_teaser &&
                                <img className='gif-teaser-desktop hidden bp-800:block w-[450px]' src={data[0].acf.video_teaser} alt="Video Teaser of this Project" />
                            }
                            <div className='flex justify-evenly min-[1045px]:w-[450px]'>

                                {/* Primary CTA*/}
                                {(data[0].acf.single_project_primary_cta_text && data[0].acf.single_project_primary_cta_link) &&
                                    <Link to={data[0].acf.single_project_primary_cta_link} className='primary-button md:hover:primary-button-hover md:transition-all md:duration-500 ' target='_blank' rel='noopener'> 
                                        {data[0].acf.single_project_primary_cta_text}
                                    </Link>
                                }
                                {/* Secondary CTA*/}
                                {(data[0].acf.single_project_secondary_cta_text && data[0].acf.single_project_secondary_cta_link) &&
                                    <Link to={data[0].acf.single_project_secondary_cta_link} className='secondary-button md:hover:secondary-button-hover md:transition-all md:duration-500' target='_blank' rel='noopener'> 
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
                    <h2 className='mt-12 font-roboto font-bold text-2xl'>See other projects</h2>
                    <Carousels singleProjectData={data[0]}/>
                </article>
            
       
        </div>   
     </Fade>
    )
}

export default SingleProject
