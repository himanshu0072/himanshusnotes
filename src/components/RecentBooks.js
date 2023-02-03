import React from 'react'

export default function RecentBooks() {
  return (
    <>
    <div className='styleForAll'>
    <h3>Recent Book I have Studied</h3>
    <div className="SubNews">
        <div className="SubDiv">
            <a href="/Energy/Transmission">
                <div className="NewsImage"><img alt="Sub News" src="https://media.gatesnotes.com/-/media/Images/Articles/Energy/Transmission/BE_transmissions_2023_20230119_thumbnail_320x320.ashx" data-src="https://media.gatesnotes.com/-/media/Images/Articles/Energy/Transmission/BE_transmissions_2023_20230119_thumbnail_320x320.ashx"/>
                </div>
                <div>
                    <p>The surprising key to a clean energy future</p>
                    <p className="text-muted">If you care about climate change, you should care about transmission.</p>
                </div>
            </a>
        </div>
        <div className="SubDiv">
            <a href="/About-Bill-Gates/2023-Reddit-AMA">
                <div className="NewsImage"><img alt="Sub News" src="https://media.gatesnotes.com/-/media/Images/Articles/About-Bill-Gates/2023-Reddit-AMA/reddit_recap_2023_20230104_thumbnail_320x320.ashx" data-src="https://media.gatesnotes.com/-/media/Images/Articles/About-Bill-Gates/2023-Reddit-AMA/reddit_recap_2023_20230104_thumbnail_320x320.ashx"/></div>
                <div>
                    <p>Climate change, AI, and more from my latest AMA</p>
                    <p className="text-muted">In this year’s Ask Me Anything, I answered a variety of questions from Redditors around the world.</p>
                </div>
            </a>
        </div>
        <div className="SubDiv">
            <a href="/About-Bill-Gates/The-Year-Ahead-2023">
                <div className="NewsImage"><img alt="Sub News" src="https://media.gatesnotes.com/-/media/Images/Articles/About-Bill-Gates/The-Year-Ahead-2023/year_ahead_2023_20221118_thumbnail_320x320.ashx" data-src="https://media.gatesnotes.com/-/media/Images/Articles/About-Bill-Gates/The-Year-Ahead-2023/year_ahead_2023_20221118_thumbnail_320x320.ashx"/></div>
                <div>
                    <p >The future our grandchildren deserve</p>
                    <p className="text-muted">Times are hard. But I still believe we can make the world better for the next generation. Here's how.</p>
                </div>
            </a>
        </div>
        <div className="SubDiv">
            <a href="/Health/Grassroot-Soccer">
                <div className="NewsImage"><img alt="Sub News" src="https://media.gatesnotes.com/-/media/Images/Articles/Health/Grassroot-Soccer/grassroots-soccer_2022_thumbnail_320px_01.ashx" data-src="https://media.gatesnotes.com/-/media/Images/Articles/Health/Grassroot-Soccer/grassroots-soccer_2022_thumbnail_320px_01.ashx"/></div>
                <div>
                    <p>Grassroot Soccer scores a hat trick for African youth</p>
                    <p className="text-muted">This organization uses the beautiful game to reach millions of young people with lifesaving services.</p>
                </div>
            </a>
        </div>
    </div>

    </div>
    </>
  )
}
