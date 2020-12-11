import React from 'react'
import {graphql} from 'gatsby'
import Img from 'gatsby-image'

import SEO from '../components/seo'

import logo from '../images/ness.svg'
import aws from '../images/aws.svg'
import awsWhite from '../images/aws-white.svg'
import {DarkToggle, ThemeProvider} from '../components/theme'

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

const Header = () => (
  <div className='max-w-7xl mx-auto px-4 sm:px-6'>
    <nav
      className='relative flex items-center justify-between sm:h-10 md:justify-center'
      aria-label='Global'
    >
      <div className='flex items-center flex-1 md:absolute md:inset-y-0 md:left-0'>
        <div className='flex items-center justify-between w-full md:w-auto'>
          <a href='/'>
            <span className='sr-only'>Ness</span>
            <img className='h-8 w-auto sm:h-10' src={logo} alt='Ness' />
          </a>
          {/* <div className='-mr-2 flex items-center md:hidden'>
                      <button
                        type='button'
                        className='bg-gray-50 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500'
                        id='main-menu'
                        aria-haspopup='true'
                      >
                        <span className='sr-only'>Open main menu</span>
                        <svg
                          className='h-6 w-6'
                          xmlns='http://www.w3.org/2000/svg'
                          fill='none'
                          viewBox='0 0 24 24'
                          stroke='currentColor'
                          aria-hidden='true'
                        >
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth='2'
                            d='M4 6h16M4 12h16M4 18h16'
                          />
                        </svg>
                      </button>
                    </div> */}
        </div>
      </div>
      {/* <div className='hidden md:flex md:space-x-10'>
                  <a href='#' className='font-medium text-gray-500 hover:text-gray-800'>
                    Product
                  </a>

                  <a href='#' className='font-medium text-gray-500 hover:text-gray-800'>
                    Features
                  </a>

                  <a href='#' className='font-medium text-gray-500 hover:text-gray-800'>
                    Marketplace
                  </a>

                  <a href='#' className='font-medium text-gray-500 hover:text-gray-800'>
                    Company
                  </a>
                </div> */}
      <div className='p-3 space-x-4 bg-gray-50 dark:bg-gray-800 absolute flex items-center justify-end inset-y-0 right-0'>
        <DarkToggle />
        <a
          href='https://github.com/nessjs/ness'
          target='_blank'
          rel='noreferrer'
          className='font-medium flex items-center space-x-1 text-gray-500 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200'
        >
          <span>GitHub</span>

          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 20 20'
            fill='currentColor'
            className='h-4 w-4'
          >
            <path d='M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z' />
            <path d='M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z' />
          </svg>
        </a>
      </div>
    </nav>
  </div>
)

const Hero = ({data}) => (
  <div className='relative overflow-hidden'>
    <HeroBackground />
    <div className='relative pt-6 pb-16 sm:pb-24'>
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
            <p>&ldquo;Will probably have some time next week [to try it out]&rdquo;</p>
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

const Footer = () => (
  <footer className='bg-white dark:bg-gray-800'>
    <div className='max-w-7xl mx-auto py-12 px-4 sm:px-6 md:flex md:items-center md:justify-between lg:px-8'>
      <div className='flex justify-center space-x-6 md:order-2'>
        {/* <a href='#' className='text-gray-400 hover:text-gray-500'>
  <span className='sr-only'>Facebook</span>
  <svg className='h-6 w-6' fill='currentColor' viewBox='0 0 24 24' aria-hidden='true'>
    <path
      fillRule='evenodd'
      d='M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z'
      clipRule='evenodd'
    />
  </svg>
</a>

<a href='#' className='text-gray-400 hover:text-gray-500'>
  <span className='sr-only'>Instagram</span>
  <svg className='h-6 w-6' fill='currentColor' viewBox='0 0 24 24' aria-hidden='true'>
    <path
      fillRule='evenodd'
      d='M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z'
      clipRule='evenodd'
    />
  </svg>
</a> */}

        <a
          href='https://twitter.com/aeduhm'
          target='_blank'
          rel='noreferrer'
          className='text-gray-500 dark:text-gray-400 hover:text-gray-600 dark:hover:text-gray-200'
        >
          <span className='sr-only'>Twitter</span>
          <svg className='h-6 w-6' fill='currentColor' viewBox='0 0 24 24' aria-hidden='true'>
            <path d='M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84' />
          </svg>
        </a>

        <a
          href='https://github.com/nessjs/ness'
          target='_blank'
          rel='noreferrer'
          className='text-gray-500 dark:text-gray-400 hover:text-gray-600 dark:hover:text-gray-200'
        >
          <span className='sr-only'>GitHub</span>
          <svg className='h-6 w-6' fill='currentColor' viewBox='0 0 24 24' aria-hidden='true'>
            <path
              fillRule='evenodd'
              d='M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z'
              clipRule='evenodd'
            />
          </svg>
        </a>

        {/* <a href='#' className='text-gray-400 hover:text-gray-500'>
  <span className='sr-only'>Dribbble</span>
  <svg className='h-6 w-6' fill='currentColor' viewBox='0 0 24 24' aria-hidden='true'>
    <path
      fillRule='evenodd'
      d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z'
      clipRule='evenodd'
    />
  </svg>
</a> */}
      </div>
      <div className='mt-8 md:mt-0 md:order-1'>
        <p className='text-center text-base text-gray-500 dark:text-gray-400'>
          &copy; 2020 NessJS. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
)

const IndexPage = ({data}) => {
  return (
    <ThemeProvider>
      <div id='content'>
        <main>
          <SEO />
          <div className='bg-gray-50 dark:bg-gray-800'>
            <Hero data={data} />
            <BrandDivider />
            <Features />
            <Cta />
            <Quotes data={data} />
          </div>
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  )
}

export default IndexPage

export const query = graphql`
  query {
    deployImage: file(relativePath: {eq: "ness-deploy.png"}) {
      childImageSharp {
        fluid(maxWidth: 1250) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }

    avatarImage: file(relativePath: {eq: "eladb.jpeg"}) {
      childImageSharp {
        fluid(maxWidth: 60, maxHeight: 60) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
