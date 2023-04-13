import comket from "../../_dependencies/comket.js"

export default function Search() {
    let parent = comket.div({
        class: "search-box",
        children: [
            comket.input({ type: "text", placeholder: "Want to learn?" }),
            comket.Element("ion-icon", {name: "search"}),
            comket.button({
                children: [
                    comket.span({text: "Explore"}),
                    comket.Element("ion-icon", {name: "chevron-down"})
                ]
            })
        ]
    })
    return parent
}