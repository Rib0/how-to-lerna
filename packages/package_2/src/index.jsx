import React from 'react';
import { render } from 'react-dom';

export const Component_2 = () => {

    return (
        <div>Iss am Component from package_2, hi</div>
    )
};

render(<Component_2 />, document.getElementById('app'));