import React from 'react'
import { Link } from 'react-router-dom'


const ProjectCard = ({postsData, isOnHome}) => {
    let newPostsData;
    if (isOnHome) {
      newPostsData = postsData.filter((post) => !post.acf.is_in_progress).slice(0, 2); // not showing any in-progress projects on home page
    } else {
        // Sort projects to move in-progress ones to the end
    newPostsData = [...postsData].sort((a, b) => {
      if (a.acf.is_in_progress && !b.acf.is_in_progress) return 1;
      if (!a.acf.is_in_progress && b.acf.is_in_progress) return -1;
      return 0;
    });
    }
  return (
    <>
      {isOnHome ? (
        <div className='md:flex md:gap-8 min-[900px]:gap-16 min-[1200px]:gap-24'> 
          {newPostsData.map(post => 
           
            <article key={post.id} id={`post-${post.id}`} className='border-2 shadow-md rounded bg-foggy my-8 mx-auto max-w-[300px] md:max-w-[250px] min-[950px]:max-w-[300px]'>
                {post.acf.video_teaser &&
                  <img className='w-[275px] mx-auto my-2 rounded-t shadow-md md:!my-0 md:!w-[300px]' src={post.acf.video_teaser} alt="Animated Cartoonized Portrait" />
                }
                {post.title.rendered &&
                    <h3 className='font-bold text-[1.3rem] text-center mt-4' dangerouslySetInnerHTML={{ __html: post.title.rendered }} />     
                }
                <Link to={`/projects/${post.slug}`} className='primary-button my-4 mx-auto block w-fit transition-all duration-500 md:hover:primary-button-hover'>More Info</Link>

            </article>
            )}
          </div>  
      ): (
        <div className='mx-4 md:grid md:grid-cols-2 min-[1200px]:grid-cols-3'>
        {newPostsData.map(post => 
            <article key={post.id} id={`post-${post.id}`} className='border-2 shadow-md rounded bg-foggy my-8 max-w-[300px] mx-auto min-[845px]:max-w-[350px] min-[1200px]:max-w-[300px]'>
                <div className='mx-2'>
                  {post.acf.video_teaser &&
                    <img className='w-[275px] mx-auto my-2 rounded-lg shadow-md min-[845px]:!my-8 min-[1200px]:!my-2' src={post.acf.video_teaser} alt="Animated Cartoonized Portrait" />
                  }
                  {post.title.rendered &&
                      <h3 className='font-bold text-[1.3rem] text-center mt-4' dangerouslySetInnerHTML={{ __html: post.title.rendered }} />  
                  }
                  <p className='italic text-center pb-2'>{post._embedded["wp:term"][1].map((tag, index) => (
                      <span key={index}>{tag.name}{index < post._embedded["wp:term"][1].length - 1 ? " | " : null}</span>
                  ))}</p>
                  {post.acf.project_overview &&
                    <p className='text-center'>
                      {post.acf.project_overview.length > 20 ?
                        `${post.acf.project_overview.split(' ').slice(0, 8).join(' ')}...` :
                        post.acf.project_overview
                      }
                  </p>           
                  }
                  {!post.acf.is_in_progress ? (
                  <Link to={`/projects/${post.slug}`} className='primary-button my-4 mx-auto block w-fit md:hover:primary-button-hover md:transition-all md:duration-500'>More Info</Link>
                  ) : (
                    <p className='secondary-button my-4 mx-auto black w-fit cursor-not-allowed'>In Progress. . .</p>
                  )
                }
                </div>
            </article>
          )}
        </div>
      )}
          
    </>
  )
}

export default ProjectCard