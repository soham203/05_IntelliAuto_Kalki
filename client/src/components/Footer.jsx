import React from 'react'
import {Footer,} from 'flowbite-react';
import {Link} from 'react-router-dom';
import {BsInstagram,BsTwitter,BsLinkedin } from 'react-icons/bs'
export default function FooterComp() {
  return (
    <Footer container className='border border-t-8 border-orange-400'>
    <div className='w-full max-w-7xl mx-auto'>
      <div className='grid w-full justify-between sm:flex md:grid-cols-1'>
        <div className="mt-5">
        <Link to ="/" className='self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white'>
                <span  className='px-1 py-1 bg-gradient-to-r
                 from-orange-500             
                  to-orange-300
                  rounded-lg
                  text-white'
                  
                >Shyam 
                </span>
                Say's
            </Link>
        </div>
        
        <div className="grid grid-cols-2 gap-8  mt-4 sm:grid-cols-3 sm:gap-6">
        <div>
        <Footer.Title title='About' />
        <Footer.LinkGroup col>
          <Footer.Link 
          href='https://www.100jsprojects.com'
          target='_blank'
          rel='noopener noreferrer'
          >
           100 JS Projects
          </Footer.Link>
          <Footer.Link 
          href='/about'
          target='_blank'
          rel=''
          >
          Shyam Say's
          </Footer.Link>
        </Footer.LinkGroup>
        </div>
        <div>
        <Footer.Title title='Follow us' />
        <Footer.LinkGroup col>
          <Footer.Link 
          href='https://github.com/003-kalki'
          target='_blank'
          rel='noopener noreferrer'
          >
          Github
          </Footer.Link>
          <Footer.Link 
          href='#'
          >
          Discord 
          </Footer.Link>
        </Footer.LinkGroup>
        </div>
        <div>
        <Footer.Title title='Legal' />
        <Footer.LinkGroup col>
          <Footer.Link 
          href='#'
          >
         Privacy Policy
          </Footer.Link>
          <Footer.Link 
          href='/about'
          target='_blank'
          rel=''
          >
         Terms &amp; condition 
          </Footer.Link>
        </Footer.LinkGroup>
        </div>
        </div>
      </div>
      <Footer.Divider/>
      <div className='w-full sm:flex sm:items-center sm:justify-between'>
        <Footer.Copyright 
        href='#'
         by="Shyam Say's "
         year={new Date().getFullYear()}
         />
         <div  className="flex gap-6 sm:mt-0 mt-4 sm:justify-center" >
         <Footer.Icon href ='#' icon={BsInstagram}/>
         <Footer.Icon href ='#' icon={BsLinkedin}/>
         <Footer.Icon href ='#' icon={BsTwitter}/>
         </div>
         

      </div>
    </div>
    </Footer>

  )
}


