import React from 'react'
import {graphql} from 'gatsby'
import Img from 'gatsby-image'

import SEO from '../components/seo'

import aws from '../../static/images/aws.svg'
import awsWhite from '../../static/images/aws-white.svg'
import {Header} from '../components/header'
import {Footer} from '../components/footer'

const Feature = ({title, description}) => (
  <div className='flex'>
    <svg
      className='flex-shrink-0 h-6 w-6 text-brand dark:text-secondary'
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      stroke='currentColor'
      aria-hidden='true'
    >
      <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M5 13l4 4L19 7' />
    </svg>
    <div className='ml-3'>
      <dt className='text-lg leading-6 font-medium text-gray-800 dark:text-gray-200'>{title}</dt>
      <dd className='mt-2 text-base text-gray-500 dark:text-gray-400'>{description}</dd>
    </div>
  </div>
)

const NessDeployExample = () => (
  <div className='bg-gray-800 dark:bg-gray-700 rounded box-border text-sm leading-relaxed mt-8 p-4 shadow-xs text-left'>
    <pre className='bg-transparent font-mono text-base leading-normal m-0 text-gray-200 whitespace-pre-line'>
      <code className='box-border text-base'>$ npx ness deploy</code>
    </pre>
  </div>
)

const HeroBackground = () => (
  <div className='absolute inset-y-0 h-full w-full' aria-hidden='true'>
    <div className='relative h-full'>
      <svg
        className='absolute right-full transform translate-y-1/3 translate-x-1/4 md:translate-y-1/2 sm:translate-x-1/2 lg:translate-x-full'
        width='404'
        height='784'
        fill='none'
        viewBox='0 0 404 784'
      >
        <defs>
          <pattern
            id='e229dbec-10e9-49ee-8ec3-0286ca089edf'
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
        <rect width='404' height='784' fill='url(#e229dbec-10e9-49ee-8ec3-0286ca089edf)' />
      </svg>
      <svg
        className='absolute left-full transform -translate-y-3/4 -translate-x-1/4 sm:-translate-x-1/2 md:-translate-y-1/2 lg:-translate-x-3/4'
        width='404'
        height='784'
        fill='none'
        viewBox='0 0 404 784'
      >
        <defs>
          <pattern
            id='d2a68204-c383-44b1-b99f-42ccff4e5365'
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
        <rect width='404' height='784' fill='url(#d2a68204-c383-44b1-b99f-42ccff4e5365)' />
      </svg>
    </div>
  </div>
)

const Hero = ({data}) => (
  <div className='relative overflow-hidden'>
    <HeroBackground />
    <div className='relative pb-16 sm:pb-24'>
      <Header />

      <div className='mt-16 mx-auto max-w-7xl px-4 sm:mt-24 sm:px-6'>
        <div className='text-center'>
          <h1 className='text-4xl tracking-tight font-extrabold text-gray-800 dark:text-gray-200 sm:text-5xl md:text-6xl'>
            <span className='block'>Deploy web sites</span>
            <span className='block text-brand dark:text-secondary'>to your AWS account</span>
          </h1>
          <p className='mt-3 max-w-md mx-auto text-base text-gray-500 dark:text-gray-400 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl'>
            No sign-ups, paywalls or scaling limitations.
          </p>

          <div className='max-w-md mx-auto'>
            <NessDeployExample />
          </div>
        </div>
      </div>
    </div>
    <div className='relative'>
      <div className='absolute inset-0 flex flex-col' aria-hidden='true'>
        <div className='flex-1'></div>
        <div className='flex-1 w-full bg-brand'></div>
      </div>
      <div className='max-w-7xl mx-auto px-4 sm:px-6'>
        <Img
          className='relative rounded-lg shadow-lg'
          fluid={data.deployImage.childImageSharp.fluid}
          alt='ness deploy'
        />
      </div>
    </div>
  </div>
)

const BrandDivider = () => (
  <div className='bg-brand'>
    <div className='max-w-7xl mx-auto py-4 px-4 sm:py-8 sm:px-6 lg:px-8'></div>
  </div>
)

