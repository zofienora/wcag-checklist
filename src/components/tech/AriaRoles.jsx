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
                        <p>ARIA Roles and Attributes</p>
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
                        <p>Use ARIA (Accessible Rich Internet Applications) attributes to enhance accessibility when native HTML elements aren’t enough.</p>
                        <p><strong>Details:</strong></p>
                        <ul>
                            <li>Use ARIA roles like <code>role="dialog"</code>, <code>role="alert"</code>, or <code>role="button"</code> for custom components.</li>
                            <li>Use attributes like aria-label, aria-labelledby, aria-hidden, and aria-expanded to give context to screen readers.</li>
                            <li>Only use ARIA when necessary — prefer native HTML wherever possible.</li>
                        </ul>
                        <p><strong>Why it matters:</strong></p>
                        <p>ARIA allows assistive technologies to understand the purpose and state of non-standard components (e.g., custom dropdowns or modals).</p>
                    </div>
                    )}
                </div>
        </section>
        </>
    )
};

export default AriaRoles;