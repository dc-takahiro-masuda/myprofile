import React from "react"

const AboutPortfolio: React.FC = () => {
    return (
        <div>
            <div className="font-semibold">ポートフォリオとして乗せれるサイトが殆ど無かったため、このサイトを作成しました。</div>
            <div>このサイトのソースコードは<a className="alink" href="https://github.com/dc-takahiro-masuda/myprofile">こちら</a>に載せておきます。</div>
            <div><span>使用した技術:</span>Next.js, TypeScript</div>
        </div>
    )
}

export default AboutPortfolio