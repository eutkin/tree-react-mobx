import {CharStreams, CommonTokenStream, ErrorListener} from "antlr4";
import PredicateLexer from "../PredicateLexer";
import PredicateParser from "../PredicateParser";
import CommonTokenFactory from "./CommonTokenFactory";


class CustomTokenFactory extends CommonTokenFactory {

    properties

    typeMapping

    constructor(properties, typeMapping) {
        super();
        this.properties = properties
        this.typeMapping = typeMapping
    }

    create(source, type, text, channel, start, stop, line, column) {
        if (type === 1) {
            const [_, charStream] = source
            const tokenText = charStream.getText(start, stop)
            const propertyName = tokenText.substring(1, tokenText.length - 1)
            const property = this.properties[propertyName]
            const propertyType = property.type
            const tokenSymbolicName = this.typeMapping[propertyType]
            const tokenType = PredicateLexer.symbolicNames.indexOf(tokenSymbolicName)
            return super.create(source, tokenType, tokenText, channel, start, stop, column)
        }
        return super.create(source, type, text, channel, start, stop, line, column);
    }
}

const tokenFactory = new CustomTokenFactory(
    {
        "s": {
            type: "Integer"
        }
    },
    {
        "Integer": "INT_PROPERTY"
    })

/**
 * Функция, трансформирующая массив строк в массив токенов при помощи ANTLR4.
 * @param values массив текста токенов.
 * @returns {[{text: *}[],null]} массив токенов и ошибку, если она есть (иначе null)
 */
export const transformTextToToken = (values) => {

    let error = null

    class E extends ErrorListener {

        syntaxError(recognizer, offendingSymbol, line, column, msg, e) {
            error = msg
        }
    }

    const errorListener = new E()

    const expression = values.join(' ')

    const charStream = CharStreams.fromString(expression);

    const lexer = new PredicateLexer(charStream)

    lexer._factory = tokenFactory

    lexer.addErrorListener(errorListener)

    const tokenStream = new CommonTokenStream(lexer)

    const predicateParser = new PredicateParser(tokenStream)


    predicateParser.addErrorListener(errorListener)

    predicateParser.predicateLine();

    const data = tokenStream.tokens.map(token => ({text: token.text}));

    // remove EOF
    data.splice(data.length - 1, 1)


    return [data, error]
}
