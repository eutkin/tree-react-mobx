import Tags from "@yaireo/tagify/dist/react.tagify"
import "@yaireo/tagify/dist/tagify.css"
import {useCallback, useRef} from "react";
import {CharStreams, CommonTokenStream, ErrorListener} from 'antlr4'
import PredicateLexer from "../../antlr/PredicateLexer";
import PredicateParser from "../../antlr/PredicateParser";

export const TagifyUI = ({tokens, onChange}) => {

    const tagifyRef = useRef()

    const safeTokens = tokens || []

    const tags = safeTokens.map(token => token.text)

    console.log("root-tags", tags)

    const onChangeCallback = useCallback(e => {

        const tagify = e.detail.tagify;

        const tags = tagify.value

        console.log("event", e)

        const expression = tags.map(tag => tag.value).join(' ')

        console.log("tags", tags)

        console.log("expression", expression)

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
            if (e.type !== "remove") {
                const tagElm = e.detail.tag
                const tagData = {...e.detail.data, __isValid: false}
                tagify.replaceTag(tagElm, tagData)
            }
        }

        const data = tokenStream.tokens.map(token => ({text: token.text}));

        // remove EOF
        data.splice(data.length - 1, 1)

        console.log("data", data)
        onChange(data)

    }, [])

    return <Tags
        tagifyRef={tagifyRef}
        // onChange={onChangeCallback}
        onAdd={onChangeCallback}
        onRemove={onChangeCallback}
        value = {tags}
    />
}
