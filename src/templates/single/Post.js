import React from "react"
import { graphql } from "gatsby"
import BlogPost from "../../components/template-parts/blog-post"

export default ({ data }) => <BlogPost data={data} />

export const query = graphql`
  query post($id: String!, $nextPage: String, $previousPage: String) {
    page: wpPost(id: { eq: $id }) {
      seo {
        title
        metaDesc
      }
      categories {
        nodes {
          name
          slug
        }
      }
      title
      excerpt
      content
      featuredImage {
        node {  
          sourceUrl
          localFile {
            ...HeroImage
          }
        }
      }
      author {
        node {
          name
          slug
          description
          avatarImg {
            childImageSharp {
              md:fixed(width: 200) {
                width
                height
                tracedSVG
                aspectRatio
                src
                srcSet
              }
              tiny:fixed(width:100) {
                width
                height
                tracedSVG
                aspectRatio
                src
                srcSet
              }
            }
          }
        }
      }
    }

    nextPage: wpPost(id: { eq: $nextPage }) {
      title
      uri
    }

    previousPage: wpPost(id: { eq: $previousPage }) {
      title
      uri
    }
  }
`
