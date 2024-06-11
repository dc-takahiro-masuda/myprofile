import ContentBody from '@/mycomponents/ContentBody'
import TopicCard from '@/mycomponents/TopicCard'
import React from 'react'

const Works: React.FC = () => {
    return (
        <ContentBody>
            私が今までに制作してきたものを紹介します。
            <TopicCard title="大学時代の研究"
                content={<>
                    大学時代には、Pythonを使って株価を予測するという研究を行っていました。
                    AdaBoostという手法を改良して個別の株価に対して予測を行っていました。
                    ソースコードは<a 
                    href="https://colab.research.google.com/drive/1olK7ShPUvgXTKH5VpBRNuVPJFg9BY_G5?hl=ja#scrollTo=_szcpbpxNcYn"
                    className='alink'
                    >
                        こちら</a>
                </>} />
            <TopicCard title="DiscordのBOT"
                content={<>
                    
                    <div className='text-lg font-semibold'>DiscordのBOTを公開してゲームとして売り出していました。</div>
                    <div className='mt-2'>オンライン上で出来るトークゲームにハマっていた時期があり、そこでdiscordを利用していました。</div>
                    <div className='mt-2'>その中でdiscordのbotを利用することでボイスチャンネルの移動やテキストチャンネルの送信といった動作に合わせてアクションを行うことでゲームをより面白く
                    できそうだと感じたのです。</div>
                    <div className='mt-2'>使用した技術→JavaScript,MongoDB,Render</div>
                </>} />
            <TopicCard title="謎解きゲーム"
                content="" />
            <TopicCard title="企業研修"
                content="" />
        </ContentBody>
    )
}

export default Works