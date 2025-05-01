import React, {useState} from 'react'




function Links() {
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
                        <p>Skip Links</p>
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
                        <p>Provide a hidden "Skip to main content" link at the top of the page that becomes visible when focused.</p>
                        <p><strong>Example:</strong></p>
                        <pre>
                            <code>
                            {`<a href="#main-content" class="skip-link">Skip to main content</a>\n<main id="main-content"> ... </main>`}
                            </code>
                        </pre>
                        <p><strong>Why it matters:</strong></p>
                        <p>This helps keyboard users bypass repetitive menus and jump straight to the page’s primary content.</p>
                    </div>
                    )}
                </div>
        </section>
        
        </>
    )
};

export default Links;