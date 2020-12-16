import React from 'react'
import {graphql} from 'gatsby'
import Img from 'gatsby-image'

import {Header} from '../components/header'
import {Footer} from '../components/footer'
import SEO from '../components/seo'

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const {markdownRemark} = data // data.markdownRemark holds your post data
  const {
    frontmatter,
    html,
    fields: {readingTime},
  } = markdownRemark

  return (
    <div id='content'>
      <main>
        <SEO
          title={frontmatter.title}
          image={frontmatter.image ? `images/${frontmatter.image.relativePath}` : undefined}
        />
        <div className='bg-gray-50 dark:bg-gray-800'>
          <Header />
          <div className='relative py-16 overflow-hidden'>
            <div className='hidden lg:block lg:absolute lg:inset-y-0 lg:h-full lg:w-full'>
              <div className='relative h-full text-lg max-w-prose mx-auto' aria-hidden='true'>
                <svg
                  className='absolute top-12 left-full transform translate-x-32'
                  width='404'
                  height='384'
                  fill='none'
                  viewBox='0 0 404 384'
                >
                  <defs>
                    <pattern
                      id='74b3fd99-0a6f-4271-bef2-e80eeafdf357'
                      x='0'
                      y='0'
                      width='20'
                      height='20'
                      patternUnits='userSpaceOnUse'
                    >
                      <rect
                        x='0'
                        y='0'
                        width='4'
                        height='4'
                        className='text-gray-200 dark:text-gray-600'
                        fill='currentColor'
                      />
                    </pattern>
                  </defs>
                  <rect
                    width='404'
                    height='384'
                    fill='url(#74b3fd99-0a6f-4271-bef2-e80eeafdf357)'
                  />
                </svg>
                <svg
                  className='absolute top-1/2 right-full transform -translate-y-1/2 -translate-x-32'
                  width='404'
                  height='384'
                  fill='none'
                  viewBox='0 0 404 384'
                >
                  <defs>
                    <pattern
                      id='f210dbf6-a58d-4871-961e-36d5016a0f49'
                      x='0'
                      y='0'
                      width='20'
                      height='20'
                      patternUnits='userSpaceOnUse'
                    >
                      <rect
                        x='0'
                        y='0'
                        width='4'
                        height='4'
                        className='text-gray-200 dark:text-gray-600'
                        fill='currentColor'
                      />
                    </pattern>
                  </defs>
                  <rect
                    width='404'
                    height='384'
                    fill='url(#f210dbf6-a58d-4871-961e-36d5016a0f49)'
                  />
                </svg>
                <svg
                  className='absolute bottom-12 left-full transform translate-x-32'
                  width='404'
                  height='384'
                  fill='none'
                  viewBox='0 0 404 384'
                >
                  <defs>
                    <pattern
                      id='d3eb07ae-5182-43e6-857d-35c643af9034'
                      x='0'
                      y='0'
                      width='20'
                      height='20'
                      patternUnits='userSpaceOnUse'
                    >
                      <rect
                        x='0'
                        y='0'
                        width='4'
                        height='4'
                        className='text-gray-200 dark:text-gray-600'
                        fill='currentColor'
                      />
                    </pattern>
                  </defs>
                  <rect
                    width='404'
                    height='384'
                    fill='url(#d3eb07ae-5182-43e6-857d-35c643af9034)'
                  />
                </svg>
              </div>
            </div>

            <div className='relative px-4 sm:px-6 lg:px-8 max-w-prose mx-auto'>
              <div className='text-lg max-w-prose mx-auto'>
                <h1>
                  <span className='block text-base text-center text-brand dark:text-secondary font-semibold tracking-wide uppercase'>
                    {frontmatter.date}
                  </span>
                  <span className='mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 dark:text-gray-50 sm:text-4xl'>
                    {frontmatter.title}
                  </span>
                </h1>
              </div>
              <div className='mt-6 table max-w-prose mx-auto'>
                <div className='flex items-center'>
                  <div className='flex-shrink-0'>
                    {/* <a href='#'> */}
                    <span className='sr-only'>{frontmatter.author}</span>
                    <Img
                      className='h-10 w-10 rounded-full'
                      fluid={frontmatter.avatar.childImageSharp.fluid}
                      alt={frontmatter.author}
                    />
                    {/* </a> */}
                  </div>
                  <div className='ml-3'>
                    <p className='text-sm font-medium text-gray-900 dark:text-gray-50'>
                      {/* <a href='#' className='hover:underline'> */}
                      {frontmatter.author}
                      {/* </a> */}
                    </p>
                    <div className='flex space-x-1 text-sm text-gray-500 dark:text-gray-400'>
                      <span>{readingTime.text}</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className='mt-6 prose prose-brand prose-lg text-gray-500 dark:text-gray-400'>
                <div dangerouslySetInnerHTML={{__html: html}} />
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: {slug: {eq: $slug}}) {
      html
      frontmatter {
        author
        date(formatString: "MMMM DD, YYYY")
        slug
        title
        image {
          relativePath
          childImageSharp {
            fluid(maxWidth: 600) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        avatar {
          childImageSharp {
            fluid(maxWidth: 60, maxHeight: 60) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
      fields {
        readingTime {
          text
        }
      }
    }
  }
`
