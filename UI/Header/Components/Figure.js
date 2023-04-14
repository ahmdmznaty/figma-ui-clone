import comket from "../../dependencies/comket.js"

function VideoCard() {
    let parent = comket.div({
        class: "video-card", children: [
            comket.div({
                class: "image-frame",
                children: [comket.img({src: "./media/header/course-icon.svg"})]
            }),
            comket.div({
                children: [
                    comket.h4({text: "2K+"}),
                    comket.p({text: "Video Courses"}),
                ]
            })
        ]
    })
    return parent
}
function TutorsCard() {
    let parent = comket.div({
        class: "tutor-card", children: [
            comket.div({
                class: "image-frame",
                children: [comket.img({src: "./media/header/tutor-icon.svg"})]
            }),
            comket.div({
                children: [
                    comket.p({text: "Tutors"}),
                    comket.h4({text: "250+"}),
                ]
            })
        ]
    })
    return parent
}
function OnlineCard() {
    let parent = comket.div({
        class: "online-card", children: [
            comket.img({src: "./media/header/online-courses.svg"}),
            comket.div({
                children: [
                    comket.h4({text: "5K+"}),
                    comket.p({text: "Online Courses"}),
                ]
            })
        ]
    })
    return parent
}
export default function Figure() {
    let parent = comket.div({
        class: "figure",
        children: [
            comket.div({
                class: "image-circle",
                children: [ comket.img({src: "./media/header/main.png"}) ]
            }),
            VideoCard(),
            TutorsCard(),
            OnlineCard(),
        ]
    })
    return parent
}