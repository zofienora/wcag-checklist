import React, {useState} from 'react'


function Font() {
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
                        <p>Font Readability</p>
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
                        <p>Use fonts that are legible and easy to read, especially at smaller sizes.</p>
                        <ul>
                            <li>Use a clear, sans-serif font for body text.</li>
                            <li>Avoid decorative or script fonts for large amounts of content.</li>
                            <li>Maintain consistent line height (typically 1.5x font size) and spacing.</li>
                        </ul>
                        <p>Good typography improves readability for users with cognitive or visual impairments.</p>
                    </div>
                    )}
                </div>
        </section>
        
        </>
    )
};

export default Font;