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
                {pageData.title.rendered ? (
                    <h1 className='text-3xl font-bold font-roboto text-center uppercase pb-10 pt-16'>{pageData.title.rendered}</h1>
                )  : (
                    <h1>Experiences</h1>
                )
                }
                <div className="text-center pb-4 mx-2" dangerouslySetInnerHTML={{__html:pageData.content.rendered}}>
                </div>
                {/* Timeline section */}
                {cptData && 
                    <div className='timeline-section'>   
                    <VerticalTimeline lineColor="green">
                        {cptData.map((cpt, index) => {
                            return (                   
                               <VerticalTimelineElement
                                   key={index}
                                   className="vertical-timeline-element--work"
                                   contentStyle={{ background: '#FAFBEE', border: '1px solid #04773B', color: '#053B06' }}
                                   contentArrowStyle={{ borderRight: '7px solid #04773B' }}                           
                                   date={cpt.acf.work_duration}
                                   iconStyle={{ background: '#f1c834', color: '#fff', border: '2px solid green' }}
                                   iconClassName='border-2 border-green-600'
                                   icon={<MdWork />}
                               >
                                    {(cpt.acf.job_title && cpt.title.rendered && cpt.acf.past_exp_matter) ? (
                                        <>
                                            <h2 className="vertical-timeline-element-title font-bold">{cpt.acf.job_title}</h2>
                                            <h3 className="vertical-timeline-element-subtitle italic pt-2">{cpt.title.rendered}</h3>
                                            <p>{cpt.acf.past_exp_matter}</p>               
                                        </>
                                    ) : ( 
                                        <p>Infomation loading... Please double-check your input...!</p>
                                    )

                                    }
                               </VerticalTimelineElement>    
                            )
                         })}
                      </VerticalTimeline>  
                    </div>
                }
                {pageData.acf.cta_text && pageData.acf.cta_link &&
                    <div className='flex justify-center pt-10 mb-10'>
                    <a href={pageData.acf.cta_link} className='primary-button' target='_blank' rel='noopener'>
                        {pageData.acf.cta_text}
                    </a>
                    </div>
                }
            </article>
      
        </>
    )
}

export default Experiences
