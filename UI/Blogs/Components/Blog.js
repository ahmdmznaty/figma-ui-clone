import comket from "../../dependencies/comket.js"

export default function Blog(blog) {
    let imageName = blog.title.replaceAll(" ", "-").toLowerCase()
    let parent = comket.div({
        class: "blog-card", children: [
            comket.img({src: `./media/blogs/${imageName}.png`}),
            comket.div({class: "details", children: [
                comket.h6({text: blog.date}),
                comket.h5({text: blog.title}),
                comket.p({text: blog.snapshot}),
                comket.div({class: "tags", children: blog.tags.map(tag => (
                    comket.span({ text: tag.name, style: {
                        color: tag.color, backgroundColor: tag.bg
                    }})
                ))})
            ]})
        ]
    })
    return parent
}