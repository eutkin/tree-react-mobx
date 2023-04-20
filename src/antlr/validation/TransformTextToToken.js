import {CharStreams, CommonTokenStream, ErrorListener} from "antlr4";
import PredicateLexer from "../PredicateLexer";
import PredicateParser from "../PredicateParser";

/**
 * Функция, трансформирующая массив строк в массив токенов при помощи ANTLR4.
 * @param values массив текста токенов.
 * @returns {[{text: *}[],null]} массив токенов и ошибку, если она есть (иначе null)
 */
export const transformTextToToken = (values) => {

    const expression = values.join(' ')

    const charStream = CharStreams.fromString(expression);

    const lexer = new PredicateLexer(charStream)

    const tokenStream = new CommonTokenStream(lexer)

    const predicateParser = new PredicateParser(tokenStream)

    let error = null

    class E extends ErrorListener {

        syntaxError(recognizer, offendingSymbol, line, column, msg, e) {
            error = msg
        }
    }

    predicateParser.addErrorListener(new E())

    predicateParser.predicateLine();

    const data = tokenStream.tokens.map(token => ({text: token.text}));

    // remove EOF
    data.splice(data.length - 1, 1)


    return [data, error]
}