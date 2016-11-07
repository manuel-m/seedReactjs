import * as React from 'react';

export interface CompAProps { para1: string; para2: string; }

export class CompA extends React.Component<CompAProps, {}> {
    render() {
        return <h1>CompA p1: {this.props.para1} p2: {this.props.para2}!</h1>;
    }
}