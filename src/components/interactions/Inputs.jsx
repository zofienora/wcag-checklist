import React, {useState} from 'react'



function Inputs() {
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
                        <p>Keyboard-Accessible Inputs and Custom Controls</p>
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
                        <p>All form elements and custom UI components must be fully operable using a keyboard.</p>
                        <p><strong>Details:</strong></p>
                        <ul>
                            <li>Use standard HTML inputs and buttons when possible.</li>
                            <li>For custom components (e.g., dropdowns, sliders), ensure keyboard interaction (Tab, Enter, Arrow keys) is supported.</li>
                            <li>Provide visible focus states using CSS (:focus).</li>
                        </ul>
                        <p><strong>Why it matters:</strong></p>
                        <p>Users who cannot use a mouse rely on the keyboard to fill out forms and interact with the page.</p>                    </div>
                    )}
                </div>
        </section>
        </>
    )
};

export default Inputs;