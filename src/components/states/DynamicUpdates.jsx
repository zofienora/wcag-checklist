import React, {useState} from 'react'



function DynamicUpdates() {
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
                        <p>ARIA Live Regions for Dynamic Updates</p>
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
                        <p>Use ARIA live regions to announce content changes that happen without a page reload (e.g., adding items to a cart, submitting a form).</p>
                        <p><strong>Details:</strong></p>
                        <ul>
                            <li>Use <code>aria-live="polite"</code> or <code>aria-live="assertive"</code> on elements that update dynamically.</li>
                            <li>Keep announcements short and meaningful.</li>
                            <li>Do not use ARIA live regions for static content.</li>
                        </ul>
                        <p><strong>Why it matters:</strong></p>
                        <p>Screen reader users may miss dynamic updates if they are not programmatically announced.</p>
                    </div>
                    )}
                </div>
        </section>
        </>
    )
};

export default DynamicUpdates;