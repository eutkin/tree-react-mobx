import logo from './logo.svg';
import './App.css';
import {TreeView} from "./tree/components/TreeView"

function App() {

    const input = (leaf) => <TextInputView data={leaf.data} onChange={data => leaf.changeData(data)}/>

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <TreeView onChange={node => console.log("App", node)} inputProvider={input}/>
            </header>
        </div>
    );
}

const TextInputView = ({data, onChange}) => (
    <input type='text'
           value={data.text}
           onChange={e =>
               onChange(({'text': e.target.value}))}

    />
)


export default App;
