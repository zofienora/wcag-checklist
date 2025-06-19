import React, {useState} from 'react'


function Layout() {
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
                        <p>Scalable Text and Responsive Layout</p>
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
                        <p>Design your site to support zooming, text resizing, and mobile-friendly layouts.</p>
                        <ul>
                            <li>Make sure users can zoom up to 200% without breaking the layout.</li>
                            <li>Use relative units (em, rem, %) instead of fixed px for text and containers.</li>
                            <li>Avoid horizontal scrolling and ensure layout adapts to screen sizes.</li>
                        </ul>
                        <p>Users with visual impairments or on mobile devices need flexible layouts and scalable text for comfortable reading.</p>
                    </div>
                    )}
                </div>
        </section>
        
        </>
    )
};

export default Layout;