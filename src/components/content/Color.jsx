import React, {useState} from 'react'


function Color() {
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
                        <p>Color Contrast</p>
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
                        <p>Ensure that text and key visual elements have enough contrast against their background.</p>
                        <ul>
                            <li>Use a contrast ratio of at least 4.5:1 for normal text.</li>
                            <li>Use at least 3:1 for large text (18pt+, or bold 14pt+).</li>
                            <li>Test contrast with tools like WebAIM Contrast Checker.</li>
                        </ul>
                        <p>People with low vision or color blindness need strong contrast to read and understand content clearly.</p>
                    </div>
                    )}
                </div>
        </section>
        
        </>
    )
};

export default Color;