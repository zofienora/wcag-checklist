import React, {useState} from 'react'



function AriaRoles() {
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
                        <p>Announcements of Errors/Success States</p>
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
                        <p>When the page updates due to errors or successful actions, the changes should be announced to assistive technologies.</p>
                        <p><strong>Details:</strong></p>
                        <ul>
                            <li>Use ARIA live regions or <code>role="alert"</code> for error messages.</li>
                            <li>Visually display messages near the affected fields.</li>
                            <li>Ensure messages are readable by screen readers without needing extra keyboard navigation.</li>
                        </ul>
                        <p><strong>Why it matters:</strong></p>
                        <p>Users with disabilities need to be notified of errors or changes immediately and without having to search for them.</p>
                    </div>
                    )}
                </div>
        </section>
        </>
    )
};

export default AriaRoles;