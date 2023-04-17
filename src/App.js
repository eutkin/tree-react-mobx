import logo from './logo.svg';
import './App.css';
import {TreeView} from "./tree/components/TreeView"
import {WithContext as ReactTags} from 'react-tag-input';


function App() {

    // eslint-disable-next-line no-unused-vars
    const input = (leaf) => <TextInputView data={leaf.data} onChange={data => leaf.changeData(data)}/>

    const tagInput = (leaf) => <TagView tags={leaf.data} onChange={data => leaf.changeData(data)}/>

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <TreeView onChange={node => console.log("App", JSON.stringify(node))} inputProvider={tagInput}/>
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
    />
}


export default App;
