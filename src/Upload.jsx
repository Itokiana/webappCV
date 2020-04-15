import React from 'react';
import axios from 'axios';
import Menu from './Menu';

class Upload extends React.Component {
    constructor() {
        super();
        this.state = {
            data: 'No data',
            btnActive: false
        };
    }

    showFile = async (event) => {
        event.preventDefault();
        const reader = new window.FileReader();
        reader.onload = async (e) => {
            const text = (e.target.result);
            this.setState({ data: text });
        };
        reader.readAsText(event.target.files[0]);
    }

    importCV = (e) => {
        e.preventDefault();
        let data = {};
        if (this.state.data.length !== 0 && this.state.data.length >= 100 && this.state.data !== 'No data') {
            data = JSON.parse(this.state.data);
            console.log(data);
            axios.post(`${this.props.uri_back}/cv/add`, data)
                .then((res) => {
                    console.log(res);
                });
        }
    }

    dataChange = (e) => {
        this.setState({ btnActive: true, data: e.target.value });
    }

    render() {
        return (
            <div style={{ textAlign: 'center' }}>
                <Menu active="import" />
                <div style={{ marginTop: '100px' }}>
                    <input type="file" onChange={(e) => this.showFile(e)} />
                </div>
                <form style={{ marginTop: '70px', width: '100%' }} onSubmit={this.importCV} className="container d-flex justify-content-start">
                    <textarea className="form-control" onChange={this.dataChange} style={{ width: '100%', height: '60vh' }} value={this.state.data}>{'No data'}</textarea>
                    {
                        this.state.btnActive === true ? (
                            <button className="btn btn-success" type="submit">{'Importer mon CV'}</button>
                        ) : (
                                <button className="btn btn-success" type="submit" disabled>{'Importer mon CV'}</button>
                            )
                    }
                </form>
            </div>
        );
    }
}

export default Upload;
