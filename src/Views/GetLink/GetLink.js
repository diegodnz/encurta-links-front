import React, { useEffect } from 'react';

function GetLink(props) {  
  
  const link = props.param 
  console.log(link)
  const axios = require('axios').default;
  axios.get("http://localhost:8080/links/obter", {
    params: {
      link
    }
  })
  .then(function (response) {     
    window.location.href = response.data.link
  })
  .catch(function (error) {
    alert('404 - Not Found')
  })
  
  return <></>
}

export default GetLink;