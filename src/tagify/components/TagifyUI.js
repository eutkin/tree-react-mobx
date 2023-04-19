import Tags from "@yaireo/tagify/dist/react.tagify"
import "@yaireo/tagify/dist/tagify.css"
import {useCallback, useRef} from "react";

export const TagifyUI = ({tokens, onChange}) => {

    const tagifyRef = useRef()

    const safeTokens = tokens || []

    const tags = safeTokens.map(token => token.text)

    const onChangeCallback = useCallback(e => {

        const tagify = e.detail.tagify;

        const tags = tagify.getCleanValue()

        const tokens = tags.map(tag => ({
            text : tag.value
        }))

        onChange(tokens)
    }, [])

    return <Tags
        tagifyRef={tagifyRef}
        onChange={onChangeCallback}
        value={tags}
    />
}