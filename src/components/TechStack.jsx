import { useEffect, useRef } from 'react';
import Isotope from 'isotope-layout';


function TechStack({TechStack}) {
    const gridRef = useRef(null);
    const isotopeRef = useRef(null);
  
    useEffect(() => {
      // Initialize Isotope once the component has mounted.
      isotopeRef.current = new Isotope(gridRef.current, {
        itemSelector: '.element-item', // Change this to match your item's CSS selector.    
        layoutMode: 'fitRows', // Can choose a different layout mode if needed.
      });
    }, []);
  
    const filterItems = (filter) => {
      isotopeRef.current.arrange({ filter });
    };
    
    const uniqueSkillCategories = new Set();

    return (
      <section className='Techstack-section'>
        <div className='Techstack-categories'>
        {/* Manually add All to the categories list of Techstack */}
        <button className='border mr-2 bg-slate-400' onClick={() => filterItems('*')}>All</button>
         {TechStack.map((item, index) => {
             // Check if the category is not already in the set
            if (!uniqueSkillCategories.has(item.skill_categories.trim())) {
                // Add the category to the set to mark it as seen
                uniqueSkillCategories.add(item.skill_categories.trim());
         return (
            <button key={index} className='border mr-2 bg-slate-400' onClick={() => filterItems(`.${item.skill_categories.toLowerCase()}`)}>{item.skill_categories}</button>

         );
            }
            return null;
        })}
            
        </div>
        <div className="Techstack-item grid" ref={gridRef}>
        {TechStack
        .slice() // Create a copy of the array to avoid modifying the original
        .sort((a, b) => a.skills_name.localeCompare(b.skills_name)) // Sort alphabetically
        .map((item, index) => {
            return (
                <div key={index} className={`element-item mr-2 border bg-green-300 ${item.skill_categories.toLowerCase()}`}>{item.skills_name}</div>
            );
        })}
        </div>
      </section>
    );
  }
  
  export default TechStack