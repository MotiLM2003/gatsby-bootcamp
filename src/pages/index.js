import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

const IndexPage = () => {
  return (
    <Layout>
      <div>
        <h1>Welcome to my site</h1>
        Need a developer? <Link to="/contact"> contact us</Link>
        <div>
          <Link to="/about">About us</Link>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
