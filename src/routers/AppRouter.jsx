// Router Components
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from 'react';
import { useSelector } from 'react-redux'; // Import useSelector


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
  // Use useSelector to get the isDarkMode state from Redux store
  const isDarkMode = useSelector((state) => state.darkMode.isDarkMode);
  
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



  return (
    <BrowserRouter basename="/">
      <WindowScrollToTop />
        <div className={`wrapper font-lato ${isDarkMode ? 'bg-forest text-foggy': 'bg-foggybg text-forest'}  min-h-screen flex flex-col`}>
          <a href="#main" className="screen-reader-text">Skip to Main</a>
          <Header mediaData={mediaData.acf}/>
         
            <main id="main" className="mx-2 grow relative">
              {/* Fireflies effect */}
              <div className={`flying-animation w-12 h-12 rounded-full bg-sun animate-pulse absolute left-[10%] top-[25%] blur-lg ${isDarkMode ? 'opacity-70' : 'opacity-20'}`}></div>
              <div className={`flying-animation-2 w-8 h-8 rounded-full bg-sun animate-pulse absolute right-[10%] top-[35%] blur-lg ${isDarkMode ? 'opacity-70' : 'opacity-20'}`}></div>
              <Routes>
                <Route path='/' element={<Home restBase={restBase} />} />
                <Route path='/about' element={<About restBase={restBase} />} />
                <Route path='/projects' element={<Projects restBase={restBase} />} />
                <Route path='/projects/:slug' element={<SingleProject restBase={restBase} />} />
                <Route path='/experiences' element={<Experiences restBase={restBase} />} />
                <Route path='/connect' element={<Connect restBase={restBase} />} />
              </Routes>
            </main>
          
          <Footer connectData={connectData.acf} />
        </div>
    </BrowserRouter>
  )
}

export default AppRouter
