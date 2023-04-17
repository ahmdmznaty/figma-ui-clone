import comket from "../../dependencies/comket.js"

export default function Copyrights() {
    let parent = comket.div({
        class: "copyrights", children: [
            comket.div({class: "links", children: [
                comket.a({href: "#", children: [
                    comket.Element("ion-icon", {name: "logo-twitter"})
                ]}),
                comket.a({href: "#", children: [
                    comket.Element("ion-icon", {name: "logo-linkedin"})
                ]}),
                comket.a({href: "#", children: [
                    comket.Element("ion-icon", {name: "logo-facebook"})
                ]}),
                comket.a({href: "#", children: [
                    comket.Element("ion-icon", {name: "logo-github"})
                ]}),
                comket.a({href: "#", children: [
                    comket.Element("ion-icon", {name: "logo-dribbble"})
                ]}),
            ]}),
            comket.div({
                class: "copyright",
                text: "© 2022 Ed-Circle. All rights reserved."
            })
        ]
    })
    return parent
}