import comket from "../dependencies/comket.js"
import Program from "./Components/Program.js"
import programs from "../../database/programs.js"

export default function Programs() {
    let parent = comket.div({
        class: "programs",
        children: [
            comket.h3({text: "Explore Programs"}),
            comket.h4({text: "Our Most Popular Class"}),
            comket.p({
                text: "Let's join our famous class, the knowledge provided will definitely be useful for you."
            }),
            comket.div({
                class: "cards",
                children: programs.map(program => Program(program))
            }),
            comket.button({
                text: "Explore All Programs"
            })
        ]
    })
    return parent
}