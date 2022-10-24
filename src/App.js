import './App.css';
import {Fragment} from 'react';

function App() {
    const name = '뿡';
    return (
        <Fragment>
            <h1 className={'orange'}>Hello, World!</h1>
            <h2>Hello, World!</h2>
            <p>{name}</p>
            <ul>
                <li>우유</li>
                <li>딸기</li>
                <li>바나나</li>
            </ul>
            <img
                style={{width: '200px', height: '200px'}}
                src={'https://images.unsplash.com/photo-1666521806890-2216eaa46a71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80'}
                alt={''}/>
        </Fragment>
    );
}

export default App;
