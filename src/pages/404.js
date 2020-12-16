import * as React from 'react'
import SEO from '../components/seo'

import logo from '../../static/images/ness.svg'

const IndexPage = () => {
  return (
    <main>
      <SEO />
      <div className='bg-gray-50'>
        <div className='relative overflow-hidden'>
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
                      className='text-gray-200'
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
                      className='text-gray-200'
                      fill='currentColor'
                    />
                  </pattern>
                </defs>
                <rect width='404' height='784' fill='url(#d2a68204-c383-44b1-b99f-42ccff4e5365)' />
              </svg>
            </div>
          </div>

          <div className='relative pt-6 pb-16 sm:pb-24'>
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
                            stroke-linecap='round'
                            stroke-linejoin='round'
                            stroke-width='2'
                            d='M4 6h16M4 12h16M4 18h16'
                          />
                        </svg>
                      </button>
                    </div> */}
                  </div>
                </div>
                {/* <div className='hidden md:flex md:space-x-10'>
                  <a href='#' className='font-medium text-gray-500 hover:text-gray-900'>
                    Product
                  </a>

                  <a href='#' className='font-medium text-gray-500 hover:text-gray-900'>
                    Features
                  </a>

                  <a href='#' className='font-medium text-gray-500 hover:text-gray-900'>
                    Marketplace
                  </a>

                  <a href='#' className='font-medium text-gray-500 hover:text-gray-900'>
                    Company
                  </a>
                </div> */}
                <div className='md:absolute md:flex md:items-center md:justify-end md:inset-y-0 md:right-0'>
                  <a
                    href='https://github.com/nessjs/ness'
                    target='_blank'
                    rel='noreferrer'
                    className='font-medium flex items-center space-x-1 text-gray-500 hover:text-gray-900'
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

            <div className='mt-16 mx-auto max-w-7xl px-4 sm:mt-24 sm:px-6'>
              <div className='text-center'>
                <h1 className='text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl'>
                  <span className='block'>404</span>
                  <span className='block text-brand'>Nothing to see here</span>
                </h1>
              </div>
            </div>
          </div>
          <div className='relative'>
            <div className='absolute inset-0 flex flex-col' aria-hidden='true'>
              <div className='flex-1'></div>
              <div className='flex-1 w-full bg-gray-800'></div>
            </div>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 '>
              <div className='w-screen h-screen' />
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default IndexPage
