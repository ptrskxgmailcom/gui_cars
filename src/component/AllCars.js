import React, {Component} from "react";
import Car from "./Car";

class AllCars extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    state = {
        data: { "Links": [], "content": [] }
        // name: "Piotor"
    }

    componentDidMount() {
        fetch('https://cars-t3.herokuapp.com/cars')
            .then( response => response.json() )
            .then( data => {
                    // console.log(data);
                    this.setState( { data });
                }
            );
    }

    componentWillUnmount() {
        // usuwanie obiektów
    }

    handleClick(id, a){
        switch (a) {
            case 'remove':
                // alert('Click 1'+ a + ' id ' + id);
                fetch('https://cars-t3.herokuapp.com/cars/' + id, {
                    method: 'DELETE',
                    headers: {
                        'Accept': 'application/json'
                    }
                });

                fetch('https://cars-t3.herokuapp.com/cars')
                    .then(response => response.json())
                    .then(data => {
                            // console.log(data);
                            this.setState({data});
                        }
                    );
                window.location.reload(false);
            break;
            case 'edit':
                // preskocz do DetailsPage.js
                // alert('Click 2' + a + ' id ' + id);
                break;
            default: break;
        }
    }


    render() {
        return (
            <div>
                {/*hello {this.state.name}*/}
                <p> --------- Lista Car-ów --------- </p>
                { this.state.data.content.map( (car) =>
                    <Car key={car.id.toString()} info={car} onClick={(a) => this.handleClick(car.id, a)}/>
                )
                }
            </div>

        );
    }
}

export default AllCars;