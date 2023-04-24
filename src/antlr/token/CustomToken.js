import {CommonToken} from "antlr4";

class CustomToken extends CommonToken {

    kind

    constructor(kind, source, type, channel, start, stop) {
        super(source, type, channel, start, stop);
        this.kind = kind
    }
}