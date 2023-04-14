import comket from "../../dependencies/comket.js"

export default function Service(service) {
    let imageName = service.title.toLowerCase().split(" ").join("-")
    let parent = comket.div({
        class: "service-card", children: [
            comket.div({ class: "top", children: [
                comket.div({
                    style: { backgroundColor: service.shade },
                    children: [
                        comket.img({src: `./media/services/${imageName}.svg`})
                    ]
                }),
                comket.span({text: service.title})
            ]}),
            comket.p({text: service.description}),
            comket.button({children: [
                comket.span({text: "Learn More"}),
                comket.Element("ion-icon", {name: "chevron-forward"})
            ]})
        ]
    })
    return parent
}