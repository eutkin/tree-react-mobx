import logo from './logo.svg';
import './App.css';
import {TreeView} from "./tree/components/TreeView"
import {WithContext as ReactTags} from 'react-tag-input';
import {useState} from "react";


function App() {

    // eslint-disable-next-line no-unused-vars
    const input = (leaf) => <TextInputView data={leaf.data} onChange={data => leaf.changeData(data)}/>

    const tagInput = (leaf) => <TagView tags={leaf.data} onChange={data => leaf.changeData(data)}/>

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
                    console.log("App", json)
                    setJson(json)
                }} inputProvider={tagInput}/>
            </header>
        </div>
    );
}

const TextInputView = ({data, onChange}) => {
    const content = data || {}
    return (
        <input type='text'
               value={content.text}
               onChange={e =>
                   onChange(({'text': e.target.value}))}

        />
    )
}

const TagView = ({tags, onChange}) => {

    const content = tags || []

    return <ReactTags
        tags={content}
        handleAddition={tag => onChange([...content, tag])}
        // inline={true}
    />
}


export default App;
