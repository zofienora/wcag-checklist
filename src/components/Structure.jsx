import React, {useState} from 'react'
import Semantics from './structure/Semantics';
import Headings from './structure/Headings';
import Keyboard from './structure/Keyboard';
import Links from './structure/Links';
import Tabbing from './structure/Tabbing';


function Structure() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleContent = () => {
        setIsOpen(!isOpen);
    };

    return(
        <>
            < Semantics />
            <Headings />
            <Keyboard />
            <Links />
            <Tabbing />
        </>
    )
}


export default Structure;