import {CommonToken} from "antlr4";

export default class AttributeToken extends CommonToken {

    propertyIndex

    constructor(propertyIndex, source, type, text, channel, start, stop, line, column) {
        super(source, type, channel, start, stop);
        super.text = text
        this.propertyIndex = propertyIndex;
        this.column = column
        this.line = column
    }
}