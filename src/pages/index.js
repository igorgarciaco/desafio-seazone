import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/Layout"
import Seo from "../components/seo"

import JSONData from "../../content/My-JSON-Content.json"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />

  </Layout>
)

export default IndexPage
