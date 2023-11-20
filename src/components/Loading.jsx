import loading from '../assets/gifs/Loading-leaves.gif';
import loadingDarkMode from '../assets/gifs/Loading_darkmode.gif';
import { useSelector } from 'react-redux';

const Loading = () => {
    const isDarkMode = useSelector((state) => state.darkMode);
    return (
        <div className='absolute top-[25%] left-0 right-0'>
            {isDarkMode ?
            <img className="loading block my-0 mx-auto w-[256px] h-[256px] md:w-[512px] md:h-[512px]" src={loadingDarkMode} alt="Loading Animation" id="loading" />
            : 
            <img className="loading block my-0 mx-auto w-[256px] h-[256px] md:w-[512px] md:h-[512px]" src={loading} alt="Loading Animation" id="loading" />
            }
        </div>   
    )

}

export default Loading
