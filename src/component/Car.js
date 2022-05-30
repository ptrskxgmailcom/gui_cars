import React, {Component} from "react";
import {Link} from "react-router-dom";


class Car extends Component {

    render () {
        return (
            <div>
                <table>
                    <colgroup span="4"></colgroup>
                    <tbody>
                        <tr>
                            <td>{this.props.info.id}</td>
                            <td>{this.props.info.brand}</td>
                            <td>{this.props.info.model}</td>
                            <td>{this.props.info.color}</td>
                            {/*<p>{this.props.info.links[0].href}</p>*/}
                            <button type="button" onClick={() => this.props.onClick('remove')} value={this.props.info.id}>
                                Remove
                            </button>
                            <Link to={`/getCarById/${this.props.info.id}`}>
                                <button type="button" onClick={() => this.props.onClick('edit')} value={this.props.info.id}>
                                    Edit
                                </button>
                            </Link>
                        </tr>
                    </tbody>
                </table>

            </div>
        )
    }

}

export default Car;