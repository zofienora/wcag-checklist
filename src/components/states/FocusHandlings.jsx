import React, {useState} from 'react'



function FocusHandlings() {
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
                        <p>Proper Focus Handling in Modals/Popups</p>
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
                        <p>When a modal, dialog, or popup opens, keyboard focus should move inside it — and stay trapped until it’s closed.</p>
                        <p><strong>Details:</strong></p>
                        <ul>
                            <li>Move focus to the first interactive element inside the modal.</li>
                            <li>Trap focus inside the modal using JavaScript (Tab should loop).</li>
                            <li>Return focus to the triggering element when the modal closes.</li>
                        </ul>
                        <p><strong>Why it matters:</strong></p>
                        <p>Maintains context for keyboard and screen reader users. Without proper focus control, they may get “lost” behind or outside the dialog.</p>
                    </div>
                    )}
                </div>
        </section>
        </>
    )
};

export default FocusHandlings;