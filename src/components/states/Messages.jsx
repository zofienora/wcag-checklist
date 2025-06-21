import React, {useState} from 'react'



function Messages() {
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
                        <p>Real-Time Validation Messages</p>
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
                        <p>Display helpful error or guidance messages as users interact with form fields, rather than only after submission.</p>
                        <p><strong>Details:</strong></p>
                        <ul>
                            <li>Validate inputs as users type or leave a field (on blur).</li>
                            <li>Place validation messages directly near the related input.</li>
                            <li>Use clear, specific wording like “Password must be at least 8 characters” instead of just “Invalid input.”</li>
                        </ul>
                        <p><strong>Why it matters:</strong></p>
                        <p>Early feedback reduces confusion and helps users correct errors before form submission — especially important for users with cognitive or learning disabilities.</p>
                    </div>
                    )}
                </div>
        </section>
        </>
    )
};

export default Messages;