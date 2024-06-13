import React from "react"

const CorpolateTraining: React.FC = () => {
    return (
        <div>
            <h2 className="font-bold">ドリームキャリア内で2か月間研修を受けました。</h2>
            <div>
                研修ではhtmlやインターネットの仕組みなど初歩的な部分から始まって、最終的にはReactとSpringBootを学び、それを用いた開発演習を行いました。
            </div>
            <div>
                研修の中で特に学びになったと感じたのは<span className="text-red-500 font-semibold">チーム開発</span>です。
                私はそれまでプログラミングを1人でしか行ったことが無かったため、チーム開発の進め方やgithubの使用方法などは大いに学びになりました。
            </div>
            <div>
                チーム開発では便の形状や周期を記録するうんちカレンダーをSpringBootとReactを用いて作成しました。
            </div>
        </div>
    )
}

export default CorpolateTraining