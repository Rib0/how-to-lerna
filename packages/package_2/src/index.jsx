import React from 'react';
import { render } from 'react-dom';
import { Component_1 } from '@how_to_lerna/package_1';

export const Component_2 = () => {

    return (
        <div>I am Component from package_2, hi <Component_1 /></div>
    )
};

render(<Component_2 />, document.getElementById('app'));