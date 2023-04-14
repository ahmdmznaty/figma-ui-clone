import comket from "../dependencies/comket.js"
import Service from "./Components/Service.js"
import services from "../../database/services.js"

export default function Services() {
    let parent = comket.div({
        class: "services",
        children: [
            comket.h3({text: "Our Services"}),
            comket.h4({
                text: "Fostering a playful & engaging learning environment"
            }),
            comket.div({
                class: "cards",
                children: services.map(service => Service(service))
            })
        ]
    })
    return parent
}