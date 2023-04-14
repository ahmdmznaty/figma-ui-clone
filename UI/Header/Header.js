import comket from "../dependencies/comket.js"
import Details from "./Components/Details.js"
import Figure from "./Components/Figure.js"

export default function Header() {
    let parent = comket.div({
        class: "header",
        children: [
            Figure(), Details()
        ]
    })
    return parent
}