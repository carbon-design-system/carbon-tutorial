import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { Button } from 'carbon-components-react';
import fakeAuh from '../../services/fakeAuth';

export default function Login(props) {
    console.log('Login', props);
    const [ reReferrer, setreReferrer ] = useState(false);
    const { from } = props.location.state || { from: { pathname: '/' } }

    return (reReferrer ? <Redirect to={from}/> : <div>Please log in <Button onClick={() => fakeAuh.authenticate(() => setreReferrer(true))}>Log in</Button></div>);
}