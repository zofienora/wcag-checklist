import React, {useState} from 'react'



function Support() {
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
                        <p>Support for Zooming (Up to 200%)</p>
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
                        <p>Your content should remain fully usable and readable when a user zooms in up to 200% (a WCAG requirement).</p>
                        <p><strong>Details:</strong></p>
                        <ul>
                            <li>Use relative units like em, rem, % for fonts and containers.</li>
                            <li>Avoid fixed widths that prevent scaling.</li>
                            <li>Don’t hide content or force horizontal scrolling when zoomed in.</li>
                        </ul>
                        <p><strong>Why it matters:</strong></p>
                        <p>Zoom helps users with low vision read and navigate content more comfortably. A layout that breaks on zoom becomes unusable.</p>
                    </div>
                    )}
                </div>
        </section>
        </>
    )
};

export default Support;