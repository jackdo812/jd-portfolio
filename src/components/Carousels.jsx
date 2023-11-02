import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NextIconSvg, PrevIconSvg } from '../assets/images/NextPrevIcon';
import Loading from './Loading';
import { Link } from 'react-router-dom';
// TanQuery Components
import {useQuery} from '@tanstack/react-query';
import {getPage, getPost} from '../api/fetchData';


function Carousels({singleProjectData}) {

  const { isPending: postsIsPending, error: postsError, data: postsData } = useQuery({
    queryKey: ['postProjectsData'],
    queryFn: () => getPost(),
  })

  if (postsIsPending) return <Loading />
  if (postsError) return 'An error has occurred: ' + postsError.message
  
  const idToRemove = singleProjectData.id;
 
  const filteredPostsData = postsData.filter((post) => post.id !== idToRemove);
  
  return (
    <Carousel indicators={false} nextIcon={<NextIconSvg />} prevIcon={<PrevIconSvg />}>
      {filteredPostsData.map((post, index) => {
        return (
          <Carousel.Item key={index}>
            <Carousel.Caption className='relative right-0 bottom-0 left-0 text-red-600 w-[75%] mx-auto my-0'>
              <article className='border border-black rounded pb-4'>
                <Link to={`/projects/${post.slug}`}>
                  <img className='w-[300px] my-0 mx-auto' src={post.acf.video_teaser} alt="Project's GIF teaser" />
                  <h3 className='font-bold'>{post.title.rendered}</h3>
                  <p>{post._embedded["wp:term"][1].map((tag, idx) => (
                    <span key={idx}>{tag.name}{idx < post._embedded["wp:term"][1].length - 1 ? " | " : null}</span>
                  ))}
                  </p>
                </Link>
              </article>
            </Carousel.Caption>
          </Carousel.Item>
        )})
        }
    </Carousel>
    
  );
}

export default Carousels;