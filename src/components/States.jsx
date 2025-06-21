import Messages from "./states/Messages";
import DynamicUpdates from "./states/DynamicUpdates";
import ConfirmationMessages from "./states/ConfirmationMessages";
import FocusHandlings from "./states/FocusHandlings";

function States() {
    return (
        <>
        <div className="container">
            <div className="container__structure">
                <div className="head">
                    <h2>Feedback, States & Errors</h2>
                    <p>This category ensures that users — especially those using assistive technologies — receive clear, timely feedback when interacting with your site.</p>
                </div>
            </div>
        </div>
        <Messages />
        <DynamicUpdates />
        <ConfirmationMessages />
        <FocusHandlings />

        </>
    )
}

export default States;