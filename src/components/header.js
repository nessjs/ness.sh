import React from 'react'

import logo from '../../static/images/ness.svg'
import {DarkToggle} from '../components/theme'

export const Header = () => (
  <div className='max-w-7xl mx-auto pt-6 px-4 sm:px-6'>
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
