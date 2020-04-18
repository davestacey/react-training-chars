import React from 'react';

const validation = (props) => {
    const lengthMessage = (length) => {
        if (length >= 5) {
            return 'Text Long enough';
        }
        return 'Text too short';
    };

    return <div>
        {lengthMessage(props.length)}
    </div>
};

export default validation;
