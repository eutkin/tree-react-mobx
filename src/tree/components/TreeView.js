import {Leaf} from "../state/Leaf";
import {observer} from "mobx-react"
import {observe} from "mobx";
import {Node} from "../state/Node";

export const TreeView = ({onChange}) => {

    const node = new Node()
    observe(node, change => onChange({...change.object}))

    return <NodeView node={node}/>
}

const NodeView = observer(({node}) => {

        return [
            <ButtonUI text={'+'} onClick={() => node.addLeaf()}/>,
            <ButtonUI text={'++'} onClick={() => node.addNode().addLeaf()}/>,
            <ul>
                {
                    node.children.map(child => {
                        if (child instanceof Leaf) {
                            return <li key={child.id}><LeafView leaf={child}/></li>
                        }
                        return <NodeView node={child}/>
                    })
                }
            </ul>
        ]
    }
)

const LeafView = observer(({leaf}) => {

        return <input type='text'
                      value={leaf.text}
                      onChange={e => leaf.changeText(e.target.value)}
        />
    }
)

const ButtonUI = ({text, onClick}) => {
    return (
        <div>
            <button onClick={onClick}>{text}</button>
        </div>
    )
}