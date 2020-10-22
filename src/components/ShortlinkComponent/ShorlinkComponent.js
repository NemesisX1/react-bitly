import React from "react"
import { useParams } from "react-router-dom";
const axios = require('axios');

class ShortLink extends React.Component {
    state = {
        res: []
      }
    
      getAllRequest() {
        axios.get(`http://localhost:3030/link?_id=${this.props.match.params.id}`, {
        })
          .then(res => {
            const response = res.data;
            this.setState({ res: response.data});
            console.log(this.state.res[2]);
          })
      }
      
      render() {
        return (
          <div>
            <h2>
              "{this.state.res.short}"
            </h2>
          </div>
        )
      }
}

export default ShortLink