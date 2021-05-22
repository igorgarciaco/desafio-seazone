import * as React from "react"
import Layout from "../components/Layout"
import Seo from "../components/seo"

import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

// import JSONData from "../../content/My-JSON-Content.json"

const PropriedadesPage = () => (
  <Layout>
    <Seo title="Propriedades" />
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <StaticImage
      src="../images/gatsby-astronaut.png"
      width={300}
      quality={95}
      formats={["AUTO", "WEBP", "AVIF"]}
      alt="A Gatsby astronaut"
      style={{ marginBottom: `1.45rem` }}
    />
    <p>
      <Link to="/page-2/">Go to page 2</Link> <br />
      <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
    </p>
  </Layout>
)

export default PropriedadesPage
