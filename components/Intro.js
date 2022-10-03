import Image from 'next/image'

export default function Intro() {
    return (
        <a href="/" className="flex items-center">
            <Image src="/images/logoonly.png" className="mr-3 h-6 sm:h-9" width={50} height={50}/>
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Ingenitech</span>
        </a>)
}