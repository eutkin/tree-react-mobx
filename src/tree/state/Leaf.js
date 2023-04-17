import {makeAutoObservable} from "mobx";

export class Leaf {

    id = Math.floor(Math.random() * 100_000_000)

    data = null

    constructor(data) {
        makeAutoObservable(this)
        this.data = data
    }

    changeData(data) {
        this.data = data
    }
}

