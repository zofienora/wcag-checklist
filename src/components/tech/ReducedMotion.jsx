import React, {useState} from 'react'



function ReducedMotion() {
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
                        <p>Reduced Motion Preference Handling</p>
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
                        <p>Respect users’ system preferences for reduced motion by disabling or simplifying animations when requested.</p>
                        <p><strong>Details:</strong></p>
                        <ul>
                            <li>Use the prefers-reduced-motion media query in your CSS:</li>
                            <pre>
                                <code>
                                    {`@media (prefers-reduced-motion: reduce) {
                                    * {
                                        animation: none !important;
                                        transition: none !important;
                                        scroll-behavior: auto !important;
                                    }
                                    }`}
                                </code>
                            </pre>
                            <li>Avoid automatic animations or motion that could cause discomfort.</li>
                        </ul>
                        <p><strong>Why it matters:</strong></p>
                        <p>Some users experience motion sickness, vertigo, or cognitive issues from animations. Respecting this setting creates a more inclusive experience.</p>
                    </div>
                    )}
                </div>
        </section>
        </>
    )
};

export default ReducedMotion;