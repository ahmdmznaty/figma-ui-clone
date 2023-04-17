import comket from "../dependencies/comket.js"
import Copyrights from "./Components/Copyrights.js"
import Main from "./Components/Main.js"

export default function Footer() {
    let parent = comket.div({
        class: "footer", children: [ Main(), Copyrights() ]
    })
    return parent
}