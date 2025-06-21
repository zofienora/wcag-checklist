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
                        <p>Headings</p>
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
                        <p>Headings (<code>&lt;h1&gt;</code> to <code>&lt;h6&gt;</code>) should follow a logical and hierarchical structure, reflecting the content outline of the page.</p>
                        <p><strong>Examples:</strong></p>
                        <ul>
                            <li>Use only one <code>&lt;h1&gt;</code> per page (usually the page title).</li>
                            <li>Nest subsections correctly: <code>&lt;h2&gt;</code> &gt; <code>&lt;h3&gt;</code> &gt; <code>&lt;h4&gt;</code>, without skipping levels.</li>
                            <li>Don’t use headings for styling only — they should represent content structure.</li>
                        </ul>
                        <p><strong>Why it matters:</strong></p>
                        <p>Screen readers use headings to create an outline. A logical order improves comprehension and allows users to jump to relevant sections quickly.</p>
                    </div>
                    )}
                </div>
        </section>
        </>
    )
};

export default Labels;