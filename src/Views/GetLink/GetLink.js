import React, {useState} from 'react';
import { useParams } from 'react-router';
import NotFound from '../NotFound/NotFound'

function GetLink() {  
  const { link } = useParams(); 
  const axios = require('axios').default;
  const getUrl = process.env.REACT_APP_API_URL + '/links/obter'

  axios.get( getUrl , {
    params: {
      link
    }
  })
  .then((response) => Redirecionar(response))
  return <NotFound></NotFound>;
}

function Redirecionar(response) {
  window.location.href = response.data.link
}

export default GetLink;