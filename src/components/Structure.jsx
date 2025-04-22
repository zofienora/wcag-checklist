import React, {useState} from 'react'



function Structure() {
    const [state,setState]=useState(false);
    console.log(state);
    const changeState=()=>{
        setState(!state);
    }




    return(
        <>
        <section className="structure">
            <div className="container">
                <div className="container__structure">
                    <div className="head">
                        <h2>Structure & Navigation</h2>
                    </div>
                    <div className="content">
                        <input className="checkbox" type="checkbox" id="checkbox" name="Dobe" />
                        <p>Semantic HTML</p>
                        <button onClick={changeState}>+</button>
                    </div>  
                    {state ?
                    <div className="toggle-content">
                        <p>Use HTML elements according to their intended purpose to give meaning to your content.
                        </p>
                        <p><strong>Examples:</strong></p>
                        <ul>
                            <li>Use <code>&lt;header&gt;</code>, <code>&lt;footer&gt;</code>, <code>&lt;main&gt;</code>, <code>&lt;article&gt;</code>, and <code>&lt;section&gt;</code> instead of generic <code>&lt;div&gt;</code> tags.</li>
                            <li>Use <code>&lt;button&gt;</code> for actions, not styled <code>&lt;div&gt;</code>s or <code>&lt;a&gt;</code> tags.</li>
                            <li>Use <code>&lt;nav&gt;</code> for navigation links, <code>&lt;ul&gt;</code> for lists, and other semantic elements where appropriate.</li>
                        </ul>
                        <p><strong>Why it matters:</strong></p>
                        <p>Screen readers and other assistive tools rely on semantics to interpret page structure and provide meaningful navigation to users.
                        </p>
                    </div>
                    : null}
                </div>
            </div>
        </section>
        </>
    )
}

export default Structure;