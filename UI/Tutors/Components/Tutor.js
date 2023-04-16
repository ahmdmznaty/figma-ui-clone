import comket from "../../dependencies/comket.js"

export default function Tutor(tutor) {
    let imageName = tutor.name.replaceAll(" ", "-").toLowerCase()
    let parent = comket.div({
        class: "tutor-card", children: [
            comket.img({src: `./media/tutors/${imageName}.png`}),
            comket.h5({text: tutor.name}),
            comket.h6({text: tutor.subtitle}),
            comket.p({text: tutor.summary}),
            comket.div({class: "social", children: [
                comket.a({
                    target: "_blank",
                    href: `https://twitter.com/${tutor.twitter}`,
                    children: [
                        comket.Element("ion-icon", {name: "logo-twitter"})
                    ]
                }),
                comket.a({
                    target: "_blank",
                    href: `https://linkedin.com/in/${tutor.linkedin}`,
                    children: [
                        comket.Element("ion-icon", {name: "logo-linkedin"})
                    ]
                }),
            ]})
        ]
    })
    return parent
}