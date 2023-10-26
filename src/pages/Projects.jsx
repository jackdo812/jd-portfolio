import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Loading from '../components/Loading'

// TanQuery Components
import {useQuery} from '@tanstack/react-query';
import {getPage, getPost} from '../api/fetchData';

const Projects = ( {featuredImage} ) => {
    const { isPending: pageIsPending, error: pageError, data: pageData, isSuccess } = useQuery({
        queryKey: ['pageProjectsData'],
        queryFn: () => getPage(11)
      })
      
     const { isPending: postsIsPending, error: postsError, data: postsData } = useQuery({
        queryKey: ['postProjectsData'],
        queryFn: () => getPost(),
          enabled: isSuccess,
      })
      
    
      if (pageIsPending) return <Loading />
      if (postsIsPending) return <Loading />
    
      if (pageError) return 'An error has occurred: ' + pageError.message
      if (postsError) return 'An error has occurred: ' + postsError.message
      
    return (
        <>
                <h1>Projects</h1>
                <p>{pageData.id}</p>
                {postsData.map(post => 
                    <article key={post.id} id={`post-${post.id}`}>
                        {post.featured_media !== 0 && post._embedded &&
                            <figure className="featured-image" dangerouslySetInnerHTML={featuredImage(post._embedded['wp:featuredmedia'][0])}></figure>
                        }
                        <Link to={`/projects/${post.slug}`}><h2>{post.title.rendered}</h2></Link>
                        <div className="entry-content" dangerouslySetInnerHTML={{__html:post.excerpt.rendered}}></div>
                    </article>
                )}
         
       
        </>
    )
}

export default Projects
