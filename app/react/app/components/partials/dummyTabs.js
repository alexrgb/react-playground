/**
 * Created by alexrgb on 21.06.17.
 */

'use strict';

import * as React from "react";

export default class DummyTabs extends React.Component {
    constructor() {
        super();

        this.state = {
            tabs: {},
            content: 'Content is coming...'
        }
    }

    render() {
        return (
            <div>
                <ul>
                    <li><a href="#" onClick={() => this.changeTab('dummyTable')}>DummyTable</a></li>
                    <li><a href="#" onClick={() => this.changeTab('dummyChart')}>DummyChart</a></li>
                    <li><a href="#" onClick={() => this.changeTab('dummyList')}>DummyList</a></li>
                </ul>
                <div>{this.state.content}</div>
            </div>);
    }

    changeTab(tab) {
        console.log( tab );
    }
}