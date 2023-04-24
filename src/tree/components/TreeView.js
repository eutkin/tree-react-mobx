import {Leaf} from "../state/Leaf";
import {observer} from "mobx-react"
import {action, makeObservable, observable, observe, toJS} from "mobx";
import {Node} from "../state/Node";
import {useEffect, useRef} from "react";

export const TreeView = ({onChange, inputProvider}) => {
    const node = useRef(init()).current


    useEffect(() => observe(node, change => onChange(toJS(change.object))))

    return <NodeView node={node} inputProvider={inputProvider}/>
}

function init() {
    const node = new Node()
    node.addLeaf();
    // todo Сделать отдельный класс для рутовой ноды
    return makeObservable(node, {
        version: observable,
        incrementVersion: action,
    })

}

const NodeView = observer(({node, inputProvider}) => {

    return (<div>
            <ul>
                {node.children.map((child, index) => {
                    if (child instanceof Leaf) {
                        return (<li key={child.id}>
                            <div>
                                <ButtonUI text={'+'} onClick={() => node.addLeaf()}/>
                                <ButtonUI text={'++'} onClick={() => node.addNode().addLeaf()}/>
                                <LeafView inputProvider={inputProvider} leaf={child}/>
                                <DeleteLeafButton text={'-'} node={node} index={index}/>
                            </div>
                        </li>)
                    }
                    return (<div>
                        <NodeView node={child} inputProvider={inputProvider}/>
                        <DeleteLeafButton text={'--'} node={node} index={index}/>
                    </div>)
                })}
            </ul>
        </div>

    )
})

const LeafView = ({inputProvider, leaf}) => inputProvider(leaf)

// eslint-disable-next-line no-unused-vars
const DeleteLeafButton = ({text, node, index}) => {
    if (node.children.length > 1) {
        return <ButtonUI text={text} onClick={() => node.deleteChild(index)}/>
    }
}

const ButtonUI = ({text, onClick}) => {
    return (<div>
        <button onClick={onClick}>{text}</button>
    </div>)
}