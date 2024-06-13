import ContentBody from '@/mycomponents/ContentBody'
import TopicCard from '@/mycomponents/TopicCard'
import React from 'react'
import PuzzleSolving from './contents/PuzzleSolving'
import CorpolateTraining from './contents/CorpolateTraining'
import AboutPortfolio from './contents/AboutPortfolia'
import DiscordBot from './contents/DiscordBot'
import MyResearch from './contents/MyResearch'

const Works: React.FC = () => {
    return (
        <ContentBody>
            私が今までに制作してきたものを紹介します。
            <TopicCard title="大学時代の研究"
                content={<MyResearch />} />
            <TopicCard title="DiscordのBOT"
                content={<DiscordBot />} />
            <TopicCard title="謎解きゲーム"
                content={
                    <PuzzleSolving />
                } />
            <TopicCard title="企業研修"
                content={
                    <CorpolateTraining />
                } />
            <TopicCard title="ポートフォリオサイト"
                content={
                    <AboutPortfolio />
                } />
        </ContentBody>
    )
}

export default Works