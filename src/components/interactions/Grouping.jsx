import React, {useState} from 'react'



function Grouping() {
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
                        <p>Grouping Fields (e.g., Radio Buttons)</p>
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
                        <p>Related inputs (like radio buttons or checkboxes) should be grouped with semantic structure.</p>
                        <p><strong>Details:</strong></p>
                        <ul>
                            <li>Use <code>&lt;fieldset&gt;</code> and <code>&lt;legend&gt;</code>  to group and label related inputs.</li>
                            <li>PEach option within the group should have its own <code>&lt;label&gt;</code>.</li>
                            <li>Clearly describe the context of the group using the <code>&lt;legend&gt;</code>.</li>
                        </ul>
                        <p><strong>Why it matters:</strong></p>
                        <p>This helps screen reader users understand how options relate to each other and what the group is for.</p>                    </div>
                    )}
                </div>
        </section>
        </>
    )
};

export default Grouping;