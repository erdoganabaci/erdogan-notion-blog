import { DiscussionEmbed } from "disqus-react"

const DisqusComments = ({ id, title, postSlug }) => {
    const disqusShortname = "erdoganabaci"
    // const disqusConfig = {
    //     url: `http://localhost:3000/blog/${postSlug}`,
    //     identifier: id, // Single post id
    //     title // Single post title
    // }
    return (
        <div>
            <DiscussionEmbed
                shortname={disqusShortname}
                config={
                    {
                        url: `https://erdogan-blog.vercel.app/blog/${postSlug}`,
                        identifier: id,
                        title
                    }
                }
            />
        </div>
    )
}
export default DisqusComments;