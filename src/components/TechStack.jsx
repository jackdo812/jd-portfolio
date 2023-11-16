import { useEffect, useRef, useState } from 'react';
import Isotope from 'isotope-layout';


function TechStack({TechStack}) {
    const gridRef = useRef(null);
    const isotopeRef = useRef(null);
    const [selectedCategory, setSelectedCategory] = useState('All');
  
    useEffect(() => {
      // Initialize Isotope once the component has mounted.
      isotopeRef.current = new Isotope(gridRef.current, {
        itemSelector: '.element-item', // Change this to match your item's CSS selector.    
        layoutMode: 'fitRows', // Can choose a different layout mode if needed.
      });
    }, []);
  
    const filterItems = (filter, category) => {
      setSelectedCategory(category);
      isotopeRef.current.arrange({ filter });
    };
    
    const uniqueSkillCategories = new Set();

    return (
      <section className='Techstack-section'>
        <div className='Techstack-categories bg-leaf rounded-t-xl shadow-md'>
          <ul className='flex flex-wrap py-2'>
            {/* Manually add All to the categories list of Techstack */}
            <li className={`filter-category font-bold m-2 bg-forest text-foggy py-1 px-2 rounded shadow-[0_1px_6px_0] shadow-foggy w-fit cursor-pointer ${selectedCategory === 'All' ? 'check' : ''}`} onClick={() => filterItems('*', 'All')}>All</li>
            {TechStack.map((item, index) => {
                // Check if the category is not already in the set
                if (!uniqueSkillCategories.has(item.skill_categories.trim())) {
                    // Add the category to the set to mark it as seen
                    uniqueSkillCategories.add(item.skill_categories.trim());
            return (
                <li key={index} className={`filter-category font-bold m-2 bg-forest text-foggy py-1 px-2 rounded shadow-[0_1px_6px_0] shadow-foggy w-fit cursor-pointer ${selectedCategory === item.skill_categories.toLowerCase() ? 'check' : ''}`} onClick={() => filterItems(`.${item.skill_categories.toLowerCase()}`, item.skill_categories.toLowerCase())}>{item.skill_categories}</li>

            );
                }
                return null;
            })}
          </ul>
        </div>
        <ul className="Techstack-item grid bg-[#F8F9FA] rounded-b-xl shadow-md py-2 font-bold" ref={gridRef}>
            {TechStack
            .slice() // Create a copy of the array to avoid modifying the original
            .sort((a, b) => a.skills_name.localeCompare(b.skills_name)) // Sort alphabetically
            .map((item, index) => {
                return (
                    <li key={index} className={`element-item text-xl m-2 p-2 border bg-foggy rounded border-black shadow-md ${item.skill_categories.toLowerCase()}`}>{item.skills_name}</li>
                );
            })}
        </ul>
      </section>
    );
  }
  
  export default TechStack