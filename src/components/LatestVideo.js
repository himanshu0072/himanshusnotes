import React from 'react'

export default function LatestVideo() {
  return (
    <>
    <div className='container-fluid LatestVideos my-2'>
      <div className='Margin_controller'>
      <div className='container HeadingItem my-4'>
        <div><h4>LATEST VIDEOS</h4></div>
        <div><h5>More Videos <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
            </svg></h5>
        </div>
      </div> 

        <div className='VodeoPoster my-2'>
            <div className='item1'>
                <img className="poster my-2" alt='poster 1' src="https://i.ytimg.com/vi/j-OrYOLnPks/maxresdefault.jpg"/>
                <div><a href='/'>My day on an African farm</a></div>
                <div><button type="button" className="btn btn-primary my-4">Read Post</button></div>
            </div>

            <div className='item1'>
                <img className="poster my-2" alt='poster 2' src="https://i.ytimg.com/vi/c7xlTRW8ZLA/maxresdefault.jpg"/>
                <div><a href='/'>The surprising key to a clean energy future</a></div>
                <div><button type="button" className="btn btn-primary my-4">Read Post</button></div>
            </div>

            <div className='item1'>
                <img className="poster my-2" alt='poster 3' src="https://i.ytimg.com/vi/VAWoQLD0VPw/maxresdefault.jpg"/>
                <div><a href='/'>Game Changer</a></div>
                <div><button type="button" className="btn btn-primary my-4">Read Post</button></div>
            </div>        
        </div>
        </div>
   

    </div>
    </>
  )
}
