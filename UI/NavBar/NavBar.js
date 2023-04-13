import comket from "../_dependencies/comket.js"
import Search from "./Components/Search.js"
import Actions from "./Components/Actions.js"
import Register from "./Components/Register.js"

export default function NavBar() {
    let parent = comket.div({
        class: "nav-bar",
        children: [
            comket.div({
                class: "nav-left",
                children: [
                    comket.div({
                        class: "left-left",
                        children: [
                            comket.img({src: "./media/logo-light.svg"}),
                            Search()
                        ]
                    }),
                    Actions()
                ]
            }),
            Register(),
            comket.div({
                class: "responsive-icons",
                children: [
                    comket.div({
                        class: "search-icon", children: [
                            comket.Element("ion-icon", {name: "search"})
                        ]
                    }),
                    comket.div({
                        class: "menu", children: [
                            comket.Element("ion-icon", {name: "menu"})
                        ]
                    })
                ]
            })
        ]
    })
    return parent
}