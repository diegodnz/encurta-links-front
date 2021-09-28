import React from 'react';
import './FormLink.css'

class FormLink extends React.Component {
    
    constructor(props) {
      super(props);
      this.state = {link: ''};

      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({link: event.target.value});
    }
  
    handleSubmit(event) {
      const axios = require('axios').default;
      axios.post('http://localhost:8080/links/encurtar', {
        link: this.state.link
      })
      .then(function (response) {
        alert(response.data.link);
      })
      .catch(function (error) {
        alert(error);
      });
    }
  
    render() {
      return (
        <html>

          <head>
            <link rel= "stylesheet" href= "FormLink.css"></link>
            <title> Encurtar links </title>
          </head>

          <body>
            <form className='formLink' onSubmit={this.handleSubmit}>
              <label>         
                <input className="campoLink" type="text" value={this.state.link} onChange={this.handleChange} />
              </label>
              <input className="botaoEncurtarLink" type="submit" value="Encurtar" />
            </form>
          </body>

        </html>
       
      );
    }
  }

export default FormLink