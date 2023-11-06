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
        <div className='wrapper md:max-w-[1024px] md:my-0 md:mx-auto'>
                {pageData.title.rendered ?(
                  <h1 className='text-3xl font-bold font-roboto uppercase text-center pb-10 pt-16'>{pageData.title.rendered}</h1>
                  ) : (
                   <h1>Projects</h1>
                  )
                }
                {pageData.acf.project_page_description &&
                    <div className='text-center mb-14' dangerouslySetInnerHTML={{__html:pageData.acf.project_page_description}}></div>
                }
                
               {postsData ? 
               (
                 <div className='mb-16'>    
                 <ProjectCard postsData={postsData}/>
                </div>
                ) : (
                <p>There are no projects to display</p>
                )
                }
        </div>
    )
}

export default Projects
