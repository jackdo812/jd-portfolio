import { useEffect, useRef } from 'react';
import Isotope from 'isotope-layout';


function TechStack(data) {
    const gridRef = useRef(null);
    const isotopeRef = useRef(null);
  
    useEffect(() => {
      // Initialize Isotope once the component has mounted.
      isotopeRef.current = new Isotope(gridRef.current, {
        itemSelector: '.element-item', // Change this to match your item's CSS selector.
        layoutMode: 'fitRows', // You can choose a different layout mode if needed.
      });
    }, []);
  
    const filterItems = (filter) => {
      isotopeRef.current.arrange({ filter });
    };
  
    return (
      <section className='Techstack-section'>
        
        <div>
          <button className='border mr-2 bg-slate-400' onClick={() => filterItems('.dev')}>Development</button>
          <button className='border mr-2 bg-slate-400' onClick={() => filterItems('.design')}>Filter Alkali or Alkaline-Earth</button>
          <button className='border mr-2 bg-slate-400' onClick={() => filterItems('.marketing')}>Filter Metal and Transition</button>
          <button className='border mr-2 bg-slate-400' onClick={() => filterItems('*')}>All</button>
        </div>
        <div className="grid" ref={gridRef}>
          <div className="element-item pr-2 dev">HTML</div>
          <div className="element-item pr-2 dev">CSS</div>
          <div className="element-item pr-2 dev">Sass</div>
          <div className="element-item pr-2 design">Figma</div>
          <div className="element-item pr-2 design">Adobe XD</div>
          <div className="element-item pr-2 marketing">SEO</div>
          <div className="element-item pr-2 dev">JavaScript</div>
          {/* Add more items as needed. */}
        </div>
  
       
      </section>
    );
  }
  
  export default TechStack