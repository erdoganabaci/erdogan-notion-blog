import { DiscussionEmbed } from "disqus-react"
import { useEffect, useState } from "react";

const DisqusComments = ({ id, title, postSlug }) => {
    const [disqusConfig, setDisqusConfig] = useState({});

    useEffect(() => {
        setDisqusConfig({ url: "https://erdogan-blog.vercel.app/blog/" + postSlug, identifier: id, title });
    }, [])

    console.log('disqus config ', disqusConfig)

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
                config={disqusConfig}
            />
        </div>
    )
}
export default DisqusComments;