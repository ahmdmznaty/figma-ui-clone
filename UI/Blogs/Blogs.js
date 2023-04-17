import comket from "../dependencies/comket.js"
import blogs from "../../database/blogs.js"
import Blog from "./Components/Blog.js"

export default function Blogs() {
    blogs.sort((a, b) => new Date(a.date) - new Date(b.date))
    let parent = comket.div({
        class: "blogs", children: [
            comket.h3({text: "Our recent blogs"}),
            comket.div({class: "cards", children: [
                comket.div({
                    class: "old",
                    children: blogs.slice(0, 2).map(blog => Blog(blog))
                }),
                comket.div({class: "recent", children: [Blog(blogs[2])]})
            ]}),
            comket.button({
                text: "Explore All Blogs"
            })
        ]
    })
    return parent
}