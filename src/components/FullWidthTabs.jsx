import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

function FullWidthTabs ({dataACF}) {
  console.log(dataACF);
    return (
  <Tabs className={'mt-4 shadow-[0_0_4px_1px_rgba(128,128,128,1)] rounded-[10px]'}>
    <TabList>
      <Tab>{dataACF.project_details_heading_1}</Tab>
      <Tab>{dataACF.project_details_heading_2}</Tab>
      <Tab>{dataACF.project_details_heading_3}</Tab>
    </TabList>

    <TabPanel>
      <div dangerouslySetInnerHTML={{__html:dataACF.project_details_content_1}}></div>
    </TabPanel>
    <TabPanel>
    <div dangerouslySetInnerHTML={{__html:dataACF.project_details_content_2}}></div>
    </TabPanel>
    <TabPanel>
    <div dangerouslySetInnerHTML={{__html:dataACF.project_details_content_3}}></div>
    </TabPanel>
  </Tabs>
);
    }

export default FullWidthTabs 