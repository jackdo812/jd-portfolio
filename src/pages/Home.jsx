import Loading from '../components/Loading'

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
            <article id={`post-${data.id}`}>
                <h1>{data.title.rendered}</h1>
                <div className="entry-content" dangerouslySetInnerHTML={{__html: data.content.rendered}}>
                </div>
                <p className='text-orange-600'>Testing Tailwind</p>
            </article>
        </>            
    )
}

export default Home
