import { useState, useEffect } from 'react'
import Loading from '../components/Loading'
import MyVerticallyCenteredModal from '../components/MyVerticallyCenteredModal';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';


// TanQuery Components
import {useQuery} from '@tanstack/react-query';
import {getPage, getCPT} from '../api/fetchData';

// Timeline components
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { MdWork } from "react-icons/md";



const Experiences = () => {
    

    const { isPending: pageIsPending, error: pageError, data: pageData, isSuccess } = useQuery({
        queryKey: ['experiencesPageData'],
        queryFn: () => getPage(28)
      })
    
    const { isPending: cptPending, error: cptError, data: cptData } = useQuery({
        queryKey: ['experiencesCPTData'],
        queryFn: () => getCPT('jd-portfolio-exp'),
        enabled: isSuccess,
      })


      if (pageIsPending || cptPending) return <Loading />;
      
      if (pageError) return 'An error has occurred: ' + pageError.message
      if (cptError) return 'An error has occurred: ' + cptError.message


    // Sort the cptData by the exp_priority field

    cptData.sort((a, b) => {
    const priorityA = a.acf.exp_priority;
    const priorityB = b.acf.exp_priority;
    
    if (priorityA === priorityB) {
        return 0; // Leave them in their current order
    } else if (priorityA === "") {
        return 1; // Put empty values at the end
    } else if (priorityB === "") {
        return -1; // Put empty values at the end
    } else {
        // Convert to numbers and compare numerically
        return priorityA - priorityB;
    }
    });

   

    return (
        <>
       
            <article id={`post-${pageData.id}`}>
                <h1>{pageData.title.rendered}</h1>
                <div className="entry-content" dangerouslySetInnerHTML={{__html:pageData.content.rendered}}>
                </div>
                {/* Timeline section */}
                {cptData && 
                
                    <section className='timeline-section'>
                        
                    <VerticalTimeline lineColor="green">
                        {cptData.map((cpt, index) => {
                            return (
                         <VerticalTimelineElement
                            key={index}
                            className="vertical-timeline-element--work"
                            contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                            contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                            date={cpt.acf.work_duration}
                            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff', border: '2px solid green' }}
                            // iconClassName='border-2 border-green-600'
                            icon={<MdWork />}
                        >
                            <h2 className="vertical-timeline-element-title">{cpt.acf.job_title}</h2>
                            <h3 className="vertical-timeline-element-subtitle">{cpt.title.rendered}</h3>
                            {/* <div className="job-description" dangerouslySetInnerHTML={{__html:cpt.acf.job_description}}></div> */}
                            <p>{cpt.acf.past_exp_matter}</p>
                           
                        </VerticalTimelineElement>
                          
                            )
                         })}
                      </VerticalTimeline>  
                      
                    
                    </section>
                }
                {pageData.acf.cta_text && pageData.acf.cta_link &&
                    <a href={pageData.acf.cta_link} className='text-2xl' target='_blank' rel='noopener'>
                        {pageData.acf.cta_text}
                    </a>
                }
            </article>
      
        </>
    )
}

export default Experiences
