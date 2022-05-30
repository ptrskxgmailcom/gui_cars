import React, {Component} from "react";
// import Car from "./Car";
import {useParams} from "react-router-dom";

function withParams(Component) {
    return props => <Component {...props} params={useParams()} />;
}

class DetailsPage extends Component {

    constructor(props) {
        super(props);
        this.state = {}
        this.handleChangeBrand = this.handleChangeBrand.bind(this);
        this.handleChangeModel = this.handleChangeModel.bind(this);
        this.handleChangeColor = this.handleChangeColor.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
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
                method: 'PUT',
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
    }

    componentDidMount() {
        let {id} = this.props.params;
        this.fetchData(id);
        console.log("component did mount" + id);
    }

    // shouldComponentUpdate(nextProps) {
    //     let {id}  = nextProps.params;
    //     alert(this.props.params.id + " " + nextProps.params.id);
    //     if(this.props.params.id !== nextProps.params.id){
    //         this.fetchData(id);
    //         alert("shouldUpdate")
    //         return true;
    //     } else return false;
    //     // console.log("component did update " + id);
    // }

    componentDidUpdate(prevProps){
        if (this.props.params.id !== prevProps.params.id) {
            this.fetchData(this.props.params.id);
        }
    }



    fetchData = id => {
        // ...
        fetch('https://cars-t3.herokuapp.com/cars/' + id.toString())
            .then(response => response.json())
            .then(data => {
                    // alert("fetchData "+ data);
                    this.setState({brand: data.brand, model: data.model, color: data.color, id: data.id});
                }
            );
    };

    render() {
        return (
            <div>
                <h2>brand: {this.state.brand}</h2>
                <h2>model: {this.state.model}</h2>
                <h2>color: {this.state.color}</h2>

                <form onSubmit={this.handleSubmit}>
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
                <input type="submit" value="Update"/>
            </form>
            </div>
        );
    }
}

export default withParams(DetailsPage);