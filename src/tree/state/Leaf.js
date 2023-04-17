import {makeAutoObservable} from "mobx";

export class Leaf {

    id = Math.floor(Math.random() * 100_000_000)

    data = {}

    constructor(data) {
        makeAutoObservable(this)
        this.data = data || {}
    }

    changeData(data) {
        console.log("Leaf", this.data, data)
        this.data = data || {}
    }
}

