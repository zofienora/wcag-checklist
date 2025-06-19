import React, {useState} from 'react'


function ColorUse() {
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
                        <p>Meaningful Use of Color</p>
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
                        <p>Never rely on color alone to communicate information (e.g., “click the red button”).</p>
                        <ul>
                            <li>Always combine color with text, icons, or patterns.</li>
                            <li>Avoid instructions like “select the green option” unless backed with a label or icon.</li>
                            <li>Use colorblind-friendly palettes when possible.</li>
  
                        </ul>
                        <p>Users with color vision deficiency may not perceive color differences and miss important cues.</p>
                    </div>
                    )}
                </div>
        </section>
        
        </>
    )
};

export default ColorUse;