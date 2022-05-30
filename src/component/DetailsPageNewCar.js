import React, {Component} from "react";

// import Car from "./Car";
// import {useParams} from "react-router-dom";

class DetailsPageNewCar extends Component {

    constructor(props) {
        super(props);
        this.state = {}
        this.handleChangeId = this.handleChangeId.bind(this);
        this.handleChangeBrand = this.handleChangeBrand.bind(this);
        this.handleChangeModel = this.handleChangeModel.bind(this);
        this.handleChangeColor = this.handleChangeColor.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChangeId(event){
        this.setState( {id: event.target.value } );
    }
    handleChangeBrand(event){
        this.setState( {brand: event.target.value } );
    }

    handleChangeModel(event){
        this.setState( {model: event.target.value } );
    }

    handleChangeColor(event){
        this.setState( {color: event.target.value } );
    }

    handleSubmit(event){
        // alert('A car was submitted: ' + this.state.brand);
        fetch('https://cars-t3.herokuapp.com/cars', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    id: this.state.id,
                    brand: this.state.brand,
                    model: this.state.model,
                    color: this.state.color
                })
        });
        event.preventDefault();
        this.props.history.push('/url')
    }

    componentDidMount() {
            // let {id} = this.props.params;

        this.setState({brand: null, model: null, color: null/*, id: null*/});
        console.log("component did mount");
    }

    componentDidUpdate(prevProps) {
        // let {id}  = this.props.params;
        //
        // if(this.props.params !== prevProps.params){
        //     this.fetchData(id);
        //     fetch('https://cars-t3.herokuapp.com/cars/' + id.toString() )
        //         .then( response => response.json() )
        //         .then( data => {
        //                 console.log(data);
        //                 this.setState( { data });
        //             }
        //         );
        // }

        console.log("component did update ");
    }


    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <p>
                        <label>
                            Id:
                            <input
                                name="id"
                                type="text"
                                id="id"
                                onChange={this.handleChangeId}
                                value={this.state.id}
                            />
                        </label>
                    </p>
                <p>
                    <label>
                        Brand:
                            <input
                                name="brand"
                                type="text"
                                id="brand"
                                onChange={this.handleChangeBrand}
                                value={this.state.brand}
                            />
                    </label>
                </p>
                <p>
                    <label>
                        Model:
                        <input
                            name="model"
                            type="text"
                            id="model"
                            onChange={this.handleChangeModel}
                            value={this.state.model}
                        />
                    </label>
                </p>
                <p>
                    <label>
                        Color
                        <input
                            name="color"
                            type="text"
                            id="color"
                            onChange={this.handleChangeColor}
                            value={this.state.color}
                        />
                    </label>
                </p>
                <input type="submit" value="Add"/>
            </form>
            </div>
        );
    }
}

export default DetailsPageNewCar;