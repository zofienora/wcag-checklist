import ScreenReader from './tech/ScreenReader';
import AriaRoles from './tech/AriaRoles';
import ResponsiveDesign from './tech/ResponsiveDesign';
import Support from './tech/Support';
import ReducedMotion from './tech/ReducedMotion';


function Tech() {
    return(
        <>
            <div className="container">
                <div className="container__structure">
                    <div className="head">
                        <h2>Assistive Tech & Responsive Support</h2>
                        <p>This category ensures your site works smoothly across screen readers, mobile devices, and user settings like zoom and reduced motion.</p>
                    </div>
                </div>
            </div>
            <ScreenReader />
            <AriaRoles />
            <ResponsiveDesign />
            <Support />
            <ReducedMotion />
        </>
    )
}

export default Tech;