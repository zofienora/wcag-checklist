import React, {useState} from 'react'



function Validation() {
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
                        <p>Form Validation and Guidance</p>
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
                        <p>Users must receive clear, accessible feedback when they enter incorrect or missing information.</p>
                        <p><strong>Details:</strong></p>
                        <ul>
                            <li>Provide real-time error messages near the relevant field.</li>
                            <li>Use ARIA roles like aria-invalid and aria-describedby to tie inputs to help/error text.</li>
                            <li>Keep error messages polite, specific, and actionable.</li>
                            <li>Move focus to the error summary or invalid field if appropriate.</li>
                        </ul>
                        <p><strong>Why it matters:</strong></p>
                        <p>Proper guidance helps users complete forms successfully, especially for those with cognitive, visual, or language processing difficulties.</p>                    </div>
                    )}
                </div>
        </section>
        </>
    )
};

export default Validation;