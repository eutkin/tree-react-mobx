import Tags from "@yaireo/tagify/dist/react.tagify"
import "@yaireo/tagify/dist/tagify.css"
import {useCallback, useRef} from "react";

export const TagifyUI = ({onChange, stateTransformer}) => {

    const tagifyRef = useRef()

    const onAdd = useCallback(e => {
        const [data, error] = stateTransformer(e.detail.tagify.value.map(tag => tag.value))

        if (error != null) {
            const tagElm = e.detail.tag
            tagElm.className = tagElm.className + ' tagify--invalid'
        }

        onChange(data, error == null)

    }, [])

    const onRemove = useCallback(e => {
        const [data, error] = stateTransformer(e.detail.tagify.value.map(tag => tag.value))
        onChange(data, error == null)

    }, [])

    return <Tags
        tagifyRef={tagifyRef}
        onAdd={onAdd}
        onRemove={onRemove}
        keepInvalidTags={true}
        duplicates={true}
    />
}

