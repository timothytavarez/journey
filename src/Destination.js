import React, { Component } from 'react';
import * as firebase from 'firebase';

class Destination extends Component {
    
    constructor() {
        super();
        
        this.state = {
            destinations: []
        };
        this.db = firebase.database();
        this.destRef = this.db.ref().child('destinations');
    }
    
    render() {
        
        return (
            <div>
            {this.showDestinations}
            </div> 
        );
    }
    
    componentDidMount() {
        
        this.destRef.on('value', (snap) => {
            let obj = snap.val(),
                objArr = [];
            
            for (let element in obj) {
                objArr.push(obj[element]);
            }
            
            this.setState({
                destinations: objArr
            });
        })
        .then((start) => {
                this.displayImage();
            });
        
 
    }
    
    displayImage() {
        
        console.log(`displayImage method`);
        this.state.destinations.forEach((element) => {
            console.log(element);
        });
    }
    
    showDestinations() {
        let mapped = this.state.destinations.map((element) => {
            return <ul>{element}</ul>;
        });
        
        return (<li className="six columns">{mapped}</li>);
    }
    
    
}

export default Destination;