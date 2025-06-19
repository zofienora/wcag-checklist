import React, {useState} from 'react'


function Text() {
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
                        <p>Alt Text for Images</p>
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
                        <p>All meaningful images must have descriptive alt attributes so screen readers can describe them to users.</p>
                        <ul>
                            <li>Describe the purpose or content of the image clearly and briefly.</li>
                            <li>Use alt="" for decorative images, or hide them from assistive tech with aria-hidden="true".</li>
                            <li>Any icons with functional meaning (like a warning or success icon) must be labeled.</li>
                          
                        </ul>
                        <p>Screen reader users rely on alt text to understand visual content that they cannot see.</p>
                    </div>
                    )}
                </div>
        </section>
        
        </>
    )
};

export default Text;