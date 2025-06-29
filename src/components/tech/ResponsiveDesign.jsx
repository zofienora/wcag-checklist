import React, {useState} from 'react'



function ResponsiveDesign() {
    const [isOpen, setIsOpen] = useState(false);
    const toggleContent = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
         <section className="structure">
            <div className="container">
                    <div className="content">
                        <input
                            className="checkbox"
                            type="checkbox"
                            id="checkbox"
                            name="semantic-html"
                        />                        
                        <p>Responsive Design</p>
                        <button
                            className="toggle-btn"
                            onClick={toggleContent}
                            aria-expanded={isOpen}
                            aria-controls="toggle-content"
                        >
                            {isOpen ? '−' : '+'}
                        </button>
                    </div>  

                    {isOpen && (
                    <div 
                        id="toggle-content"
                        className="toggle-content"
                        role="region"
                        aria-labelledby="checkbox"
                    >
                        <p>Design your site to adapt to various screen sizes and orientations without breaking content or functionality.</p>
                        <p><strong>Details:</strong></p>
                        <ul>
                            <li>Use flexible layouts with CSS Grid or Flexbox.</li>
                            <li>Design mobile-first and scale up.</li>
                            <li>Ensure tap targets are large enough and elements don’t overlap.</li>
                        </ul>
                        <p><strong>Why it matters:</strong></p>
                        <p>Mobile and tablet users — including those with motor or vision impairments — need layouts that are readable, usable, and not crowded.</p>
                    </div>
                    )}
                </div>
        </section>
        </>
    )
};

export default ResponsiveDesign;