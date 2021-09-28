import React from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import FormLink from '../FormLink/FormLink';
import GetLink from '../GetLink/GetLink';

// import { Container } from './styles';

function Home() {
  const { link } = useParams();
  if (link == 'encurtar') {
    return <FormLink></FormLink>
  } else {
    return <GetLink param={link}></GetLink>
  }
}

export default Home;