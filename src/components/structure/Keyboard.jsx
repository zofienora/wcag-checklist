import React, {useState} from 'react'


function Keyboard() {
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
                        <p>Keyboard Navigation</p>
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
                        <p>All interactive elements must be operable using a keyboard (Tab, Enter, Space, Arrow keys, etc.).</p>
                        <ul>
                            <li>Users should be able to Tab through links, buttons, inputs, and custom components.</li>
                            <li>Use <code>:focus</code> styles to indicate which element is active.</li>
                            <li>Avoid disabling focus or hiding keyboard navigation with CSS.</li>
                        </ul>
                        <p><strong>Why it matters:</strong></p>
                        <p>Many users — including those with mobility or vision impairments — rely on the keyboard to navigate websites.</p>
                    </div>
                    )}
                </div>
        </section>
        
        </>
    )
};

export default Keyboard;