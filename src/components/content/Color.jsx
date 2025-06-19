import React, {useState} from 'react'


function Color() {
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
                        <p>Landmarks</p>
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
                        <p>Use HTML5 landmarks to define regions of the page for easier navigation by assistive technologies.</p>
                        <ul>
                            <li>&lt;header&gt;: Introductory content or navigation  </li>
                            <li>&lt;nav&gt;: Main navigation  </li>
                            <li>&lt;main&gt;: Core content of the document  </li>
                            <li>&lt;aside&gt;: Complementary content  </li>
                            <li>&lt;footer&gt;: Footer information  </li>
                        </ul>
                        <p>Screen readers let users jump between landmarks, making navigation much more efficient.</p>
                    </div>
                    )}
                </div>
        </section>
        
        </>
    )
};

export default Color;