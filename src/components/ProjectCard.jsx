import React from 'react'
import { Link } from 'react-router-dom'
import JackCartoon from '../assets/gifs/jack_cartoon.gif'

const ProjectCard = ({postsData, isOnHome}) => {
    let newPostsData;
    if (isOnHome) {
        newPostsData = postsData.slice(0, 2);
    } else {
        newPostsData = postsData;
    }

    console.log(newPostsData);
  return (
    <div >
      {isOnHome ? (
          newPostsData.map(post => 
            <article key={post.id} id={`post-${post.id}`} className='border-2 shadow-md rounded bg-foggy my-8'>
                {/* {post.featured_media !== 0 && post._embedded &&
                    <figure className="featured-image" dangerouslySetInnerHTML={featuredImage(post._embedded['wp:featuredmedia'][0])}></figure>
                } */}
                <img className='w-[300px] mx-auto my-0' src={JackCartoon} alt="Animated Cartoonized Portrait" />
                <h3 className='font-bold text-[1.3rem] text-center'>{post.title.rendered}</h3>
                <Link to={`/projects/${post.slug}`} className='primary-button my-4 mx-auto block w-fit'>More Info</Link>

            </article>
            )
      ): (
        newPostsData.map(post => 
          <article key={post.id} id={`post-${post.id}`} className='border-2 shadow-md rounded'>
              {/* {post.featured_media !== 0 && post._embedded &&
                  <figure className="featured-image" dangerouslySetInnerHTML={featuredImage(post._embedded['wp:featuredmedia'][0])}></figure>
              } */}
              <img className='w-[300px] mx-auto my-0' src={JackCartoon} alt="Animated Cartoonized Portrait" />
              <h3>{post.title.rendered}</h3>
              <Link to={`/projects/${post.slug}`}>More Info</Link>
              <p>On Projects Page</p>
              
          </article>
          )
      )}
          
    </div>
  )
}

export default ProjectCard