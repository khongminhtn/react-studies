import React from 'react';
import ReactDOM from 'react-dom';
import { Menu } from './menu/script';
import { Tooltip } from './tooltip/script';
import { TimeWarrper} from './timer/script';

ReactDOM.render(
    <Menu/>,
    document.getElementById("menu")
)

ReactDOM.render(
    <div>
        <Tooltip text="Author: Azat Mardan">React Quickly</Tooltip> is a book that teaches you how to use React
    </div>,
    document.getElementById("tooltip")
)

ReactDOM.render(
    <TimeWrapper/>,
    document.getElemmentByID('timer-app')
)