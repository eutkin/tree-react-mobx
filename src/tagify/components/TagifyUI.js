import Tags from "@yaireo/tagify/dist/react.tagify"
import "@yaireo/tagify/dist/tagify.css"
import {useCallback, useRef} from "react";
import {CharStreams, CommonTokenStream, ErrorListener, ErrorStrategy} from 'antlr4'
import PredicateLexer from "../../antlr/PredicateLexer";
import PredicateParser from "../../antlr/PredicateParser";

export const TagifyUI = ({tokens, onChange}) => {

    const tagifyRef = useRef()

    const safeTokens = tokens || []

    const tags = safeTokens.map(token => token.text)

    const onChangeCallback = useCallback(e => {

        const tagify = e.detail.tagify;

        const tags = tagify.getCleanValue()

        const expression = tags.map(tag => tag.value).join(' ');

        const charStream = CharStreams.fromString(expression);

        const lexer = new PredicateLexer(charStream)

        const tokenStream = new CommonTokenStream(lexer)

        const predicateParser = new PredicateParser(tokenStream)

        var error = null
        var errorIndex = null

        class E extends ErrorListener {

            syntaxError(recognizer, offendingSymbol, line, column, msg, e) {
                error = e
                errorIndex = offendingSymbol.tokenIndex
            }
        }

        predicateParser.addErrorListener(new E())

        predicateParser.predicateLine();

        console.log("error", error)

        if (errorIndex === null) {

        } else {

            // recognition at исключение возвращает 0 индекс токена. А такого у нас нет и он должен быть первым
            if (errorIndex === 0) {
                errorIndex = 1
            }
            console.log("index", errorIndex)

            const tagElm = tagify.getTagElms()[errorIndex - 1]
            console.log(tagify.value[errorIndex - 1])
            const tagData = {...tagify.value[errorIndex - 1], __isValid: false}
            console.log("tagData", tagData)
            tagify.replaceTag(tagElm, tagData)
        }
        error = null
        errorIndex = null

        const data = tokenStream.tokens.map(token => ({text: token.text}));

        // remove EOF
        data.splice(data.length - 1, 1)

        onChange(data)

    }, [])

    return <Tags
        tagifyRef={tagifyRef}
        onChange={onChangeCallback}
    />
}