const Features = () => (
  <div className='bg-white dark:bg-gray-800'>
    <div className='max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-24 lg:px-8 lg:grid lg:grid-cols-3 lg:gap-x-8'>
      <div>
        <h2 className='text-base font-semibold text-brand dark:text-secondary uppercase tracking-wide'>
          Deploys made easy
        </h2>
        <p className='mt-2 text-3xl font-extrabold text-gray-800 dark:text-gray-200'>
          No configuration required
        </p>
        <p className='mt-4 text-lg text-gray-500 dark:text-gray-400'>
          Ness deploys your web site with all of the best practices around security and performance.
        </p>
      </div>
      <div className='mt-12 lg:mt-0 lg:col-span-2'>
        <dl className='space-y-10 sm:space-y-0 sm:grid sm:grid-cols-2 sm:grid-rows-4 sm:grid-flow-col sm:gap-x-6 sm:gap-y-10 lg:gap-x-8'>
          <Feature
            title='Custom Domains'
            description='Setup your custom domain by passing the --domain option'
          />
          <Feature
            title='SSL Certificate'
            description='SSL is setup automatically for painless HTTPS support'
          />
          <Feature
            title='Global CDN'
            description='Your site is served through CloudFront for speedy delivery around the globe'
          />
          <Feature
            title='Works with any framework'
            description='Automatically detects the most popular frameworks such as Next.js, Hugo, and Gatsby, or pass the --dir option to specify your build directory'
          />
          <Feature
            title='Security Headers'
            description='Best practice security headers served with every page'
          />
          <Feature
            title='CI friendly'
            description='Add ness to your CI/CD pipeline to keep your site up-to-date, effortlessly'
          />
          <Feature
            title='No third-party accounts'
            description='Ness deploys to your AWS account: no sign-ups and no scaling limitations'
          />
          <Feature
            title='Pull-request previews (coming soon)'
            description='Use the Ness GitHub Action to stand up preview environments for each of your pull-requests'
          />
        </dl>
      </div>
    </div>
  </div>
)

const Cta = () => (
  <div className='bg-brand'>
    <div className='max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8'>
      <h2 className='text-3xl font-extrabold text-white sm:text-4xl'>
        <span className='block'>Boost your productivity.</span>
        <span className='block'>Start using the Ness CLI today.</span>
      </h2>
      <p className='mt-4 text-lg leading-6 text-gray-200'>
        It's as simple as building your web site and running a single command in your project's root
        directory.
      </p>

      <NessDeployExample />
    </div>
  </div>
)

const Quotes = ({data}) => (
  <section className='py-12 bg-gray-50 dark:bg-gray-800 overflow-hidden md:py-20 lg:py-24'>
    <div className='relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
      <svg
        className='absolute top-full right-full transform translate-x-1/3 -translate-y-1/4 lg:translate-x-1/2 xl:-translate-y-1/2'
        width='404'
        height='404'
        fill='none'
        viewBox='0 0 404 404'
        role='img'
        aria-labelledby='svg-ness'
      >
        <title id='svg-ness'>Ness</title>
        <defs>
          <pattern
            id='ad119f34-7694-4c31-947f-5c9d249b21f3'
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
        <rect width='404' height='404' fill='url(#ad119f34-7694-4c31-947f-5c9d249b21f3)' />
      </svg>

      <div className='relative'>
        <img className='mx-auto h-8 dark:hidden' src={aws} alt='Amazon Web Services' />
        <img className='hidden mx-auto h-8 dark:block' src={awsWhite} alt='Amazon Web Services' />
        <blockquote className='mt-10'>
          <div className='max-w-3xl mx-auto text-center text-2xl leading-9 font-medium text-gray-800 dark:text-gray-200'>
            <p>
              &ldquo;Played around with ness and I love it ❤️ The experience is very slick!&rdquo;
            </p>
          </div>
          <footer className='mt-8'>
            <div className='md:flex md:items-center md:justify-center'>
              <div className='md:flex-shrink-0'>
                <Img
                  className='mx-auto h-14 w-14 md:h-10 md:w-10 rounded-full'
                  fluid={data.avatarImage.childImageSharp.fluid}
                  alt='Elad Ben-Israel'
                />
              </div>
              <div className='mt-3 text-center md:mt-0 md:ml-4 md:flex md:items-center'>
                <div className='text-base font-medium text-gray-800 dark:text-gray-200'>
                  Elad Ben-Israel
                </div>

                <svg
                  className='hidden md:block mx-1 h-5 w-5 text-brand dark:text-secondary'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                >
                  <path d='M11 0h3L9 20H6l5-20z' />
                </svg>

                <div className='text-base font-medium text-gray-500 dark:text-gray-400'>
                  Principal Engineer, AWS
                </div>
              </div>
            </div>
          </footer>
        </blockquote>
      </div>
    </div>
  </section>
)

