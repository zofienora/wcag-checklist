import Labels from "./interactions/Labels";
import Grouping from "./interactions/Grouping";
import Inputs from "./interactions/Inputs";
import Descriptive from "./interactions/Descriptive";
import Validation from "./interactions/Validation";


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
            <Grouping />
            <Inputs />
            <Descriptive />
            <Validation />
        </>
    )
}

export default Interactions;