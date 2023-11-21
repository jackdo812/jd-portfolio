import { useEffect } from "react";
import { Link } from "react-router-dom";

const PageNotFound = () => {
 

  return (

      <section className="page-not-found-section flex flex-col justify-center items-center content-center flex-wrap mt-[7rem] breakpoint-small:mt-[2rem] text-xl">
        <h2 className="mt-4">404 ... </h2>
        <p>Page not found.</p>
        <p>
          Go to <Link to="/" className="underline tablet-b:hover:text-bright-orange transition duration-500">Home</Link> page.
        </p>
      </section>
  
  );
};

export default PageNotFound;
