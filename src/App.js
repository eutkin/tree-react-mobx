import logo from './logo.svg';
import './App.css';
import {TreeView} from "./tree/components/TreeView"
import {useState} from "react";
import {TagifyUI} from "./tagify/components/TagifyUI";


function App() {

    const tagifyInput = (leaf) => <TagifyUI tokens={leaf.data} onChange={data => leaf.changeData(data)} />

    const [json, setJson] = useState({})

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <TreeView onChange={node => {
                    console.log("App-Node", {...node})
                    const json = JSON.stringify(node, (key, value) => {
                        if (key === 'version') {
                            return undefined
                        }
                        if (key === 'parentNode') {
                            return undefined
                        }
                        return value
                    });
                    setJson(json)
                }} inputProvider={tagifyInput}/>
            </header>
        </div>
    );
}


export default App;
