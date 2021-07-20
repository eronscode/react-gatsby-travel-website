import * as React from "react"
import Trips from "@components/Trips"
import Hero from "@components/Hero"
import Layout from "@components/Layout"

import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Hero />
    <Trips />
  </Layout>
)

export default IndexPage
