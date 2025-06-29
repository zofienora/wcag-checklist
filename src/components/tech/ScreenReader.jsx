import React, {useState} from 'react'



function ScreenReader() {
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
                        <p>Screen Reader Testing</p>
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
                        <p>Test your site with screen readers to confirm that content is announced clearly and in the right order.</p>
                        <p><strong>Details:</strong></p>
                        <ul>
                            <li>Use tools like NVDA (Windows), VoiceOver (macOS/iOS), or TalkBack (Android).</li>
                            <li>Check that page structure, labels, buttons, and links are announced as expected.</li>
                            <li>Navigate using keyboard alone to simulate screen reader interaction.</li>
                        </ul>
                        <p><strong>Why it matters:</strong></p>
                        <p>Assistive tech users rely on screen readers for access. Testing helps uncover issues you won’t see in visual QA.</p>
                    </div>
                    )}
                </div>
        </section>
        </>
    )
};

export default ScreenReader;