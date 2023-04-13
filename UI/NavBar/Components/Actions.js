import comket from "../../dependencies/comket.js"

export default function Actions() {
    let parent = comket.div({
        class: "action-buttons",
        children: [
            comket.button({text: "Program"}),
            comket.button({text: "Enterprise"}),
            comket.button({text: "Universities"})
        ]
    })
    return parent
}