import React, { Component } from 'react'
import Grid from './Grid'

export class Main extends Component {
    constructor() {
        super()
        this.state = {
            row: 4,
            col: 4
        }
        this.addRow = this.addRow.bind(this)
        this.addColumn = this.addColumn.bind(this)
        this.removeRow = this.removeRow.bind(this)
        this.removeColumn = this.removeColumn.bind(this)
    }
    //add row by 1
    addRow() {
        this.setState(state => ({row: state.row + 1}))
    }
    //add column by 1
    addColumn() {
        this.setState(state => ({col: state.col + 1}))
    }
    //remove row by 1
    removeRow() {
        if (this.state.row > 0) {
            this.setState(state => ({row: state.row - 1}))
        }
    }
    //remove column by 1
    removeColumn() {
        if (this.state.col > 0) {
            this.setState(state => ({col: state.col - 1}))
        }
    }
    //buttons
    render() {
        return (
            <div id="main">
                <div>
                    <button onClick={this.addRow}>Add Row</button>
                    <button onClick={this.addColumn}>Add Column</button>
                    <button onClick={this.removeRow}>Remove Row</button>
                    <button onClick={this.removeColumn}>Remove Column</button>
                </div>
                <Grid row={this.state.row} col={this.state.col} />
            </div>
        )
    }
}
export default Main;