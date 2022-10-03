import Image from "next/image";
import Link from "next/link";

export default function LMS() {
    return (
        <div className="dark:bg-slate-900">
            <section class="bg-white dark:bg-gray-900">
                <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
                    <div class="mr-auto place-self-center lg:col-span-7">
                        <h1 class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">LMS that’s here to improve access to education</h1>
                        <p class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">LMS is what your organization or educational institution needs to reach its eLearning goals. </p>
                        <a href="#" class="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-900">
                            Get started
                            <svg class="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                        </a>
                        <a href="#" class="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                            Speak to Sales
                        </a>
                    </div>
                    <div class="hidden lg:mt-0 lg:col-span-5 lg:flex">
                        <Image src="/images/content/fs-banner71f330.png" height={200} width={600} alt="mockup" />
                    </div>
                </div>
            </section>
            <section className="bg-gray-50 dark:bg-slate-800 py-20">
                <h1 className="dark:text-white text-center font-extrabold text-4xl">Why Ingeitech LMS ?</h1>
                <p className="dark:text-slate-400 text-center text-gray-600">Check out some of the cool features that enhance the learning and teaching experience</p>
            </section>
            <section className="flex mx-20">
                <div className="mr-auto place-self-center col-span-lg">
                    <h1 className="dark:text-white text-center text-center font-extrabold text-2xl">Create courses with ease</h1>
                    <p className="text-center dark:text-slate-400 text-gray-600">Build your course easily without getting overwhelmed by the system.</p>
                </div>
                <div className="flex">
                    <Image src={'/images/content/course-website.png'} width="600" height={350} />
                </div>
            </section>
            <section className="flex mx-20">
                <div className="mr-auto col-span-lg">
                    <Image src={'/images/content/lesson-website.png'} width="600" height={500} />
                </div>
                <div className="place-self-center">
                    <h1 className="dark:text-white text-center text-center font-extrabold text-2xl">Lessons in various forms</h1>
                    <p className="text-center dark:text-slate-400 text-gray-600">Add lessons of various forms to provide a good learning experience. Lessons can be in the form of articles, videos, quizzes, or a combination of all of these.</p>
                </div>
            </section>
            <section className="flex mx-20">
                <div className="mr-auto place-self-center col-span-lg">
                    <h1 className="dark:text-white text-center text-center font-extrabold text-2xl">Connect with students</h1>
                    <p className="text-center dark:text-slate-400 text-gray-600">Course Instructors and students can reach out to each other through the discussions section available for each lesson and get queries resolved.</p>
                </div>
                <div className="flex">
                    <Image src={'/images/content/discussion-website.png'} width="600" height={500} />
                </div>
            </section>
            <section className="flex mx-20">
                <div className="mr-auto col-span-lg">
                    <Image src={'/images/content/quiz-website.png'} width="600" height={400} />
                </div>
                <div className="place-self-center">
                    <h1 className="dark:text-white text-center text-center font-extrabold text-2xl">Engage with quizzes</h1>
                    <p className="text-center dark:text-slate-400 text-gray-600">Keep your students engaged with quizzes to help revise and test the concepts learned.</p>
                </div>
            </section>
            <section className="dark:bg-slate-800 bg-gray-50 py-20">
                <h1 className="dark:text-white text-center font-extrabold text-4xl">Ready to begin to new experiences</h1>
                <p className="text-center dark:text-slate-400 text-gray-600">LMS is what your organization or educational institution needs to reach its eLearning goals.</p>
                <div className="flex justify-center mt-10">
                    <a className="bg-gray-900 dark:bg-gray-600 text-white px-5 py-3 rounded ">
                        Contact Us
                    </a>
                </div>
            </section>
        </div>
    )
}