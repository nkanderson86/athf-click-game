import React from "react";
import "./Title.css";

const Title = () => {
    return (
        <div className='container center-align'>
            <div className='section no-pad-bot'>
                <div className='container'>
                    <div className='row'>
                        <h2 className='header col s12 light'>Clicky Game!</h2>
                        <h5>Click on your favorite Aqua Teen Hunger Force characters to score points.  Click each character once! If you can do that twelve times without clicking on the same character twice, you win! </h5>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Title;
