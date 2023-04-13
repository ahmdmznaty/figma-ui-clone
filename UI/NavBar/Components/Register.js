import comket from "../../dependencies/comket.js"

export default function Register() {
    let parent = comket.div({
        class: "register",
        children: [
            comket.button({ class: "signin", text: "Sign in" }),
            comket.button({ class: "signup", text: "Create free account" })
        ]
    })
    return parent
}