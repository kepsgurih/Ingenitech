import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <section className="bg-white dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
          <a href="#" className="inline-flex justify-between items-center py-1 px-1 pr-4 mb-7 text-sm text-gray-700 bg-gray-100 rounded-full dark:bg-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700" role="alert">
            <span className="text-xs bg-slate-600 rounded-full text-white px-4 py-1.5 mr-3">New</span> <span className="text-sm font-medium">Ingeitech is out! See what's new</span>
            <svg className="ml-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path></svg>
          </a>
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Awesome software for you</h1>
          <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">Here at Ingeitech we focus on markets where technology, innovation, and Simple Solutions for Complex Connections.</p>
          <div className="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
            <a href="#" className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-slate-700 hover:bg-slate-800 focus:ring-4 focus:ring-slate-300 dark:focus:ring-slate-900">
              Learn more
              <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
            </a>
            <a href="#" className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-gray-900 rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
              <svg className="mr-2 -ml-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"></path></svg>
              Watch video
            </a>
          </div>
          <div className="px-4 mx-auto text-center md:max-w-screen-md lg:max-w-screen-lg lg:px-36">
            <span className="font-semibold text-gray-400 uppercase">FEATURED IN</span>
            <div className='grid sm:grid-cols-3 grid-cols-2 text-center gap-3 mt-5'>
              <div className="hover:scale-125 hover:dark:bg-slate-900 hover:bg-gray-50 dark:text-gray-300 dark:border-gray-600 py-3 px-5 shadow-lg rounded overflow-hidden border font-semibold">Human Resource System
                <p className='font-light text-xs'>Manage full employee life cycle right from onboarding, payroll, attendance, expense claims, assets to separation.</p>
              </div>
              <div className="hover:scale-125 hover:dark:bg-slate-900 hover:bg-gray-50 dark:text-gray-300 dark:border-gray-600 py-3 px-5 shadow-lg rounded overflow-hidden border font-semibold">Warehouse System
                <p className='font-light text-xs'>
                  Optimized Pick, Pack and Order processing supported with apps for mobility.
                </p>
              </div>
              <div className="hover:scale-125 hover:dark:bg-slate-900 hover:bg-gray-50 dark:text-gray-300 dark:border-gray-600 py-3 px-5 shadow-lg rounded overflow-hidden border font-semibold">CRM
                <p className='font-light text-xs'>
                  Transforming client and customer relationships for the better.
                </p>
              </div>
              <Link href={'/docs/LMS'}>
              <div className="hover:scale-125 hover:dark:bg-slate-900 hover:bg-gray-50 dark:text-gray-300 dark:border-gray-600 py-3 px-5 shadow-lg rounded overflow-hidden border font-semibold">Learning Management System
                <p className='font-light text-xs'>simple backend and a clean UI ensuring that the focus remains on learning</p>
              </div>
              </Link>
              <div className="hover:scale-125 hover:dark:bg-slate-900 hover:bg-gray-50 dark:text-gray-300 dark:border-gray-600 py-3 px-5 shadow-lg rounded overflow-hidden border font-semibold">Healthcare
              <p className='font-light text-xs'>helps you manage your hospital, clinic or practice efficiently</p></div>
              <div className="hover:scale-125 hover:dark:bg-slate-900 hover:bg-gray-50 dark:text-gray-300 dark:border-gray-600 py-3 px-5 shadow-lg rounded overflow-hidden border font-semibold">POS service
              <p className='font-light text-xs'>For retail operations, the delivery of goods, accrual of sale and payment all happens in one event, that is usually called the 'Point of Sale'</p></div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
