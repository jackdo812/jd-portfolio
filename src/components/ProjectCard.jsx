import React from 'react'
import { Link } from 'react-router-dom'


const ProjectCard = ({postsData, isOnHome}) => {
    let newPostsData;
    if (isOnHome) {
        newPostsData = postsData.slice(0, 2);
    } else {
        newPostsData = postsData;
    }
    console.log(newPostsData);
  return (
    <div className='mx-4'>
      {isOnHome ? (
          newPostsData.map(post => 
            <article key={post.id} id={`post-${post.id}`} className='border-2 shadow-md rounded bg-foggy my-8 mx-auto max-w-[300px]'>
                {/* {post.featured_media !== 0 && post._embedded &&
                    <figure className="featured-image" dangerouslySetInnerHTML={featuredImage(post._embedded['wp:featuredmedia'][0])}></figure>
                } */}
                {post.acf.video_teaser &&
                  <img className='w-[300px] mx-auto my-0' src={post.acf.video_teaser} alt="Animated Cartoonized Portrait" />
                }
                {post.title.rendered &&
                    <h3 className='font-bold text-[1.3rem] text-center'>{post.title.rendered}</h3>    
                }
                <Link to={`/projects/${post.slug}`} className='primary-button my-4 mx-auto block w-fit'>More Info</Link>

            </article>
            )
      ): (
        
        newPostsData.map(post => 
            <article key={post.id} id={`post-${post.id}`} className='border-2 shadow-md rounded bg-foggy my-8'>
                <div className='mx-2'>
                  {/* {post.featured_media !== 0 && post._embedded &&
                      <figure className="featured-image" dangerouslySetInnerHTML={featuredImage(post._embedded['wp:featuredmedia'][0])}></figure>
                  } */}
                  {post.acf.video_teaser &&
                    <img className='w-[300px] mx-auto my-0' src={post.acf.video_teaser} alt="Animated Cartoonized Portrait" />
                  }
                  {post.title.rendered &&
                      <h3 className='font-bold text-[1.3rem] text-center'>{post.title.rendered}</h3>    
                  }
                  <p className='italic text-center pb-2'>{post._embedded["wp:term"][1].map((tag, index) => (
                      <span key={index}>{tag.name}{index < post._embedded["wp:term"][1].length - 1 ? " | " : null}</span>
                  ))}</p>
                  {post.acf.project_overview &&
                    <p className='text-center'>
                      {post.acf.project_overview.length > 20 ?
                        `${post.acf.project_overview.split(' ').slice(0, 10).join(' ')}...` :
                        post.acf.project_overview
                      }
                  </p>           
                  }
                  <Link to={`/projects/${post.slug}`} className='primary-button my-4 mx-auto block w-fit'>More Info</Link>
                </div>
            </article>
          )
      )}
          
    </div>
  )
}

export default ProjectCard