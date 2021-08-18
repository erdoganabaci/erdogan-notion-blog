import ExtLink from './ext-link'

export default function Footer() {
  return (
    <>
      <footer>
        <span>Forked from
          <ExtLink href="https://github.com/ijjk/notion-blog">{' '}
            ijjk/notion-blog
          </ExtLink>
        </span>
        <br></br>
        <span>Made with NextJs ! </span>

        {/* <ExtLink href="https://vercel.com/new/git/external?repository-url=https://github.com/ijjk/notion-blog/tree/main&project-name=notion-blog&repository-name=notion-blog">
          <img
            src="https://vercel.com/button"
            height={46}
            width={132}
            alt="deploy to Vercel button"
          />
        </ExtLink> */}
        <span>

          <ExtLink href="https://github.com/erdoganabaci/notion-blog">
            view source
          </ExtLink>
        </span>
      </footer>
    </>
  )
}
