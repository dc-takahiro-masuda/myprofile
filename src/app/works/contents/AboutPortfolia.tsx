import React from "react"

const AboutPortfolio: React.FC = () => {
    return (
        <div>
            <div className="font-semibold">ポートフォリオとして乗せれるサイトが殆ど無かったため、このサイトを作成しました。</div>
            <div>
                自己紹介だけでは味気ないので、数独パズルを作ってみました。GAMESタブからご確認ください。
            </div>
            <div>このサイトのソースコードは<a className="alink" href="https://github.com/dc-takahiro-masuda/myprofile">こちら</a>に載せておきます。</div>
            <div>こちらのサイトの内容は今後も充実させていきたいと考えています。</div>
            <div><span>使用した技術:</span>Next.js, TypeScript, Jotai, tailwind</div>
        </div>
    )
}

export default AboutPortfolio
