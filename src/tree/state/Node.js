import {Leaf} from "./Leaf";


/**
 * Узел дерева.
 */
export class Node {

    /**
     * Идентификатор узла. Используется для удаления.
     */
    id

    /**
     * Логика объединения дочерних элементов.
     * @type {string}
     */
    logic = "AND";

    /**
     * Дочерние элементы. Узлы и лепестки.
     * @type {[]}
     */
    children = [];

    /**
     * Версия узла. Изменяется при изменении состояния.
     * @type {number}
     */
    version = 0

    /**
     * Родительский узел. Используется для изменения версии от лепестка до корневого узла.
     */
    parentNode

    /**
     * Тип элемента. Используется для десериализации на сервере при определении типа элемента дерева.
     * @type {string}
     */
    type = "node"

    /**
     * Флаг, обозначающий, что узел содержит только валидные лепестки.
     * @type {boolean}
     */
    valid = true

    constructor(parent, logic, children) {
        this.parentNode = parent
        if (this.parentNode !== undefined) {
            this.id = 10_000 * (Math.floor(this.parentNode.id / 10_000 + 1)) + this.parentNode.children.length
        } else {
            this.id = 0
        }
        this.children = children || []
    }

    /**
     * Создает дочерний узел.
     * @returns {Node} дочерний узел.
     */
    addNode() {
        if (this.parentNode !== undefined) {
            this.parentNode.incrementVersion()
        } else {
            this.incrementVersion()
        }
        const childNode = new Node(this, "and", [])
        this.children.push(childNode)
        return childNode
    }

    /**
     * Создает дочерний лепесток.
     * @returns {Leaf} дочерний лепесток.
     */
    addLeaf() {
        if (this.parentNode !== undefined) {
            this.parentNode.incrementVersion()
        } else {
            this.incrementVersion()
        }
        const childLeaf = new Leaf(this)
        this.children.push(childLeaf)
        return childLeaf
    }

    /**
     * Удаляет дочерний элемент по его индексу в массиве дочерних элементов текущего узла.
     * @param childIndex индекс дочернего элемента в массиве текущего узла
     */
    deleteChild(childIndex) {
        if (childIndex > -1) {
            this.children.splice(childIndex, 1)
            this.incrementVersion()
        }
    }

    /**
     * Увеличивает версию свою и родительского узла.
     */
    incrementVersion() {
        if (this.parentNode !== undefined) {
            this.parentNode.incrementVersion()
        }
        this.version++
    }

    /*
    todo скорее всего не будет работать для нескольких лепестков.
     Следует заменить на объект, с идентификатором лепестка и значением.
     */
    /**
     * Устанавливает флаг, обозначающий, что все лепестки валидны.
     * @param isValid
     */
    setValid(isValid) {
        if (this.parentNode !== undefined) {
            this.parentNode.setValid(isValid)
        }
        this.valid = isValid
        this.version++
    }
}