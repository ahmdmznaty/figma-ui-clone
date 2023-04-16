import comket from "../../dependencies/comket.js"

function formatTime(time) {
    let newTime = time.split(":").map((item, index) => {
        let formatted = ""
        if(index === 0) formatted += (item + " hrs")
        else if(index === 1) formatted += (item + " mins")
        else formatted += (+item ? item + " secs" : "")
        return formatted
    }).join(" ")
    return newTime
}
export default function Program(program) {
    let imageName = program.title.toLowerCase().split(" ").join("-")
    let parent = comket.div({
        class: "program-card",
        children: [
            comket.div({class: "image", children: [
                comket.img({src: `./media/programs/${imageName}.png`}),
                comket.div({children: [
                    comket.Element("ion-icon", {name: "time-outline"}),
                    comket.span({text: formatTime(program.time)})
                ]})
            ]}),
            comket.div({class: "content", children: [
                comket.div({class: "top", children: [
                    comket.h6({class: "category", text: program.category}),
                    comket.div({class: "title", children: [
                        comket.h5({text: program.title}),
                        comket.button({children: [
                            comket.Element("ion-icon", {name: "arrow-forward"})
                        ]})
                    ]}),
                    comket.p({class: "description", text: program.description}),
                ]}),
                comket.div({class: "rate", children: [
                    comket.span({text: program.rate}),
                    comket.div({class: "stars", children: [
                        comket.Element("ion-icon", {name: "star"}),
                        comket.Element("ion-icon", {name: "star"}),
                        comket.Element("ion-icon", {name: "star"}),
                        comket.Element("ion-icon", {name: "star"}),
                        comket.Element("ion-icon", {name: "star"}),
                        comket.div({
                            class: "value", style: {width: `${program.rate * 20}%`}
                        }),
                    ]}),
                    comket.p({
                        text: `(${program.reviewers.toLocaleString('en-US', {})})`
                    })
                ]}),
                comket.div({class: "bottom", children: [
                    comket.div({class: "leader", children: [
                        comket.img({
                            src: `./media/programs/${
                                program.leader.name.split(" ").join("-")
                            }.png`
                        }),
                        comket.div({class: "details", children: [
                            comket.p({text: program.leader.name}),
                            comket.span({text: program.leader.enrolled + " Enrolled"})
                        ]})
                    ]}),
                    comket.p({
                        class: "price",
                        text: program.price.toLocaleString('en-US', {
                            style: 'currency', currency: 'USD',
                        }
                    )})
                ]})
            ]})
        ]
    })
    return parent
}