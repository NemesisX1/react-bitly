import React from 'react'
import './HomeComponent.css'
import { Link, Redirect} from 'react-router-dom';
import history from "../utils/history";
const axios = require('axios');

class AppBar extends  React.Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
      super(props);
    }
    
    
    render()  {
      return (
        <div className="card-header">
          <div className="text-center align-self-center">
            Bitly with React 
          </div>
        </div>
      );
    }
  }
  
class CustomCard extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        status: false,
        id: "",
        address: "",
        res: [],
      };
      this.handleLink = this.handleLink.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    async sendRequest() {
      axios.post(`http://localhost:3030/link`, {
        "link": this.state.address,
      })
        .then(res => {
          const response = res.data;
          this.setState({ res: response.data});
          console.log(res.data);
          alert("Hello");
        })
    }

    async handleSubmit(event) {
        await this.sendRequest();
        history.push(`/shortlink/${this.state.res.data._id}`);
    }

    handleLink(event) {
        this.setState({address: event.target.value});
    }

    render()  {
      if(this.status === true) {
        return (
          Redirect(

          )
        );
      } 
      return (
        <div className="card text-center">
            <AppBar/>
            <div className="card-body">
                <h5 className="card-title">Veillez entrer votre url ici !</h5>
                <form onSubmit={this.handleSubmit}>
                    <div className="input-group mb-4">
                        <input type="url" className="form-control form" placeholder="Lien" aria-label="Username" value={this.state.adress} onChange={this.handleLink} required/>
                    </div>
                    <input type="submit"  className="btn btn-outline-primary" value="Raccourcir"/>
                </form> 
            </div>
        </div>  
      );
    }
}
  
const Home = () => {
    return(
        <div className="App">
            <header className="App-header">
                <CustomCard></CustomCard>
            </header>
        </div>
    )
}

export default Home