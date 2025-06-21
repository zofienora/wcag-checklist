import React, {useState} from 'react'



function Descriptive() {
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
                        <p>Descriptive Links and Button Text</p>
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
                        <p>Link and button text must clearly describe the action or destination.</p>
                        <p><strong>Details:</strong></p>
                        <ul>
                            <li>Avoid vague labels like “Click here” or “Submit.”</li>
                            <li>Use action-oriented and context-specific labels: “Download PDF,” “Create Account,” “Edit Profile.”</li>
                            <li>When using icons (e.g., trash bin for delete), add accessible labels using aria-label or hidden text.</li>
                        </ul>
                        <p><strong>Why it matters:</strong></p>
                        <p>Screen reader users need descriptive text to understand what an action does — and sighted users benefit from clarity too.</p>                    </div>
                    )}
                </div>
        </section>
        </>
    )
};

export default Descriptive;