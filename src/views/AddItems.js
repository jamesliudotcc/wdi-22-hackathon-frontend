import React, { Component } from 'react'

export default class AddItems extends Component {
    render() {
        return (
        <div>
            <h1>Create a form to add items</h1>
            <form>
                <div className="form-control">
                    <label name="itemName">Item Name</label>
                    <input type="text" name="itemName" onChange={this.storeInput} /*value={this.props.itemName}*/ />
                </div>
                <div className="form-control">
                    <label name="user">For:</label>
                    <input type="text" name="user" onChange={this.storeInput} value={this.props.user} />
                </div>
                <div></div>
                <div className="form-control">
                    <input type="submit" value="Add Item" />
                </div>
            
            </form>
        </div>
        )
    }
}
