import React, { useEffect, useState } from "react"
import { Modal, ModalProps, View } from "react-native"

const HackyModal: React.FC<ModalProps> = (props) => {
    // const [mount, setMount] = useState(props.visible)

    // useEffect(() => {
    //     setMount(props.visible)
    // }, [props.visible])

    // return <Modal {...props}>{mount ? props.children : <View />}</Modal>
    return <Modal {...props}>{props.children}</Modal>
}

export default HackyModal
