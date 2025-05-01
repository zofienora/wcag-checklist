import Semantics from './structure/Semantics';
import Headings from './structure/Headings';
import Keyboard from './structure/Keyboard';
import Links from './structure/Links';
import Tabbing from './structure/Tabbing';


function Structure() {

    return(
        <>
        <div className="container">
                <div className="container__structure">
                    <div className="head">
                        <h2>Structure & Navigation</h2>
                    </div>
                </div>
        </div>
        <Semantics />
        <Headings />
        <Keyboard />
        <Links />
        <Tabbing />
            
        </>
    )
}


export default Structure;