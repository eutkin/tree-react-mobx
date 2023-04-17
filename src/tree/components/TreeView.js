import {Leaf} from "../state/Leaf";
import {observer} from "mobx-react"
import {observe} from "mobx";
import {Node} from "../state/Node";

export const TreeView = ({onChange, inputProvider}) => {

    const node = new Node()
    node.addLeaf()
    observe(node, change => onChange({...change.object}))

    return <NodeView node={node} inputProvider={inputProvider}/>
}

const NodeView = observer(({node, inputProvider}) => {

        return (
            <div>
                <ul>
                    {
                        node.children.map(child => {
                            if (child instanceof Leaf) {
                                return (
                                    <li key={child.id}>
                                        <ButtonUI text={'+'} onClick={() => node.addLeaf()}/>
                                        <ButtonUI text={'++'} onClick={() => node.addNode().addLeaf()}/>
                                        <LeafView inputProvider={inputProvider} leaf={child}/>
                                        {/*<DeleteLeafButton text={'-'} node={node} leafId={child.id}/>*/}

                                    </li>
                                )
                            }
                            return (
                                <div>
                                    <NodeView node={child} inputProvider={inputProvider}/>
                                    {/*<DeleteLeafButton text={'--'} node={node} leafId={child.id}/>*/}
                                </div>
                            )
                        })
                    }
                </ul>
            </div>

        )
    }
)

const LeafView = observer(({inputProvider, leaf}) => inputProvider(leaf))

// eslint-disable-next-line no-unused-vars
const DeleteLeafButton = ({text, node, leafId: childId}) => {
    if (node.children.length > 1) {
        return <ButtonUI text={text} onClick={() => node.deleteChild(childId)}/>
    }
}

const ButtonUI = ({text, onClick}) => {
    return (
        <div>
            <button onClick={onClick}>{text}</button>
        </div>
    )
}