const Posts = ({data}) => {
  const {
    posts: {edges},
  } = data
  const posts = edges
    .map((edge) => edge.node)
    .sort((a, b) => a.frontmatter.date.localeCompare(b.frontmatter.date))
  if (!posts || posts.length < 3) return ''

  return (
    <div className='relative bg-gray-50 dark:bg-gray-800 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8'>
      <div className='absolute inset-0'>
        <div className='bg-white dark:bg-gray-700 h-1/3 sm:h-2/3'></div>
      </div>
      <div className='relative max-w-7xl mx-auto'>
        <div className='text-center'>
          <h2 className='text-3xl tracking-tight font-extrabold text-gray-900 dark:text-gray-50 sm:text-4xl'>
            From the blog
          </h2>
          <p className='mt-3 max-w-2xl mx-auto text-xl text-gray-500 dark:text-gray-400 sm:mt-4'>
            News, tips and more from the creators of Ness.
          </p>
        </div>
        <div className='mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none'>
          {posts.map(
            ({
              excerpt,
              frontmatter: {image, slug, title, tags, avatar, author, date},
              fields: {readingTime},
            }) => (
              <div key={slug} className='flex flex-col rounded-lg shadow-lg overflow-hidden'>
                <div className='flex-shrink-0'>
                  <Img
                    className='h-48 w-full object-cover'
                    fluid={image.childImageSharp.fluid}
                    alt={title}
                  />
                </div>
                <div className='flex-1 bg-white dark:bg-gray-800 p-6 flex flex-col justify-between'>
                  <div className='flex-1'>
                    <p className='text-sm font-medium text-brand dark:text-secondary tracking-wide uppercase'>
                      {/* <a href='#' className='hover:underline'> */}
                      {tags}
                      {/* </a> */}
                    </p>
                    <a href={slug} className='block mt-2'>
                      <p className='text-xl font-semibold text-gray-900 dark:text-gray-50'>
                        {title}
                      </p>
                      <p className='mt-3 text-base text-gray-500 dark:text-gray-400'>{excerpt}</p>
                    </a>
                  </div>
                  <div className='mt-6 flex items-center'>
                    <div className='flex-shrink-0'>
                      {/* <a href='#'> */}
                      <span className='sr-only'>{author}</span>
                      <Img
                        className='h-10 w-10 rounded-full'
                        fluid={avatar.childImageSharp.fluid}
                        alt={author}
                      />
                      {/* </a> */}
                    </div>
                    <div className='ml-3'>
                      <p className='text-sm font-medium text-gray-900 dark:text-gray-50'>
                        {/* <a href='#' className='hover:underline'> */}
                        {author}
                        {/* </a> */}
                      </p>
                      <div className='flex space-x-1 text-sm text-gray-500 dark:text-gray-400'>
                        <time dateTime={date}>{date}</time>
                        <span aria-hidden='true'>&middot;</span>
                        <span>{readingTime.text}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ),
          )}
        </div>
      </div>
    </div>
  )
}

const IndexPage = ({data}) => {
  return (
    <div id='content'>
      <main>
        <SEO />
        <div className='bg-gray-50 dark:bg-gray-800'>
          <Hero data={data} />
          <BrandDivider />
          <Features />
          <Cta />
          <Quotes data={data} />
          <Posts data={data} />
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default IndexPage

export const query = graphql`
  query {
    avatarImage: file(relativePath: {eq: "eladb.jpeg"}) {
      childImageSharp {
        fluid(maxWidth: 60, maxHeight: 60) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }

    deployImage: file(relativePath: {eq: "ness-deploy.png"}) {
      childImageSharp {
        fluid(maxWidth: 1250) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }

    posts: allMarkdownRemark(
      filter: {frontmatter: {hidden: {ne: true}}}
      sort: {order: DESC, fields: [frontmatter___date]}
      limit: 3
    ) {
      edges {
        node {
          frontmatter {
            slug
            tags
            title
            image {
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
            author
            date(formatString: "MMMM DD, YYYY")
          }
          excerpt(pruneLength: 200)
          fields {
            readingTime {
              text
            }
          }
        }
      }
    }
  }
`
