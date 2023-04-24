import Tags from "@yaireo/tagify/dist/react.tagify"
import "@yaireo/tagify/dist/tagify.css"
import {useCallback, useRef} from "react";

export const TagifyUI = ({onChange, stateTransformer}) => {

    const tagifyRef = useRef()

    const onAdd = useCallback(e => {
        const tagify = e.detail.tagify
        console.log([...tagify.getTagElms(), e.detail.tag])
        const [data, error] = stateTransformer(tagify.value.map(tag => tag.value))
        if (error != null) {
            // todo похоже на колхоз и работате с багами
            [...tagify.getTagElms(), e.detail.tag].forEach(tagElem => {
                tagElem.classList.add("invalid")
            })

        } else {
            // todo похоже на колхоз и работате с багами
            tagify.getTagElms().forEach(tagElem => {
                tagElem.classList.remove("invalid")
            })
        }

        onChange(data, error == null)

    }, [onChange, stateTransformer])

    const onRemove = useCallback(e => {
        const tagify = e.detail.tagify
        const [data, error] = stateTransformer(tagify.value.map(tag => tag.value))
        if (error != null) {
            // todo похоже на колхоз и работате с багами
            tagify.getTagElms().forEach(tagElem => {
                tagElem.classList.add("invalid")
            })
        } else {
            // todo похоже на колхоз и работате с багами
            tagify.getTagElms().forEach(tagElem => {
                tagElem.classList.remove("invalid")
            })
        }
        onChange(data, error == null)

    }, [onChange, stateTransformer])

    return <Tags
        tagifyRef={tagifyRef}
        onAdd={onAdd}
        onRemove={onRemove}
        keepInvalidTags={true}
        duplicates={true}
    />
}

