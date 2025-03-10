import React from 'react'
import dynamic from 'next/dynamic';
import Link from 'next/link';
import Image from 'next/image';

const Layout = dynamic(import('@/components/Layouts/Main'));

interface ITechnologies {
    image: string;
    link: string;
};

function info() {
    const technologies: ITechnologies[] = [
        {
            image: 'nextjs.png',
            link: 'https://nextjs.org/'
        },
        {
            image: 'reactjs.png',
            link: 'https://react.dev/'
        },
        {
            image: 'socketio.png',
            link: 'https://socket.io/'
        },
        {
            image: 'tailwindcss.png',
            link: 'https://tailwindcss.com/'
        },
        {
            image: 'threejs.png',
            link: 'https://threejs.org/'
        },
        {
            image: 'next-auth.jpeg',
            link: 'https://next-auth.js.org/'
        }
    ];

    const pageStyle: string = `*{scrollbar-width: thin;scrollbar-color:#000000 #ffffff;} *::-webkit-scrollbar {width:16px;} *::-webkit-scrollbar-track{background:#ffffff;border-radius:5px;background-color:#F80000;} *::-webkit-scrollbar-track:hover{background-color:#F80000;} *::-webkit-scrollbar-track:active{background-color:#F80000;} *::-webkit-scrollbar-thumb{background-color:#000000;border-radius:10px;border: 8px none #ffffff;}
    `;

    return (
        <Layout title={'WalkIn City | Info'}>
            <div className={'h-screen w-screen text-white bg-white overflow-auto'}>
                <div className={`bg-black w-[calc(100vw-30px)] m-3 min-h-[calc((100vh-47px)/3)] rounded-lg`}>
                    <div className={'p-3'}>
                        <div className={'text-[40px] font-extrabold text-red-500 underline mb-1 info-title'}>Technologies</div>
                        <div className={'text-[20px] grid info-images-container gap-2 h-full w-full'}>
                            {technologies.map((image) =>
                                <a
                                    target='_blank'
                                    href={image.link}
                                    key={image.image}
                                >
                                    <Image
                                        className={'rounded-full border-2 border-red-500 info-images w-[100px] sm:w-[140px] md:w-[120px] '}
                                        height={0}
                                        src={`/info/${image.image}`}
                                        width={100}
                                        alt={image.image.replaceAll('.png', '')}
                                    />
                                </a>
                            )}
                        </div>
                    </div>
                </div>

                {/* <div className={`bg-black w-[calc(100vw-30px)] m-3 min-h-[calc((100vh-47px)/3)] rounded-lg`}>
                    <div className={'p-3'}>
                        <div className={'text-[40px] font-extrabold text-red-500 underline info-title'}>Contacts</div>
                        <div className={'text-[20px] sm:text-[30px] md:text-[25px]'}>
                            <div>
                                Partnership <a className={'text-red-500 font-medium'} href={`mailto:partnership@walkin.city`}>partnership@walkin.city</a>
                            </div>
                            <div>
                                Request an account <a className={'text-red-500 font-medium'} href={`mailto:partnership@walkin.city`}>account@walkin.city</a>
                            </div>
                            <div>
                                Request a country <a className={'text-red-500 font-medium'} href={`mailto:country@walkin.city`}>country@walkin.city</a>
                            </div>
                            <div>
                                General contact <a className={'text-red-500 font-medium'} href={`mailto:country@walkin.city`}>contact@walkin.city</a>
                            </div>
                        </div>
                    </div>
                </div> */}

                <div className={`bg-black w-[calc(100vw-30px)] m-3 min-h-[calc((100vh-47px)/3)] rounded-lg`}>
                    <div className={'p-3'}>
                        <div className={'text-[40px] font-extrabold text-red-500 underline info-title'}>Disclaimer</div>
                        <div className={'text-[20px] sm:text-[30px] md:text-[25px]'}>
                            The website will never display any advertisements, All advertisements comes from youtube, so you either have to block them with an ad blocker, or keep them to support the content creator.
                        </div>
                    </div>
                </div>

                <div className={`bg-black w-[calc(100vw-30px)] m-3 min-h-[calc((100vh-47px)/3)] rounded-lg`}>
                    <div className={'p-3'}>
                        <div className={'text-[40px] font-extrabold text-red-500 underline info-title'}>About Me</div>
                        <div className={'text-[20px] sm:text-[30px] md:text-[25px]'}>
                            My name is <a target='_blank' className={'text-red-500'} href={`https://hamza.im`}>Hamza</a>, I'm a 20 year old web developer from <Link className={'text-red-500'} href={`${process.env.NEXT_PUBLIC_APP_URL}/?cn=Morocco`}>Morocco</Link>, I write code in <span className={'font-medium'}>React.js</span>, <span className={'font-medium'}>Vue.js</span>, <span className={'font-medium'}>Next.js</span>, <span className={'font-medium'}>Laravel</span>, and <span className={'font-medium'}>Tailwind CSS</span>, want to contact me? <span className={'font-bold'}>send me an email <a className={'text-red-500 font-medium'} href={`mailto:contact@hamza.im`}>contact@hamza.im</a></span>
                        </div>
                    </div>
                </div>
            </div>
            <style>{pageStyle}</style>
        </Layout>
    );
};

export default info;