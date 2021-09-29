import React, {useState} from 'react';
import './FormLink.css'

function FormLink () {

    const [linkBack, setLinkBack] = useState('');
    const [linkBackView, setLinkBackView] = useState('');
    const [urlOriginalDesc, setUrlOriginalDesc] = useState('');
    const [urlEncurtadaDesc, setUrlEncurtadaDesc] = useState('');
    const [link, setLink] = useState('');
    const [render, setRender] = useState(false);
    const [error, setError] = useState(false)

    async function submit() {
      var linkVar = link
      if (link.substr(0, 4) !== "http") {
        linkVar = "http://" + link
      }
      const axios = require('axios').default;
      const postUrl = process.env.REACT_APP_API_URL + '/links/encurtar'
      await axios.post( postUrl , {
        link: linkVar
      })
      .then(function (response) {
        setLinkBack(process.env.REACT_APP_API_URL + "/" + response.data.link)
        setLinkBackView(linkVar)
        setError(false)
        setRender(true)
        setUrlOriginalDesc('URL Orginial')
        setUrlEncurtadaDesc('URL Encurtada')
      })
      .catch(function (error) {
        setError(true)
      });
    }

      return (
        <div className="container">
            <div className='header'>
              <h1>Encurtador de Links</h1>
            </div>

            <div className='form'>
              <p id='textInserirUrl'>Insira a URL a ser encurtada</p>
              <div className="form1">                                 
                <div className='labelFom'>         
                  <input className="campoLink" type="text" value={link} onChange={e => setLink(e.target.value)} />
                </div>
                <button onClick={submit} className="botaoEncurtarLink">Encurtar URL</button>               
              </div>
              {
                error 
                ? 
                <div className="error"> 
                <p>Link inválido</p>
                </div>  
                :
                <div className="links" style={render ? {borderWidth: '2px'} : {borderWidth: '0px'}}> 
                  <a className="redirect" href={linkBackView} id='textUrlEncurtada'>{linkBackView.length > 25 ? linkBackView.substr(0,25) + "..." : linkBackView}</a>
                  <a className="redirect1" href={linkBack} id='textUrlEncurtada'>{linkBack}</a>
                </div>
              }
              {                
                <div className="links" style={render ? {borderWidth: '2px'} : {borderWidth: '0px'}}> 
                  <h3 id='descOriginal'>{urlOriginalDesc}</h3>
                  <h3 id='descEncurtada'>{urlEncurtadaDesc}</h3>
                </div>
              }
              
            </div>
        </div>
      );
}

export default FormLink;