import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Loading from '../components/Loading'
import ProjectCard from '../components/ProjectCard'

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
                
               {postsData ? (
                <ProjectCard postsData={postsData}/>
                ) : (
                <p>There are no projects to display</p>
                )}
               
              
         
       
        </>
    )
}

export default Projects
