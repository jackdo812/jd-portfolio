import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NextIconSvg, PrevIconSvg } from '../assets/images/NextPrevIcon';
import Loading from './Loading';
import { Link } from 'react-router-dom';
// TanQuery Components
import {useQuery} from '@tanstack/react-query';
import {getPost} from '../api/fetchData';


function Carousels({singleProjectData}) {

  const { isPending: postsIsPending, error: postsError, data: postsData } = useQuery({
    queryKey: ['postProjectsData'],
    queryFn: () => getPost(),
  })

  if (postsIsPending) return <Loading />
  if (postsError) return 'An error has occurred: ' + postsError.message
  
  const idToRemove = singleProjectData.id;

  // Remove the project that is in progress from the "See Other Project" Carousels
  const newPostsData = postsData.filter((post) => !post.acf.is_in_progress);
 
  // Remove the current project page from the "See Other Project"
  const filteredPostsData = newPostsData.filter((post) => post.id !== idToRemove);
  
  return (
    <Carousel indicators={false} nextIcon={<NextIconSvg />} prevIcon={<PrevIconSvg />}>
      {filteredPostsData.map((post, index) => {
        return (
          <Carousel.Item key={index}>
            <Carousel.Caption className='relative right-0 bottom-0 left-0 text-forest w-[75%] min-[500px]:w-[300px] mx-auto my-0'>
              <article className='border shadow-md shadow-forest border-leaf bg-foggy rounded pb-4 '>
                <Link to={`/projects/${post.slug}`}>
                  <img className='w-[300px] my-0 mx-auto rounded-t' src={post.acf.video_teaser} alt="Project's GIF teaser" loading='lazy'/>
                  <h3 className='font-bold mt-4' dangerouslySetInnerHTML={{__html:post.title.rendered}}></h3>
                  <p className='italic h-[40px]'>{post._embedded["wp:term"][1].map((tag, idx) => (
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