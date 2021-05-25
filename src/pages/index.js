import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import Seo from "../components/seo"


const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <h1>Página inicial</h1>
    <p>Navege até a página de <Link to="/propriedades">propriedades</Link> no menu acima</p>
  </Layout>
)

export default IndexPage
