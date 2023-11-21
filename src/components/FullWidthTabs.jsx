import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { Fade } from "react-awesome-reveal";

function FullWidthTabs ({dataACF}) {
    const listProjectsDetails = dataACF.single_project_details;
    const listProjectsDetailsLength = listProjectsDetails.length;
    return (
      // Check if the Project Details are more than 1 which is good for the Tabs layout
      listProjectsDetailsLength > 1 ? (
        <Tabs className={`text-forest mt-4 shadow-[0_0_4px_1px_rgba(128,128,128,1)] rounded-[10px]`}>
          {/* Output the project detail headings */}
          <TabList className={`text-foggy font-bold rounded-t-[10px] bg-leaf flex text-center ${listProjectsDetailsLength === 3 && 'text-[0.8rem] min-[400px]:text-[1rem] md:text-[1.1rem]'}`}> 
            {listProjectsDetails.map((item, index) => {
                return (
                    <Tab className={`${listProjectsDetailsLength === 2 ? 'w-[50%]' : 'w-[33.3%]'} cursor-pointer p-2`} selectedClassName={`${listProjectsDetailsLength === 2 ? 'w-[50%]' : 'w-[33.4%]'} bg-foggy text-forest font-bold underline rounded-t-[7px] decoration-soil decoration-4 underline-offset-4`} key={index}>{item.single_project_details_heading}</Tab>
                );
            })}
          </TabList>
          {/* Output the project detail content */}
          {listProjectsDetails.map((item, index) => {
              return (
                  <TabPanel key={index}>
                      <Fade>
                      <div dangerouslySetInnerHTML={{__html:item.single_project_details_content}}></div>
                      </Fade>
                  </TabPanel>
              );
          })}
          
        </Tabs>
      ) : (
        // If the Project Details list is 1, then display the content without the Tabs layout
        listProjectsDetails.map((item, index) => {
            return (
              <div className='bg-foggy rounded mt-4 shadow-[0_0_4px_1px_gray] py-2'>
                <Fade>
                  <h3 className='font-bold text-[1.2rem] pt-1 pb-3 text-forest my-2 mx-4 border-b-2'>{item.single_project_details_heading}</h3>
                 <div className='single-project-details-content text-forest my-2 mx-4 ' dangerouslySetInnerHTML={{__html:item.single_project_details_content}}></div>
                </Fade>
              </div>
            )
        })
      )   
  );
}

export default FullWidthTabs 