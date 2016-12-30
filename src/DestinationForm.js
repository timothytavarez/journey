import React, { Component } from 'react';
import * as firebase from 'firebase';


class DestinationForm extends Component {
    
    constructor(props) {
        super(props);
        
        this.state = {
            name: '',
            imageURL: ''
        };
        this._handleForm = this._handleForm;
        this._handleSubmit = this._handleSubmit.bind(this);
        this.db = firebase.database();
        this.destRef = this.db.ref().child('destinations');
    }
    
    render() {
        return (
            <div className="Destination-container container">
                <div className="row">
                <form onSubmit={this._handleSubmit.bind(this, 'event')}>
                
                    <label>Destination Name</label>
                    <input className="u-full-width" type="text" 
                    value={this.state.name} onChange={this._handleForm.bind(this, 'name')}></input>
                    
                    <label>Destination Image</label>
                    <input className="u-full-width" type="text"
                    value={this.state.imageURL} onChange={this._handleForm.bind(this, 'imageURL')}></input>
                    
                    <button className="button-primary" type="submit">Add Destination</button>
                </form>
                </div>
            </div>
        );
    }
    
    _handleForm(name, event) {
        
        let formContents = {};
        formContents[name] = event.target.value;
        
        this.setState(formContents);
    }
    
    _handleSubmit(context, event) {
        
        this.destRef.push({
            destination: this.state.name,
            imageURL: this.state.imageURL
        });

        event.preventDefault();
        
        this.setState({
            name: '',
            imageURL: ''
        });
        
    }

}

export default DestinationForm;