import { useState, useEffect } from 'react'
import Loading from '../components/Loading'
import { Link } from 'react-router-dom';
import TechStack from '../components/TechStack'
import LocationPin from '../assets/gifs/locationpin_ripple.gif'
import LocationPinLetter from '../assets/gifs/LocationPin_Ripple_letters.gif'
import { Fade } from "react-awesome-reveal";
import { useSelector } from 'react-redux';

// SEO
import { Helmet } from 'react-helmet-async';

// TanQuery Components
import {useQuery} from '@tanstack/react-query';
import {getPage} from '../api/fetchData';

import ReactCardFlip from 'react-card-flip';


const About = () => {
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

    
      
    return (
        showLoading ? <Loading /> : (
        <Fade>
        <div className='wrapper md:max-w-[1200px] md:mx-auto md:my-0'>
           {/* SEO */}
            <Helmet>
                {data.acf.seo_title_tag ? (
                    <title>{data.acf.seo_title_tag}</title>
                ) : (
                    <title>About Page - Jack Do </title>
                )
                    
                }
                {data.acf.seo_meta_description ? (
                    <meta name="description" content={data.acf.seo_meta_description} />
                ) : (
                    <meta name="description" content="About Page - Jack Do" />
                )
                
                }
            </Helmet>
           
            <article id={`post-${data.id}`}>
                {/* Portrait photo */}
                <div className="entry-content mx-4" >
                    <div className='bio-wrapper md:flex'>
                        <div className='md:w-[50%]'>
                            <img className='w-[300px] pt-8 mx-auto my-0 md:w-[350px] lg:w-[400px]' onMouseEnter={mouseEnter} onMouseLeave={mouseLeave} src={isHover ? data.acf.about_page_portrait_hover : data.acf.about_page_portrait } alt="Portrait photo" />
                        </div>
                        <section className='bio-section md:w-[50%]'>
                            <h1 className='font-bold font-roboto text-3xl uppercase pb-10 pt-6 text-center md:!text-left md:pt-10'>Me, Myself & I</h1>
                            {/* Bio */}
                                {data.acf.bio &&
                                    <div dangerouslySetInnerHTML={{__html:data.acf.bio}} className='about-bio pb-3'></div>
                                }        
                            <div className='CTA-buttons-section md:flex md:justify-between bp-850:justify-start bp-850:gap-8'>           
                                {/* Primary CTA */}
                                {data.acf.primary_cta_text_about && data.acf.primary_cta_link_about &&
                                    <Link className='primary-button block my-4 mx-auto w-fit md:!mx-0 md:hover:primary-button-hover md:transition-all md:duration-500' to={data.acf.primary_cta_link_about} target='_blank' rel='noopener' > {data.acf.primary_cta_text_about}
                                    </Link>
                                }
                                {/* Secondary CTA */}
                                {data.acf.secondary_cta_text_about && data.acf.secondary_cta_link_about &&
                                    <Link className={` block my-2 mx-auto w-fit px-[8px] py-[6px] ${isDarkMode ? 'secondary-button-dark md:hover:secondary-button-hover-dark' : 'secondary-button md:hover:secondary-button-hover'} md:h-fit md:self-center md:!mx-0 md:py-[8px] md:transition-all md:duration-500`} to={data.acf.secondary_cta_link_about} target='_blank' rel='noopener' > {data.acf.secondary_cta_text_about}
                                    </Link>
                                }
                            </div>
                        </section>

                    </div>
                    <section className='Techstack-section mt-20 md:max-w-[1200px] md:mx-auto md:my-28'>
                        {/* Tech Stack title */}
                        {(data.acf.tech_stack_title && data.acf.tech_stack) &&
                            <h2 className='font-bold font-roboto text-2xl mb-4 text-center md:!text-left'>{data.acf.tech_stack_title}</h2>
                        }
                        {/* Tech Stack List */}
                        {data.acf.tech_stack && 
                            <TechStack TechStack={data.acf.tech_stack}/>
                        }

                    </section>
                    <section className='hobbies-section my-14'>
                        {/* Hobbies Title */}
                        {data.acf.hobby_section_title &&
                            <h2 className='font-bold font-roboto text-2xl mb-4 text-center md:!text-left'>{data.acf.hobby_section_title}</h2>
                        }
                        {/* Hobbies Info - Desktop */}
                        {data.acf.hobby_illustration_desktop &&
                            <div className={`hidden ${isDarkMode && 'md:bg-foggy rounded-lg'} md:block md:relative md:min-h-[650px] md:max-w-[1200px] md:my-0 md:mx-auto min-[800px]:min-h-[700px] min-[900px]:min-h-[800px] min-[1075px]:min-h-[900px] min-[1100px]:min-h-[1000px]`}>
                                <img className='hidden md:block md:absolute md:bottom-0 ' src={data.acf.hobby_illustration_desktop} alt="3 Mountains Drawing" />
                                <img className={`absolute z-20 w-[65px] left-[52%] bottom-[65%] cursor-pointer`} src={LocationPin} alt="Location Pin GIF" onClick={revealHobby1}/>
                                <img className={`absolute z-20 w-[65px] left-[70%] bottom-[35%] cursor-pointer`} src={LocationPin} alt="Location Pin GIF" onClick={revealHobby2}/>
                                <img className={`absolute z-20 w-[65px] left-[13.5%] bottom-[49%] cursor-pointer`} src={LocationPin} alt="Location Pin GIF" onClick={revealHobby3}/>
                                <div className={` ${isHobby1Flipped ? 'block animate-zoom' : 'hidden'} rounded-[10px] shadow-[0_2px_8px_0] shadow-black absolute right-[35%] top-[10%] z-30 w-[200px] min-[950px]:w-[250px] `}>
                                    <img className={`w-[200px] rounded-[10px] z-30 min-[950px]:w-[250px]`} src={data.acf.hobby_1} alt="Hobby 1" />
                                    <span className={`absolute right-[10px] top-0 z-30 text-[#FF0000] text-2xl cursor-pointer `}>x</span>
                                    <span className={`absolute right-[10px] top-0 z-30 text-white animate-ping text-2xl cursor-pointer`} onClick={revealHobby1}>x</span>
                                    {data.acf.hobby_1_badge &&
                                                    <img className={`absolute w-[50px] left-[10px] top-0 z-20`} src={data.acf.hobby_1_badge} alt='Hobby 1 Badge Illustration'/>
                                     }
                                </div>
                                <div className={` ${isHobby2Flipped ? 'block animate-zoom' : 'hidden'} rounded-[10px] shadow-[0_2px_8px_0] shadow-black absolute right-[10%] bottom-[12%] z-30 w-[200px] min-[950px]:w-[250px] min-[950px]:bottom-[8%] min-[950px]:right-[15%] min-[1100px]:bottom-[15%]`}>
                                    <img className={`w-[200px] rounded-[10px] z-30 min-[950px]:w-[250px]`} src={data.acf.hobby_2} alt="Hobby 2" />
                                    <span className={`absolute right-[10px] top-0 z-30 text-[#FF0000] text-2xl cursor-pointer `}>x</span>
                                    <span className={`absolute right-[10px] top-0 z-30 text-white animate-ping text-2xl cursor-pointer `} onClick={revealHobby2}>x</span>
                                    {data.acf.hobby_2_badge &&
                                                    <img className={`absolute w-[50px] left-[10px] top-0 z-20`} src={data.acf.hobby_2_badge} alt='Hobby 2 Badge Illustration'/>
                                     }
                                </div>
                                <div className={` ${isHobby3Flipped ? 'block animate-zoom' : 'hidden'} rounded-[10px] shadow-[0_2px_8px_0] shadow-black absolute left-[5%] bottom-[25%] z-30 w-[200px] min-[950px]:w-[250px] min-[950px]:bottom-[25%] min-[950px]:left-[5%] min-[1100px]:bottom-[30%] min-[1100px]:left-[10%]`}>
                                    <img className={`w-[200px] rounded-[10px] z-30 min-[950px]:w-[250px]`} src={data.acf.hobby_3} alt="Hobby 2" />
                                    <span className={`absolute right-[10px] top-0 z-30 text-[#FF0000] text-2xl cursor-pointer `}>x</span>
                                    <span className={`absolute right-[10px] top-0 z-30 text-white animate-ping text-2xl cursor-pointer `} onClick={revealHobby3}>x</span>
                                    {data.acf.hobby_3_badge &&
                                                    <img className={`absolute w-[50px] left-[10px] top-0 z-20`} src={data.acf.hobby_3_badge} alt='Hobby 3 Badge Illustration'/>
                                     }
                                </div>
                            </div>
                        }
                      
                        {/* Hobbies Info and Flip Animation - Mobile */}
                        
                            {data.acf.hobby_1 && data.acf.hobby_1_illustration &&
                                <div className='mb-8 md:hidden'>
                                    <ReactCardFlip isFlipped={isHobby1Flipped} flipDirection="horizontal">
                                    <div className="front-component">
                                            <div className='flip-card-front mx-auto my-0 rounded-[10px] max-w-[250px] backface-hidden z-20 h-[300px] border relative bg-white shadow-[0_2px_8px_0] shadow-black'>
                                                <img className={`absolute w-[250px] z-10 left-0 bottom-0`} src={data.acf.hobby_1_illustration} alt="Illustration for Hobby 1" />
                                                <img className={`absolute z-20 w-[70px] left-[45%] bottom-[34%] cursor-pointer`} src={LocationPinLetter} alt="Location Pin GIF" onClick={revealHobby1}/>
                                            </div>
                                    </div>

                                    <div className="back-component">
                                            <div className={`flip-card-back mx-auto my-0 rounded-[10px] w-[240px] transform rotate-y-180 backface-hidden relative shadow-[0_2px_8px_0] shadow-black `}>
                                                <img className={`w-[240px] rounded-[10px]`} src={data.acf.hobby_1} alt="Hobby 1" />
                                                <span className={`absolute right-[10px] top-0 z-20 text-[#FF0000] text-2xl cursor-pointer`}>x</span>
                                                <span className={`absolute right-[10px] top-0 z-20 text-white animate-ping text-2xl cursor-pointer`} onClick={revealHobby1}>x</span>
                                                {data.acf.hobby_1_badge &&
                                                    <img className={`absolute w-[50px] left-[10px] top-0 z-20`} src={data.acf.hobby_1_badge} alt='Hobby 1 Badge Illustration'/>
                                                }
                                            </div>
                                    </div>
                                    </ReactCardFlip>
                                </div>
                            }


                            
                            {data.acf.hobby_2 && data.acf.hobby_2_illustration &&
                                <div className='mb-8 md:hidden'>
                                    <ReactCardFlip isFlipped={isHobby2Flipped} flipDirection="horizontal">
                                    <div className="front-component">
                                            <div className='flip-card-front mx-auto my-0 rounded-[10px] max-w-[250px] backface-hidden z-20 h-[300px] border relative bg-white shadow-[0_2px_8px_0] shadow-black'>
                                                <img className={`absolute w-[250px] z-10 left-0 bottom-0`} src={data.acf.hobby_2_illustration} alt="Illustration for Hobby 1" />
                                                <img className={`absolute z-20 w-[70px] left-[38%] bottom-[26%] cursor-pointer`} src={LocationPinLetter} alt="Location Pin GIF" onClick={revealHobby2}/>
                                            </div>
                                    </div>

                                    <div className="back-component">
                                            <div className={`flip-card-back mx-auto my-0 rounded-[10px] w-[240px] transform rotate-y-180 backface-hidden relative shadow-[0_2px_8px_0] shadow-black`}>
                                                <img className={`w-[240px] rounded-[10px]`} src={data.acf.hobby_2} alt="Hobby 1" />
                                                <span className={`absolute right-[10px] top-0 z-20 text-[#FF0000] text-2xl cursor-pointer`}>x</span>
                                                <span className={`absolute right-[10px] top-0 z-20 text-white animate-ping text-2xl cursor-pointer`} onClick={revealHobby2}>x</span>
                                                {data.acf.hobby_2_badge &&
                                                    <img className={`absolute w-[50px] left-[10px] top-0 z-20`} src={data.acf.hobby_2_badge} alt='Hobby 2 Badge Illustration'/>
                                                }
                                            </div>
                                    </div>
                                    </ReactCardFlip>
                             </div>
                            }

                            {data.acf.hobby_3 && data.acf.hobby_3_illustration &&
                                <div className='mb-8 md:hidden'>
                                    <ReactCardFlip isFlipped={isHobby3Flipped} flipDirection="horizontal">
                                    <div className="front-component">
                                            <div className='flip-card-front mx-auto my-0 rounded-[10px] max-w-[250px] backface-hidden z-20 h-[320px] border relative bg-white shadow-[0_2px_8px_0] shadow-black'>
                                                <img className={`absolute w-[250px] z-10 left-0 bottom-0`} src={data.acf.hobby_3_illustration} alt="Illustration for Hobby 1" />
                                                <img className={`absolute z-20 w-[70px] left-[58%] bottom-[17%] cursor-pointer`} src={LocationPinLetter} alt="Location Pin GIF" onClick={revealHobby3}/>
                                            </div>
                                    </div>

                                    <div className="back-component">
                                            <div className={`flip-card-back mx-auto my-0 rounded-[10px] w-[240px] transform rotate-y-180 backface-hidden relative shadow-[0_2px_8px_0] shadow-black`}>
                                                <img className={`w-[240px] rounded-[10px]`} src={data.acf.hobby_3} alt="Hobby 1" />
                                                <span className={`absolute right-[10px] top-0 z-20 text-[#FF0000] text-2xl cursor-pointer`}>x</span>
                                                <span className={`absolute right-[10px] top-0 z-20 text-white animate-ping text-2xl cursor-pointer`} onClick={revealHobby3}>x</span>
                                                {data.acf.hobby_3_badge &&
                                                    <img className={`absolute w-[50px] left-[10px] top-0 z-20`} src={data.acf.hobby_3_badge} alt='Hobby 3 Badge Illustration'/>
                                                }
                                            </div>
                                    </div>
                                    </ReactCardFlip>
                            </div>
                            }
                        
                    </section>
                </div>
            </article>
       
        </div>
        </Fade>
        )
    )
}

export default About
