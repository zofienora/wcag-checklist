import React, {useState} from 'react'



function ConfirmationMessages() {
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
                        <p>Confirmation Messages</p>
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
                        <p>After successful actions (like submitting a form, saving changes, or completing a purchase), show clear confirmation that the action was completed.</p>
                        <p><strong>Details:</strong></p>
                        <ul>
                            <li>Use a visible success message (e.g., “Your profile was updated successfully.”).</li>
                            <li>Optionally, include an ARIA live region to announce the message.</li>
                            <li>Keep messages specific to the user’s action and next steps, if needed.</li>
                        </ul>
                        <p><strong>Why it matters:</strong></p>
                        <p>Feedback reassures users that their action worked, preventing confusion or repeated attempts.</p>
                    </div>
                    )}
                </div>
        </section>
        </>
    )
};

export default ConfirmationMessages;