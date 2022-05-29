import { Component } from "react";
import axios from 'axios';
import './box.css';


class Workspace extends Component {

    state = {
        selectedFile: null,
        celebs: [],
        uploadText: 'Choose File',
        validOutput: true

    };

    onFileClick = () => {
        console.log('upload button click')
        this.setState({ uploadText: 'Choose Another File' })
    }
    onFileChange = event => {
        console.log('File Added.')
        this.setState({ selectedFile: event.target.files[0] });
    };

    onFileUpload = async () => {
        console.log(this.state.selectedFile);

        if (this.state.selectedFile) {
            let formData = new FormData();
            formData.append('image', this.state.selectedFile)
            var config = {
                headers: { 'content-type': 'multipart/form-data' }
            }
            var response = await axios.post('https://celebx-backend.herokuapp.com/upload', formData, config);
            if (response.data.celebs.length === 0) {
                this.setState({
                    validOutput: false
                })
            }
            else {
                this.setState({
                    validOutput: true
                })
            }
            console.log(response.data.celebs)
            this.setState({ celebs: response.data.celebs })
        }
        this.setState({ selectedFile: null })
    };

    fileData = () => {
        if (!this.state.validOutput) {
            return (
                <h1 style={{
                    color: 'white',

                    fontSize: '20px',
                }}>
                    Invalid!
                </h1>
            )
        }
        if (this.state.celebs.length > 0) {
            return (

                <div>

                    <h1 style={{
                        color: 'white',

                        fontSize: '20px',
                    }}>
                        {this.state.celebs.map((celebName, index) =>
                        (
                            <p key={index}>{celebName}</p>
                        )
                        )}
                    </h1>
                </div>
            );
        } else {
            return (
                <div>
                    <br />
                    <h4
                        style={{
                            color: 'white'
                        }}>Choose before Pressing the Upload button</h4>
                </div>
            );
        }
    };

    render() {
        return (
            <div>
                <div style={{
                    backgroundImage: 'url("../background/background.png")',
                    display: 'flex',
                    backgroundSize: 'contain',
                    flexDirection: 'column',
                    alignItems: 'center',
                    height: '100vh',
                    width: '100vw',
                    zIndex: '-1',
                    position: 'fixed'

                }} />


                <h1
                    style={{
                        color: 'white',
                        backgroundColor: 'rgba(0,0,0,0.7)',
                        borderRadius: '5%',
                        padding: '2px 4px',
                        fontSize: '70px',
                        position: 'center',
                        margin: '0',
                    }}>
                    Welcome to Celeb-X
                </h1>
                <div class="box rounded">



                    <h2
                        style={{
                            color: 'white',
                            fontSize: '20px',
                        }}>
                        {'\n'}Scan the face of any celeb and this app will tell you who it is.
                    </h2>


                    <div>
                        <h1
                            style={{
                                padding: '2px 4px',
                                color: 'white',
                                fontSize: '20px',
                            }}>



                            Upload your file here!
                        </h1>
                        <div>
                            <input type="file" id="file" onClick={this.onFileClick} onChange={this.onFileChange} />
                            <label for="file">{this.state.uploadText}</label>

                            <button className="button" onClick={this.onFileUpload}>
                                Upload!
                            </button>

                        </div>
                    </div>

                    {this.fileData()}
                </div>
            </div>

        );
    }
}


export default Workspace;