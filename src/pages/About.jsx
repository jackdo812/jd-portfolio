import { useState, useEffect } from 'react'
import Loading from '../components/Loading'
import { Link } from 'react-router-dom';
import TechStack from '../components/TechStack'
import LocationPin from '../assets/gifs/locationpin_ripple.gif'

// TanQuery Components
import {useQuery} from '@tanstack/react-query';
import {getPage} from '../api/fetchData';

import ReactCardFlip from 'react-card-flip';


const About = () => {

   
    const [isHover, setIsHover] = useState(false);
    const [isHobby1Flipped, setIsHobby1Flipped] = useState(false);
    const [isHobby2Flipped, setIsHobby2Flipped] = useState(false);
    const [isHobby3Flipped, setIsHobby3Flipped] = useState(false);

    const revealHobby1 = (e) => {
        e.preventDefault();
        setIsHobby1Flipped((prevState) => !prevState);
    };

    const revealHobby2 = (e) => {
        e.preventDefault();
        setIsHobby2Flipped((prevState) => !prevState);
    };

    const revealHobby3 = (e) => {
        e.preventDefault();
        setIsHobby3Flipped((prevState) => !prevState);
    };

    const mouseEnter = (e) => {
        e.preventDefault();
        setIsHover(true);
    }

    const mouseLeave = (e) => {
        e.preventDefault();
        setIsHover(false);
    }

    const { isPending, error, data } = useQuery({
        queryKey: ['aboutData'],
        queryFn: () => getPage(26)
      })
    
      if (isPending) return <Loading/>
    
      if (error) return 'An error has occurred: ' + error.message
      console.log(data);
    return (
        <div className='wrapper md:max-w-[1200px] md:mx-auto md:my-0'>
           
            <h1 className='hidden'>{data.title.rendered}</h1>
            <article id={`post-${data.id}`}>
                {/* Portrait photo */}
                <div className="entry-content mx-4" >
                    <div className='bio-wrapper md:flex'>
                        <div className='md:w-[50%]'>
                            <img className='w-[300px] pt-8 mx-auto my-0 md:w-[350px] lg:w-[400px]' onMouseEnter={mouseEnter} onMouseLeave={mouseLeave} src={isHover ? data.acf.about_page_portrait_hover : data.acf.about_page_portrait } alt="Portrait photo" />
                        </div>
                        <section className='bio-section md:w-[50%]'>
                            <h2 className='font-bold font-roboto text-3xl uppercase pb-10 pt-6 text-center md:!text-left md:pt-10'>Me, Myself & I</h2>
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
                            <div className='CTA-buttons-section md:flex md:justify-start md:gap-8'>           
                                {/* Primary CTA */}
                                {data.acf.primary_cta_text_about && data.acf.primary_cta_link_about &&
                                    <Link className='primary-button block my-4 mx-auto w-fit md:!mx-0 md:hover:primary-button-hover md:transition-all md:duration-500' to={data.acf.primary_cta_link_about} > {data.acf.primary_cta_text_about}
                                    </Link>
                                }
                                {/* Secondary CTA */}
                                {data.acf.secondary_cta_text_about && data.acf.secondary_cta_link_about &&
                                    <Link className='secondary-button block my-2 mx-auto w-fit px-[8px] py-[6px] md:h-fit md:self-center md:!mx-0 md:py-[8px] md:hover:secondary-button-hover md:transition-all md:duration-500' to={data.acf.secondary_cta_link_about} > {data.acf.secondary_cta_text_about}
                                    </Link>
                                }
                            </div>
                        </section>

                    </div>
                    <section className='Techstack-section mt-20 '>
                        {/* Tech Stack title */}
                        {(data.acf.tech_stack_title && data.acf.tech_stack) &&
                            <h2 className='font-bold font-roboto text-2xl mb-4 text-center'>{data.acf.tech_stack_title}</h2>
                        }
                        {/* Tech Stack List */}
                        {data.acf.tech_stack && 
                            <TechStack TechStack={data.acf.tech_stack}/>
                        }

                    </section>
                    <section className='hobbies-section my-14'>
                        {data.acf.hobby_section_title &&
                            <h2 className='font-bold font-roboto text-2xl mb-4 text-center'>{data.acf.hobby_section_title}</h2>
                        }
                        {/* Hobbies Title */}
                        {data.acf.hobby_illustration_desktop &&
                            <img className='hidden' src={data.acf.hobby_illustration_desktop} alt="3 Mountains Drawing" />
                        }
                      
                        {/* Hobbies Info and Flip Animation */}
                        <div className=''>
                            {data.acf.hobby_1 && data.acf.hobby_1_illustration &&
                                <div className='mb-8'>
                                    <ReactCardFlip isFlipped={isHobby1Flipped} flipDirection="horizontal">
                                    <div className="front-component">
                                            <div className='flip-card-front mx-auto my-0 rounded-[10px] max-w-[250px] backface-hidden z-20 h-[300px] border relative bg-white shadow-md'>
                                                <img className={`absolute w-[250px] z-10 left-0 bottom-0`} src={data.acf.hobby_1_illustration} alt="Illustration for Hobby 1" />
                                                <img className={`absolute z-20 w-[40px] left-[50%] bottom-[37%] cursor-pointer`} src={LocationPin} alt="Location Pin GIF" onClick={revealHobby1}/>
                                            </div>
                                    </div>

                                    <div className="back-component">
                                            <div className={`flip-card-back mx-auto my-0 rounded-[10px] w-[240px] transform rotate-y-180 backface-hidden relative shadow-md`}>
                                                <img className={`w-[240px] rounded-[10px]`} src={data.acf.hobby_1} alt="Hobby 1" />
                                                <span className={`absolute right-[10px] top-0 z-20 text-white text-2xl cursor-pointer underline`}>x</span>
                                                <span className={`absolute right-[10px] top-0 z-20 text-sun animate-ping text-2xl cursor-pointer underline`} onClick={revealHobby1}>x</span>
                                            </div>
                                    </div>
                                    </ReactCardFlip>
                                </div>
                            }


                            
                            {data.acf.hobby_2 && data.acf.hobby_2_illustration &&
                                <div className='mb-8'>
                                    <ReactCardFlip isFlipped={isHobby2Flipped} flipDirection="horizontal">
                                    <div className="front-component">
                                            <div className='flip-card-front mx-auto my-0 rounded-[10px] max-w-[250px] backface-hidden z-20 h-[300px] border relative bg-white shadow-md'>
                                                <img className={`absolute w-[250px] z-10 left-0 bottom-0`} src={data.acf.hobby_2_illustration} alt="Illustration for Hobby 1" />
                                                <img className={`absolute z-20 w-[40px] left-[40%] bottom-[26%] cursor-pointer`} src={LocationPin} alt="Location Pin GIF" onClick={revealHobby2}/>
                                            </div>
                                    </div>

                                    <div className="back-component">
                                            <div className={`flip-card-back mx-auto my-0 rounded-[10px] w-[240px] transform rotate-y-180 backface-hidden relative shadow-md`}>
                                                <img className={`w-[240px] rounded-[10px]`} src={data.acf.hobby_2} alt="Hobby 1" />
                                                <span className={`absolute right-[10px] top-0 z-20 text-white text-2xl cursor-pointer underline`}>x</span>
                                                <span className={`absolute right-[10px] top-0 z-20 text-sun animate-ping text-2xl cursor-pointer underline`} onClick={revealHobby2}>x</span>
                                            </div>
                                    </div>
                                    </ReactCardFlip>
                             </div>
                            }

                            {data.acf.hobby_3 && data.acf.hobby_3_illustration &&
                                <div className='mb-8'>
                                    <ReactCardFlip isFlipped={isHobby3Flipped} flipDirection="horizontal">
                                    <div className="front-component">
                                            <div className='flip-card-front mx-auto my-0 rounded-[10px] max-w-[250px] backface-hidden z-20 h-[320px] border relative bg-white shadow-md'>
                                                <img className={`absolute w-[250px] z-10 left-0 bottom-0`} src={data.acf.hobby_3_illustration} alt="Illustration for Hobby 1" />
                                                <img className={`absolute z-20 w-[40px] left-[60%] bottom-[20%] cursor-pointer`} src={LocationPin} alt="Location Pin GIF" onClick={revealHobby3}/>
                                            </div>
                                    </div>

                                    <div className="back-component">
                                            <div className={`flip-card-back mx-auto my-0 rounded-[10px] w-[240px] transform rotate-y-180 backface-hidden relative shadow-md`}>
                                                <img className={`w-[240px] rounded-[10px]`} src={data.acf.hobby_3} alt="Hobby 1" />
                                                <span className={`absolute right-[10px] top-0 z-20 text-white text-2xl cursor-pointer underline`}>x</span>
                                                <span className={`absolute right-[10px] top-0 z-20 text-sun animate-ping text-2xl cursor-pointer underline`} onClick={revealHobby3}>x</span>
                                            </div>
                                    </div>
                                    </ReactCardFlip>
                            </div>
                            }
                        </div>
                    </section>
                </div>
            </article>
       
        </div>
    )
}

export default About
