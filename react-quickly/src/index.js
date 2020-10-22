import React from 'react';
import ReactDOM from 'react-dom';
import { Menu } from './menu/script';
import { Tooltip } from './tooltip/script'

ReactDOM.render(
    <Menu />,
    document.getElementById("menu")
)

ReactDOM.render(
    <div>
        <Tooltip text="Text to be displayed in tooltip">React Quickly</Tooltip> is a book that teaches you how to use React
    </div>,
    document.getElementById("tooltip")
)