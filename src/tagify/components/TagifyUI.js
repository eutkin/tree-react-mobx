import Tags from "@yaireo/tagify/dist/react.tagify"
import "@yaireo/tagify/dist/tagify.css"
import {useCallback, useRef} from "react";

export const TagifyUI = ({onChange, stateTransformer}) => {

    const tagifyRef = useRef()

    const onAdd = useCallback(e => {
        const tagify = e.detail.tagify;
        console.log([...tagify.getTagElms(), e.detail.tag])
        const [data, error] = stateTransformer(tagify.value.map(tag => tag.value))
        if (error != null) {
            // todo похоже на колхоз и работате с багами
            [...tagify.getTagElms(), e.detail.tag].forEach(tagElem => {
                tagElem.className = (tagElem.className  + ' invalid').trim()
            })

        } else {
            // todo похоже на колхоз и работате с багами
            tagify.getTagElms().forEach(tagElem => {
                tagElem.className = tagElem.className.replace(' invalid', '')
            })
        }

        onChange(data, error == null)

    }, [])

    const onRemove = useCallback(e => {
        const [data, error] = stateTransformer(e.detail.tagify.value.map(tag => tag.value))
        if (error == null) {
            // todo похоже на колхоз и работате с багами
            e.detail.tagify.getTagElms().forEach(tagElem => {
                tagElem.className = tagElem.className.replace(' invalid', '')
            })
        }
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

