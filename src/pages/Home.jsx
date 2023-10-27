import Loading from '../components/Loading'
import { Link } from 'react-router-dom';
import JackGif from '../assets/gifs/jack_cartoon.gif'

// TanQuery Components
import {useQuery} from '@tanstack/react-query';
import {getPage} from '../api/fetchData';

const Home = ( ) => {

    const { isPending, error, data } = useQuery({
        queryKey: ['homeData'],
        queryFn: () => getPage(7)
      })
    
      if (isPending) return <Loading />
    
      if (error) return 'An error has occurred: ' + error.message
    
    return (
        <>
        {data.acf.title && 
            <h1>{data.acf.title}</h1>      
        }
            <article id={`post-${data.id}`}>
                <div className="entry-content">
                    <section className='intro-section'>
                        {/* Intro Messages */}
                        {data.acf.intro_messages && 
                            <h2 className='text-2xl' dangerouslySetInnerHTML={{__html:data.acf.intro_messages}}></h2>
                        }
                        {data.acf.intro_messages_2 && 
                            <p className='text-2xl' dangerouslySetInnerHTML={{__html:data.acf.intro_messages_2}}></p>
                        }
                        {/* Animated Portrait */}
                        
                        <img src={data.acf.portrait} alt="" />
                        {/* Funny Quote */}
                        {data.acf.quote &&
                            <q className='italic'>{data.acf.quote}</q>
                        }
                        {/* Primary CTA */}
                        {(data.acf.primary_cta_text && data.acf.primary_cta_link) &&
                            <Link to={data.acf.primary_cta_link} className='text-2xl' target='_blank' rel='noopener'> 
                                {data.acf.primary_cta_text}
                            </Link>
                        }
                        {/* Secondary CTA */}
                        {(data.acf.secondary_cta_text && data.acf.secondary_cta_link) && 
                            <Link to={data.acf.secondary_cta_link} className='text-2xl' target='_blank' rel='noopener'> 
                                {data.acf.secondary_cta_text}
                            </Link>
                        }
                    </section>
                </div>
                <section className='featured-projects'>
                    {data.acf.section_2_title &&
                        <h2>{data.acf.section_2_title}</h2>
                    }
                    {/* Project List */}

                    {/* See all button */}
                    {(data.acf.section_2_cta_text && data.acf.section_2_cta_link) &&
                        <Link to={data.acf.section_2_cta_link} className='text-2xl' target='_blank' rel='noopener'>
                            {data.acf.section_2_cta_text}
                        </Link>
                    }
                </section>
            </article>
        </>            
    )
}

export default Home
