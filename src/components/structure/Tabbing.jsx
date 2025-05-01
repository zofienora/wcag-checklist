import React, {useState} from 'react'


function Tabbing() {
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
                        <p>Logical Tabbing</p>
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
                        <p>The tabbing order should follow the visual and structural layout of the page.</p>
                        <ul>
                            <li>Avoid altering focus order unless necessary.</li>
                            <li>Use <code>tabindex="0"</code> to add custom focusable elements.</li>
                            <li>Avoid <code>tabindex</code> values greater than 0 unless you manage focus carefully.</li>
                        </ul>
                        <p><strong>Why it matters:</strong></p>
                        <p>Unexpected tab order can confuse users, especially when navigating forms or interactive sections.</p>
                    </div>
                    )}
                </div>
        </section>
        
        </>
    )
};

export default Tabbing;