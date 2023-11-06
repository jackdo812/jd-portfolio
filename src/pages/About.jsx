import { useState, useEffect } from 'react'
import Loading from '../components/Loading'
import { Link } from 'react-router-dom';
import TechStack from '../components/TechStack'
import LocationPin from '../assets/gifs/locationpin_ripple.gif'

// TanQuery Components
import {useQuery} from '@tanstack/react-query';
import {getPage} from '../api/fetchData';


const About = () => {
    const [isHobby1Revealed, setIsHobby1Revealed] = useState(false)

    const hobbyRevealed = () => {
        setIsHobby1Revealed(true);
    }

    const closeHobby = () => {
        setIsHobby1Revealed(false);
    }


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
                            <h2 className='font-bold font-roboto text-2xl mb-4'>{data.acf.hobby_section_title}</h2>
                        }
                        {/* Hobbies */}
                        {data.acf.hobby_illustration_desktop &&
                            <img className='hidden' src={data.acf.hobby_illustration_desktop} alt="3 Mountains Drawing" />
                        }
                        {data.acf.hobby_1 && data.acf.hobby_1_illustration &&
                            <div className={`flip-card perspective-1000 border rounded-[10px] bg-white shadow-md max-w-[300px] h-[344px] ${isHobby1Revealed ? 'transform rotate-y-180' : ''}`}>
                                <div className={`flip-card-inner rounded-[10px] max-w-[300px] transition-transform duration-800 transform preserve-3d rotate-y-180 relative`}>

                                    <div className='flip-card-front rounded-[10px] backface-hidden absolute z-20'>
                                    <img className={` w-[300px] z-10 left-0 bottom-0 ${isHobby1Revealed ? 'opacity-0' : 'opacity-1'}`} src={data.acf.hobby_1_illustration} alt="Illustration for Hobby 1" />
                                    <img className={` z-20 w-[40px] left-[50%] bottom-[35%] cursor-pointer ${isHobby1Revealed ? 'opacity-0' : 'opacity-1'}`} src={LocationPin} alt="Location Pin GIF" onClick={hobbyRevealed}/>
                                    </div>

                                    <div className={`flip-card-back rounded-[10px] transform rotate-y-180 backface-hidden absolute`}>
                                        <img className={`w-[300px] rounded-[10px]`} src={data.acf.hobby_1} alt="Hobby 1" />
                                        <span className={`absolute right-[10px] top-0 z-20 text-white text-2xl cursor-pointer ${isHobby1Revealed ? 'opacity-1' : 'opacity-0 hidden'}`}>x</span>
                                        <span className={`absolute right-[10px] top-0 z-20 text-sun animate-ping text-2xl cursor-pointer ${isHobby1Revealed ? 'opacity-1' : 'opacity-0 hidden'}`} onClick={closeHobby}>x</span>
                                    </div>

                                </div>
                            </div>
                        } 
                        {/* {data.acf.hobby_1_illustration &&
                            <img className='' src={data.acf.hobby_1_illustration} alt="Illustration for Hobby 1" />
                        } */}
                        {/* {data.acf.hobby_2_illustration &&
                            <img className='' src={data.acf.hobby_2_illustration} alt="Illustration for Hobby 1" />
                        }
                        {data.acf.hobby_2 &&
                            <img className='w-[300px]' src={data.acf.hobby_2} alt="Hobby 2" />
                        }
                         {data.acf.hobby_3_illustration &&
                            <img className='' src={data.acf.hobby_3_illustration} alt="Illustration for Hobby 1" />
                        }
                        {data.acf.hobby_3 &&
                            <img className='w-[300px]' src={data.acf.hobby_3} alt="Hobby 3" />
                        } */}
                    </section>
                </div>
            </article>
       
        </>
    )
}

export default About
