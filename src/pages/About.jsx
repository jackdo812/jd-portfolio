import { useState, useEffect } from 'react'
import Loading from '../components/Loading'
import { Link } from 'react-router-dom';
import TechStack from '../components/TechStack'

// TanQuery Components
import {useQuery} from '@tanstack/react-query';
import {getPage} from '../api/fetchData';

// Isotope Components
import Isotope from 'isotope-layout';

const About = () => {

    const { isPending, error, data } = useQuery({
        queryKey: ['aboutData'],
        queryFn: () => getPage(26)
      })
    
      if (isPending) return <Loading/>
    
      if (error) return 'An error has occurred: ' + error.message

    return (
        <>
           
            <h1 className='hidden'>{data.title.rendered}</h1>
            <article id={`post-${data.id}`}>
                {/* Portrait photo */}
                <img className='w-[300px] pt-8 mx-auto my-0' src={data.acf.about_page_portrait} alt="Portrait photo" />
                <div className="entry-content mx-4" >
                    <section className='bio-section'>
                        <h2 className='font-bold font-roboto text-2xl pb-10 pt-6'>Me, Myself & I</h2>
                        {/* Bio */}
                            {data.acf.bio &&
                                <div dangerouslySetInnerHTML={{__html:data.acf.bio}} className='pb-3'></div>
                            }
                            {data.acf.bio_2 &&
                                <div dangerouslySetInnerHTML={{__html:data.acf.bio_2}} className='pb-3'></div>
                            }
                            {data.acf.bio_3 &&
                                <div dangerouslySetInnerHTML={{__html:data.acf.bio_3}} className='pb-3'></div>
                            }                    
                        {/* Primary CTA */}
                        {data.acf.primary_cta_text_about && data.acf.primary_cta_link_about &&
                            <Link className='primary-button block my-2 mx-auto w-fit' to={data.acf.primary_cta_link_about} > {data.acf.primary_cta_text_about}
                            </Link>
                        }
                        {/* Secondary CTA */}
                        {data.acf.secondary_cta_text_about && data.acf.secondary_cta_link_about &&
                            <Link className='secondary-button block my-2 mx-auto w-fit px-[8px] py-[6px]' to={data.acf.secondary_cta_link_about} > {data.acf.secondary_cta_text_about}
                            </Link>
                        }
                    </section>
                    <section className='Techstack-section mt-20 '>
                        {/* Tech Stack title */}
                        {(data.acf.tech_stack_title && data.acf.tech_stack) &&
                            <h2 className='font-bold font-roboto text-2xl mb-4'>{data.acf.tech_stack_title}</h2>
                        }
                        {/* Tech Stack List */}
                        {data.acf.tech_stack && 
                            <TechStack TechStack={data.acf.tech_stack}/>
                        }

                    </section>
                    <section className='hobbies-section my-14'>
                        {data.acf.hobby_section_title &&
                            <h2 className='font-bold'>{data.acf.hobby_section_title}</h2>
                        }
                        {/* Hobbies */}
                        {data.acf.hobby_1 &&
                            <img className='w-[300px]' src={data.acf.hobby_1} alt="Hobby 1" />
                        } 
                        {data.acf.hobby_2 &&
                            <img className='w-[300px]' src={data.acf.hobby_2} alt="Hobby 2" />
                        }
                        {data.acf.hobby_3 &&
                            <img className='w-[300px]' src={data.acf.hobby_3} alt="Hobby 3" />
                        }
                    </section>
                </div>
            </article>
       
        </>
    )
}

export default About
