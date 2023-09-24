import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import "../styles/index.scss"

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main className="bg-black">
      <h1 className="text-white">Hello World</h1>
    </main>

  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
