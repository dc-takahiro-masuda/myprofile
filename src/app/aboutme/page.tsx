import ContentBody from '@/mycomponents/ContentBody'
import { FadeInRight } from '@/mycomponents/FadeInRight'
import IndentBlock from '@/mycomponents/IndentBlock'
import TopicCard from '@/mycomponents/TopicCard'
import Image from 'next/image'
import React from 'react'
import Career from './contents/Career'
import Personality from './contents/Personality'
import Hobbies from './contents/Hobbies'

const AboutMe: React.FC = () => {
    return (
        <>
            <ContentBody>
                <Image src="/img/selfy.png" alt="私の画像" width={300} height={300}
                    className='animate-zoom-in-selfy rounded-full ring-offset-1 ring-8' />
                <div className='opacity-0 animate-spin-myname delay-300 mt-4 font-semibold text-xl text-slate-700 bold tracking-wider'>
                    増田貴大
                </div>
                <FadeInRight>
                    <TopicCard
                        className="delay-700"
                        title="経歴"
                        content={<Career />
                        } />
                </FadeInRight>
                <FadeInRight>
                    <TopicCard
                        className='h-lg:md:delay-1000'
                        title="性格"
                        content={
                            <Personality />
                        }
                    />
                </FadeInRight>
                <FadeInRight>
                    <TopicCard title="趣味"
                        content={
                            <Hobbies />
                        } />
                </FadeInRight>
            </ContentBody>
        </>
    )
}

export default AboutMe