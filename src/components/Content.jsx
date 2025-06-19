import Color from './content/Color';
import ColorUse from './content/ColorUse';
import Font from './content/Font';
import Layout from './content/Layout';
import Text from './content/Text';
import Video from './content/Video';


function Content() {
    return (
        <>
            <div className="container">
                    <div className="container__structure">
                        <div className="head">
                            <h2>Perceivable Content (Text, Color, Media)</h2>
                            <p>This covers: color contrast, alt text, captions, color usage, font readability, and responsive layout.</p>
                        </div>
                    </div>
            </div>
            <Color />
            <ColorUse />
            <Font />
            <Layout />
            <Text />
            <Video />
        </>
    )
}

export default Content;