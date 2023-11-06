import loading from '../assets/gifs/Loading-leaves.gif';

const Loading = () => {
    
    return (
        <div className='absolute top-[40%] left-0 right-0'>
            <img className="loading block my-0 mx-auto w-[256px] h-[256px] md:w-[512px] md:h-[512px]" src={loading} alt="Loading" id="loading" />
        </div>   
    )

}

export default Loading
