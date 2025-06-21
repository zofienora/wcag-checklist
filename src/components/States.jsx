import Messages from "./states/Messages";

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

        </>
    )
}

export default States;