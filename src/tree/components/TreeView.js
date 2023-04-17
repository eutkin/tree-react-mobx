import {Leaf} from "../state/Leaf";
import {observer} from "mobx-react"
import {observe} from "mobx";
import {Node} from "../state/Node";

export const TreeView = ({onChange}) => {

    const node = new Node()
    node.addLeaf()
    observe(node, change => onChange({...change.object}))

    return <NodeView node={node}/>
}

const NodeView = observer(({node}) => {

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
                                        <LeafView leaf={child}/>
                                        {/*<DeleteLeafButton text={'-'} node={node} leafId={child.id}/>*/}

                                    </li>
                                )
                            }
                            return (
                                <div>
                                    <NodeView node={child}/>
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

const LeafView = observer(({leaf}) => {

        return <input type='text'
                      value={leaf.text}
                      onChange={e => leaf.changeText(e.target.value)}
        />
    }
)

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