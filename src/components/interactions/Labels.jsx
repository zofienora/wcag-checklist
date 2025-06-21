import React, {useState} from 'react'



function Labels() {
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
                        <p>Form Labels and Instructions</p>
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
                        <p>Every form input must have a clear and properly associated label.</p>
                        <p><strong>Details:</strong></p>
                        <ul>
                            <li>Use the <code>&lt;label&gt;</code> element and associate it with an input via the for attribute (htmlFor in React).</li>
                            <li>Place instructions near the fields they relate to.</li>
                            <li>Don’t rely on placeholder text as a substitute for labels — placeholders disappear when the user types.</li>
                        </ul>
                        <p><strong>Why it matters:</strong></p>
                        <p>Screen readers need labels to describe the purpose of inputs. Clear labels reduce errors and confusion for all users.</p>
                    </div>
                    )}
                </div>
        </section>
        </>
    )
};

export default Labels;