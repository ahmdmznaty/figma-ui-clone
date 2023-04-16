import comket from "../dependencies/comket.js"
import Tutor from "./Components/Tutor.js"
import tutors from "../../database/tutors.js"

export default function Tutors() {
    let parent = comket.div({
        class: "tutors", children: [
            comket.h3({text: "Tutors"}),
            comket.h4({text: "Meet the Heroes"}),
            comket.p({
                text: "On Ed-Circle, instructors from all over the world instruct millions of students. We offer the knowledge and abilities."
            }),
            comket.div({
                class: "cards", children: tutors.map(tutor => Tutor(tutor))
            })
        ]
    })
    return parent
}