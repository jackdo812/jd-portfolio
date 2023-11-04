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
                <div className="entry-content" >
                    <section className='bio-section'>
                        {/* Portrait photo */}
                        <img className='w-[300px] mt-8' src={data.acf.about_page_portrait} alt="Portrait photo" />
                        <h2 className='font-bold uppercase font-roboto text-2xl text-center pb-10 pt-6'>Me, Myself & I</h2>
                        {/* Bio */}
                            {data.acf.bio &&
                                <p dangerouslySetInnerHTML={{__html:data.acf.bio}}></p>
                            }
                            {data.acf.bio_2 &&
                                <p dangerouslySetInnerHTML={{__html:data.acf.bio_2}}></p>
                            }
                            {data.acf.bio_3 &&
                                <p dangerouslySetInnerHTML={{__html:data.acf.bio_3}}></p>
                            }
                    
                        {/* Primary CTA */}
                        {data.acf.primary_cta_text_about && data.acf.primary_cta_link_about &&
                            <Link to={data.acf.primary_cta_link_about} > {data.acf.primary_cta_text_about}
                            </Link>
                        }
                        {/* Secondary CTA */}
                        {data.acf.secondary_cta_text_about && data.acf.secondary_cta_link_about &&
                            <Link to={data.acf.secondary_cta_link_about} > {data.acf.secondary_cta_text_about}
                            </Link>
                        }
                    </section>
                    <section className='Techstack-section'>
                        {/* Tech Stack title */}
                        {(data.acf.tech_stack_title && data.acf.tech_stack) &&
                            <h2 className='font-bold'>{data.acf.tech_stack_title}</h2>
                        }
                        {/* Tech Stack List */}
                        {data.acf.tech_stack && 
                            <TechStack TechStack={data.acf.tech_stack}/>
                        }

                    </section>
                    <section className='hobbies-section'>
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
