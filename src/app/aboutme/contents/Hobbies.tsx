import { FadeInRight } from "@/mycomponents/FadeInRight"
import IndentBlock from "@/mycomponents/IndentBlock"
import React from "react"

const Hobbies: React.FC = () => {
    return (
        <>
            <FadeInRight>
                <IndentBlock
                    title="ボードゲーム"
                    content={`
              １０年位前にカタンの開拓者というボードゲームにおもちゃ屋さんで出会ったのをきっかけに、
              ドイツボードゲームを集めるようになりました。
              今でも時折ボードゲームカフェに行ったり、Board Game Arenaで遊んだりしています。
              好きなゲームはクアックサルバー、Cryptidです。
              `}
                />
            </FadeInRight>
            <FadeInRight>
                <IndentBlock
                    title="読書"
                    content={
                        <>
                            <div>本を読むのが好きです。ジャンルは特にこだわりませんが、
                                ミステリーを読んでいることが多いです。
                                最近読んで面白かった本はこちら</div>
                            <div>
                                <a className="text-blue-400 underline underline-offset-4" href="https://www.amazon.co.jp/%E6%96%B9%E8%88%9F-%E5%A4%95%E6%9C%A8%E6%98%A5%E5%A4%AE-ebook/dp/B0BC8HZZZN/ref=sr_1_1?__mk_ja_JP=%E3%82%AB%E3%82%BF%E3%82%AB%E3%83%8A&crid=22SIXV5S3UKSY&dib=eyJ2IjoiMSJ9.2enDQ4fsm4zzCp7xIcmes49PByiKdC2QQTgnk3evuUzPpRN613qCsAYl6B6fDPWPRtZuKI9LsIdeVQQ7KTbgPI21JbD0B7gw5UWF05hPk_1-4Xm4TxzbZL48l0e37heIxLfIPTEAYbmqo5QjAhX63IjisvTR3mV3Hgr45T5DVRKqgPfNfBGu6E9Gu58EZ2C9hdHVb1OjxzK3kSFczCYM-lNmCuxTei44RJqg56ns2jacYNNioLn5dHSwpNQJnHcAwPQBeJMxyXHynrcTUrufVi9tDr2pL3VE8nsb-Jy2zlQ.DwQ32Shvdogi-6DV5lFu5HCl6YnQmiY6clw6fc4jWYg&dib_tag=se&keywords=%E6%96%B9%E8%88%9F&qid=1717559525&sprefix=%E6%96%B9%E8%88%9F%2Caps%2C267&sr=8-1">
                                    方舟
                                </a>
                            </div>
                            <div>
                                <a className="text-blue-400 underline underline-offset-4"
                                    href="https://www.amazon.co.jp/dp/B0CN6DFBWV/ref=sspa_dk_detail_3?psc=1&pd_rd_i=B0CN6DFBWV&pd_rd_w=4Gc90&content-id=amzn1.sym.4519c587-1a66-4b67-a87f-559231103a05&pf_rd_p=4519c587-1a66-4b67-a87f-559231103a05&pf_rd_r=01TE7DVYYD5J4VAARB3R&pd_rd_wg=B1CG7&pd_rd_r=3d08bb50-78ce-48da-8a90-6c5a970b0ed2&sp_csd=d2lkZ2V0TmFtZT1zcF9kZXRhaWwy">
                                    地雷グリコ
                                </a>
                            </div>
                            <div>
                                <a className="text-blue-400 underline underline-offset-4"
                                    href="https://www.amazon.co.jp/%E3%82%A8%E3%83%AC%E3%83%95%E3%82%A1%E3%83%B3%E3%83%88%E3%83%98%E3%83%83%E3%83%89-%E8%A7%92%E5%B7%9D%E6%9B%B8%E5%BA%97%E5%8D%98%E8%A1%8C%E6%9C%AC-%E7%99%BD%E4%BA%95-%E6%99%BA%E4%B9%8B-ebook/dp/B0CHR786F9/ref=sr_1_3?__mk_ja_JP=%E3%82%AB%E3%82%BF%E3%82%AB%E3%83%8A&crid=3NM2O26YWBSHQ&dib=eyJ2IjoiMSJ9.LlizvtbEUrKH51wUeXzSqtFzfJhOnlIdJ4iBGLO2M4E1vgp3rM2H7KuSgVHIS_TPS9Th6nbDBRMdpHPlXT3bRL5lSAyXBcb5nELJ69UAeFDYTZ7FpPypOTga5OC_84ijSakSZi4ASUOIwllLPGs0Vs7HdQZkgM958B7bT4CfdUDBk9hk2kIfgFQj14O6ff8mZJQAXjGOy6N2883YV52-HeXgZr3Lp6Z_oXYoSHhmk7g.1zcy54fkhJRfimGQ7H7_PY7Anjyk3N8gwgdxdOYh2v8&dib_tag=se&keywords=%E3%82%A8%E3%83%AC%E3%83%95%E3%82%A1%E3%83%B3%E3%83%88&qid=1717559686&s=digital-text&sprefix=%E3%82%A8%E3%83%AC%E3%83%95%E3%82%A1%E3%83%B3%E3%83%88%E3%83%98%E3%83%83%E3%83%89%2Cdigital-text%2C171&sr=1-3">
                                    エレファントヘッド
                                </a>
                            </div>
                        </>
                    }
                />
            </FadeInRight>
            <FadeInRight>
                <IndentBlock
                    title="競技プログラミング"
                    content={
                        `勉強も兼ねて、AtCoderというサイトで競技プログラミングにチャレンジしています。
                                    言語はPythonを使用しており、レーティングは緑色です。水色になれるように頑張ってます！`
                    }
                />
            </FadeInRight>
            <FadeInRight>
                <IndentBlock
                    title="謎解きゲーム"
                    content={`
              ミステリー好きが転じて、謎解きをするタイプのゲームでもよく遊びます。
              リアル脱出ゲームとかアドベンチャーゲームとかが好きです。
              自分で作ることもあります！
              `}
                />
            </FadeInRight>
        </>
    )
}

export default Hobbies