import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import Loading from '../components/Loading'
import FullWidthTabs from '../components/FullWidthTabs'
import Carousels from '../components/Carousels'

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
    console.log(data);
    return (
        <>
            {/* Project Video Teaser - Mobile */}
            {data[0].acf.video_teaser &&
                <img className='gif-teaser-mobile sm:hidden w-[450px]' src={data[0].acf.video_teaser} alt="Video Teaser of this Project" />
            }
            {/* Project Title */}
            {data[0].title.rendered &&
                <h1>{data[0].title.rendered}</h1>
            }
            {/* Project Tech Stack */}
            {data[0]._embedded["wp:term"][1] &&
                <p className='italic'>
                {data[0]._embedded["wp:term"][1].map((tag, index) => (
                    <span key={index}>{tag.name}{index < data[0]._embedded["wp:term"][1].length - 1 ? " | " : null}</span>
                ))}
                </p>
            }

            <article id={`post-${data[0].id}`}>
                {/* <div className="entry-content" dangerouslySetInnerHTML={{__html:data[0].content.rendered}}></div> */}
                <div className="entry-content">
                {/* Project Overview */}
                {data[0].acf.project_overview &&
                    <p>
                        <span className='font-bold'>Project Overview: </span>
                        {data[0].acf.project_overview}
                    </p>
                }
                {/* Project Duration */}
                {data[0].acf.project_duration &&
                    <p>
                        Project Duration:
                        <span className='font-bold'> {data[0].acf.project_duration}</span>
                    </p>
                }
                {/* Project Collaboration */}
                {data[0].acf.collaboration &&
                    <p>
                        Collaboration:
                        <span className='font-bold'> {data[0].acf.collaboration}</span>
                    </p>
                }
                {/* Project Role */}
                {data[0].acf.roles &&
                    <p>
                        Role:
                        <span className='font-bold'> {data[0].acf.roles.join(', ')}</span>
                    </p>
                }
                {/* Project Requirements */}
                {data[0].acf.project_requirements &&
                    <p>
                    <span className='font-bold'>Project Requirements: </span>
                    {data[0].acf.project_requirements}
                  </p>
                }
                {/* Video Teaser - Desktop */}
                {data[0].acf.video_teaser &&
                    <img className='gif-teaser-desktop hidden sm:block w-[450px]' src={data[0].acf.video_teaser} alt="Video Teaser of this Project" />
                }
                {/* Primary CTA*/}
                {(data[0].acf.single_project_primary_cta_text && data[0].acf.single_project_primary_cta_link) &&
                    <Link to={data[0].acf.single_project_primary_cta_link} className='text-xl p-1 bg-green-200 rounded' target='_blank' rel='noopener'> 
                        {data[0].acf.single_project_primary_cta_text}
                    </Link>
                }
                {/* Secondary CTA*/}
                {(data[0].acf.single_project_secondary_cta_text && data[0].acf.single_project_secondary_cta_link) &&
                    <Link to={data[0].acf.single_project_secondary_cta_link} className='text-xl p-1 border-black border-solid border rounded' target='_blank' rel='noopener'> 
                        {data[0].acf.single_project_secondary_cta_text}
                    </Link>
                }
                {/* Project Details */}
                {data[0].acf.project_details_heading_1 && data[0].acf.project_details_content_1 && data[0].acf.project_details_heading_2 && data[0].acf.project_details_content_2 && data[0].acf.project_details_heading_3 && data[0].acf.project_details_content_3 && 
                    <FullWidthTabs dataACF={data[0].acf}/>
                }
                {/* See other project carousels */}
                <h2 className='mt-4'>See other projects</h2>
                <Carousels singleProjectData={data[0]}/>
                </div>
            </article>
       
        </>   
    )
}

export default SingleProject
