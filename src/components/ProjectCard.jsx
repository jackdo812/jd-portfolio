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
  return (
    <div >
          {newPostsData.map(post => 
            <article key={post.id} id={`post-${post.id}`} className='border-2 shadow-md rounded'>
                {post.featured_media !== 0 && post._embedded &&
                    <figure className="featured-image" dangerouslySetInnerHTML={featuredImage(post._embedded['wp:featuredmedia'][0])}></figure>
                }
                <img className='w-[345px] mx-auto my-0' src={JackCartoon} alt="Animated Portrait" />
                <Link to={`/projects/${post.slug}`}><h2>{post.title.rendered}</h2></Link>
                <div className="entry-content" dangerouslySetInnerHTML={{__html:post.excerpt.rendered}}></div>

                
            </article>
            )}
    </div>
  )
}

export default ProjectCard