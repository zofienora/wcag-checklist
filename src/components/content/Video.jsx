import React, {useState} from 'react'


function Video() {
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
                        <p>Video Captions / Audio Transcripts</p>
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
                        <p>Provide captions and transcripts for all media so users with hearing impairments can access the information.</p>
                        <ul>
                            <li>Use closed captions for videos.</li>
                            <li>Provide written transcripts for audio content.</li>
                            <li>For complex visuals, offer audio descriptions of the visual information.</li>
                            <li>People who are deaf or hard of hearing need equivalent alternatives to audio content.</li>
                        </ul>
                        <p>Screen readers let users jump between landmarks, making navigation much more efficient.</p>
                    </div>
                    )}
                </div>
        </section>
        
        </>
    )
};

export default Video;