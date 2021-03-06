import React, {Component} from "react";
import PageOne from "./PageOne";
import PageTwo from "./PageTwo";


export default class extends Component{
    constructor(props) {
        super(props);
        this.state = {
            placeId: null,
            markers: [],
            mapPage: false
        }
    }

    goBack = (placeId) => {
        this.setState({mapPage: !this.state.mapPage})
    }

    addMarker = (marker) => {
        var markers = this.state.markers;
        var newMarker = markers.push(marker)
        console.log("newMarker", newMarker, markers)
        this.setState({markers: [...markers, marker]})
        console.log('Added')
    }

    render() {
        return (
            <div>
                {
                    !this.state.mapPage ?
                        <PageTwo
                            addMarker={this.addMarker}
                            goBack={this.goBack}/>
                        : <PageOne that={this} markers={this.state.markers} nextPage={this.goBack}/>
                }
            </div>
        )
    }

}