import {makeAutoObservable} from "mobx";

export class Leaf {

    id = Math.floor(Math.random() * 100_000_000)
    text = ""

    constructor(text) {
        makeAutoObservable(this)
        this.text = text
    }

    changeText(text) {
        this.text = text
    }
}

