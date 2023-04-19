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

        console.log("event", e)
        console.log("tags", tags)

        const expression = tags.map(tag => tag.value).join(' ');

        const charStream = CharStreams.fromString(expression);

        const lexer = new PredicateLexer(charStream)

        const tokenStream = new CommonTokenStream(lexer)

        const predicateParser = new PredicateParser(tokenStream)

        var error = null

        class E extends ErrorListener {

            syntaxError(recognizer, offendingSymbol, line, column, msg, e) {
                error = e
            }
        }

        predicateParser.addErrorListener(new E())

        predicateParser.predicateLine();


        if (error != null) {
            console.log("error", error)
            if (e.type !== "remove") {
                const tagElm = e.detail.tag
                const tagData = {...e.detail.data, __isValid: false}
                tagify.replaceTag(tagElm, tagData)
            }
        }

        const data = tokenStream.tokens.map(token => ({text: token.text}));

        // remove EOF
        data.splice(data.length - 1, 1)

        onChange(data)

    }, [])

    return <Tags
        tagifyRef={tagifyRef}
        // onChange={onChangeCallback}
        onAdd={onChangeCallback}
        onRemove={onChangeCallback}
    />
}
