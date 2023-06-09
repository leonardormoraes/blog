import React from 'react'

const Head = (props) => {
    React.useEffect(() => {
        document.title = props.title;

        props.description && document.querySelector('meta[name="description"]').setAttribute('content', props.description)

    }, [props])

    return null
}

export default Head