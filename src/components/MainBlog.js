import React from 'react'

export default function MainBlog() {
  return (
    <>
    <div className='styleForAll'>
    <div className="MainNews">
        <div className="leftDiv">
            <img src="https://media.gatesnotes.com/-/media/Images/Articles/Energy/African-Smallholder-Farmers-Adaptation-and-Innovation/African_Smallholder_farmers_20230104_homepage-hero_568x408.ashx" alt="MAin News"/>  
        </div>
        <div className="rightDiv">
            <p className="NewsTitle"><u>Farm work</u></p>
            <p className="NewsHeading" >On Africa’s farms, the forecast calls for adaptation and innovation.</p>
            <p className="NewDesc">In Kenya, I visited with a smallholder farmer using new tools and practices to fight back against climate change.</p>
            <small className="text-muted">By Bill Gates | January 31, 2023 </small>
        </div>
    </div>
    </div>
    </>
  )
}
