// Router Components
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useEffect } from 'react';



import Header from "../components/Header";
import Footer from "../components/Footer";
import Home from '../pages/Home'
import About from '../pages/About'
import Projects from '../pages/Projects'
import SingleProject from '../pages/SingleProject'
import Experiences from '../pages/Experiences'
import Connect from '../pages/Connect'
import Loading from '../components/Loading'
import WindowScrollToTop from '../utilities/WindowScrollToTop'


// TanQuery Components
import {useQuery} from '@tanstack/react-query';
import {getPage} from '../api/fetchData';

function AppRouter() {
  
  const restBase = 'https://jackthecoder.com/zxbpsrwen/wp-json/wp/v2/'

  const { isPending: mediaPending, error: medieError, data: mediaData } = useQuery({
    queryKey: ['mediaSourceData'],
    queryFn: () => getPage(178)
  })

  const { isPending: connectPending, error: connectError, data: connectData } = useQuery({
    queryKey: ['connectData'],
    queryFn: () => getPage(30)
  })

  if (connectPending) return<Loading />
  if (connectError) return 'An error has occurred: ' + connectError.message

  
  if (mediaPending) return <Loading />; 
  if (medieError) return 'An error has occurred: ' + medieError.message
  
  
  const featuredImage = ( featuredImageObject ) => {
    let imgWidth = featuredImageObject.media_details.sizes.full.width;
    let imgHeight = featuredImageObject.media_details.sizes.full.height;
    let imgURL = featuredImageObject.source_url;
    let img = `<img src="${imgURL}" 
        width="${imgWidth}"
        height="${imgHeight}"
        alt="${featuredImageObject.alt_text}"
        srcset="${imgURL} ${imgWidth}w,
        ${featuredImageObject.media_details.sizes.full ? featuredImageObject.media_details.sizes.full.source_url + ' 1024w,' : ''}
        ${featuredImageObject.media_details.sizes.medium_large ? featuredImageObject.media_details.sizes.medium_large.source_url + ' 768w,' : ''}
        ${featuredImageObject.media_details.sizes.medium ? featuredImageObject.media_details.sizes.medium.source_url + ' 300w' : ''}"
        sizes="(max-width: ${imgWidth}) 100vw, ${imgWidth}px">`;
    return {__html: img}
  }

 

  return (
    <BrowserRouter basename="/">
      <WindowScrollToTop />
        <div className="wrapper font-lato bg-foggybg text-forest">
          <Header mediaData={mediaData.acf} connectData={connectData.acf}/>
          
            <main id="main" className="mx-2">
              <Routes>
                <Route path='/' element={<Home restBase={restBase} />} />
                <Route path='/about' element={<About restBase={restBase} />} />
                <Route path='/projects' element={<Projects restBase={restBase} featuredImage={featuredImage} />} />
                <Route path='/projects/:slug' element={<SingleProject restBase={restBase} />} />
                <Route path='/experiences' element={<Experiences restBase={restBase} />} />
                <Route path='/connect' element={<Connect restBase={restBase} />} />
              </Routes>
            </main>
         
          <Footer />
        </div>
    </BrowserRouter>
  )
}

export default AppRouter
