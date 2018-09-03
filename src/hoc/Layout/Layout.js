import React, {Fragment} from 'react';
import Navbar from 'components/Navbar/Navbar';


const layout = (props) => {
    return (
        <Fragment>
            <Navbar/>
            <div className={'container'}>
                {props.children}
            </div>
        </Fragment>
    )
};

export default layout;