import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import("../sass/main.scss")

const IndexPage = ({ data }) => (
  <Layout>
    {/* <SEO
      title={data.yoast_meta.yoast_wpseo_title}
      desc={data.yoast_meta.yoast_wpseo_metadesc}
      url={data.yoast_meta.yoast_wpseo_canonical}
      image={data.yoast_meta.yoast_wpseo_facebook_image.source_url}
    /> */}
    <div className="container">
      <div className="center-text">
        <h1 className="head-title text-black">WP Gatsby Materialized!!</h1>
      </div>
    </div>
  </Layout>
)

// export const query = graphql`
//   query Home {
//     allWordpressPage(filter: { title: { eq: "" } }) {
//       edges {
//         node {
//           acf {
//           }

//           yoast_meta {
//             yoast_wpseo_title
//             yoast_wpseo_canonical
//             yoast_wpseo_company_logo
//             yoast_wpseo_company_name
//             yoast_wpseo_company_or_person
//             yoast_wpseo_facebook_description
//             yoast_wpseo_facebook_title
//             yoast_wpseo_facebook_type
//             yoast_wpseo_metadesc
//             yoast_wpseo_person_name
//             yoast_wpseo_social_url
//             yoast_wpseo_twitter_description
//             yoast_wpseo_twitter_title
//             yoast_wpseo_website_name
//             yoast_wpseo_facebook_image {
//               source_url
//             }
//           }
//         }
//       }
//     }
//   }
// `

export default IndexPage
