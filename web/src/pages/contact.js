import React from 'react'
import {graphql} from 'gatsby'
import {
  mapEdgesToNodes,
  filterOutDocsWithoutSlugs,
  filterOutDocsPublishedInTheFuture
} from '../lib/helpers'
import BlogPostPreviewList from '../components/blog-post-preview-list'
import Container from '../components/container'
import GraphQLErrorList from '../components/graphql-error-list'
import SEO from '../components/seo'
import Layout from '../containers/layout'

import {responsiveTitle1} from '../components/typography.module.css'

export const query = graphql`
  query ContactPageQuery {
        sanityPage(slug:{current:{eq:"contact"}}) {
            title
      }
  }
`

const ContactPage = props => {
  const {data, errors} = props
  const {title} = data.sanityPage

  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    )
  }

  return (
    <Layout>
      <SEO title= {title} />
      <Container>
        <h1 className={responsiveTitle1}>{title}</h1>
        <pre>{JSON.stringify(data, null, 2)}</pre>
      </Container>
    </Layout>
  )
}

export default ContactPage
