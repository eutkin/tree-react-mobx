import logo from './logo.svg';
import './App.css';
import {TreeView} from "./tree/components/TreeView"
import {useCallback, useState} from "react";
import {TagifyUI} from "./tagify/components/TagifyUI";
import {transformTextToToken} from "./antlr/validation/TransformTextToToken";


function App() {


    const [json, setJson] = useState({})


    const tagifyLeafInput = useCallback(leaf =>
        <TagifyUI
            onChange={(data, isValid) => leaf.changeData(data, isValid)}
            stateTransformer={transformTextToToken}
        />, [])

    const onChange = useCallback(node => {

        console.log("App", node)
        const json = JSON.stringify(node, (key, value) => {
            if (key === 'parentNode') {
                return undefined
            }
            return value
        });
        setJson(json)
    }, [])

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <TreeView
                    inputProvider={tagifyLeafInput}
                    onChange={onChange}
                />
            </header>
        </div>
    );
}


export default App;
