import React from 'react';
import axios from 'axios';
import Menu from './Menu';

class ListCV extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        };
    }

    componentDidMount() {
        axios.get(`${this.props.uri_back}/cv`)
            .then((res) => {
                console.log(res.data);
                this.setState({ data: res.data });
            });
    }

    render() {
        return (
            <div>
                <Menu active="home" />
                <div style={{ marginTop: '100px', width: '100%' }} className="container">
                    <input type="text" className="form-control w-25 mt-5" placeholder="Rechercher" />
                    <table className="table shadow mt-4">
                        <thead className="thead-dark">
                            <tr>
                                <th>{'oid'}</th>
                                <th scope="col">{'Nom et prenoms'}</th>
                                <th scope="col">&nbsp;</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.data.map((v) => (
                                    <tr>
                                        <td>{v._id}</td>
                                        <td>{v.basics.name}</td>
                                        <td>
                                            <a href={`/cv/${v._id}`} rel="noopener noreferrer" target="_blank" className="btn btn-success">{'Voir'}</a>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default ListCV;
