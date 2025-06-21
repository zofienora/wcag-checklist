import Labels from "./interactions/Labels";


function Interactions() {
    return(
        <>
            <div className="container">
                <div className="container__structure">
                    <div className="head">
                        <h2>Forms & Interactions</h2>
                        <p>This section ensures that users — especially those using screen readers or keyboards — can understand and interact with forms and UI elements effectively.</p>
                    </div>
                </div>
            </div>
            <Labels />
        </>
    )
}

export default Interactions;