import React, { useState } from 'react'
import { mediaJSON } from '../assets/videos/data'
import ReactPlayer from "react-player"

function VedioPlayer() {
  console.log(mediaJSON.categories[0].videos)

  const [vedioUrl, setVedioUrl] = useState(mediaJSON.categories[0].videos[0].sources)


  return (
    <div className=' overflow-hidden'>

      <nav className='shadow-2xl  h-[50px] fixed w-[100vw] bg-neutral-800 text-slate-200' >
        Video Player
      </nav>

      <div className=' left-[15%] top-[40%] -z-10 mt-[150px] -mr-[20%]'>
        <div className='flex justify-center xl:flex-row flex-col  h-[80vh]  mt-[30px] w-fit '>
          <div className=' flex  items-center   w-[50%]'>

            {
        
              <div className=' -mt-[20%]   shadow-2xl w-[100vw] '>  <ReactPlayer url={vedioUrl} playing={true} controls={true} player={true} loop={true} width='100%'
                height='100%'
              />

              </div>
            }

          </div>

          <div className=' h-fit '>

            <div className='flex flex-col  h-[62vh] w-[50%]  ms-3 rounded-2xl overflow-scroll  overflow-x-hidden scroll-m-4 '>

              <div className=''>
                <button className='border-2 border-black ms-3 rounded px-3'
                  onClick={() => {

                    mediaJSON.categories[0].videos.reverse()
                    setVedioUrl(mediaJSON.categories[0].videos[0].sources)
                  }}
                >Shuffle</button>
              </div>

              {
                mediaJSON.categories[0].videos.map((video, index) => {
                  return <div
                    onClick={() => {
                      setVedioUrl(video.sources)
                    }}
                    className='flex my-3 w-[100%]'>
                    <div className='   flex items-center gap-3'>
                      <img src={"http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/" + video.thumb} alt="thumb" className='w-[40%] rounded-lg ' />
                      { }
                      <div className='font-bold'>{video.title} </div>
                    </div>

                  </div>
                })
              }
            </div>
          </div>

        </div>

      </div>

    </div>
  )
}

export default VedioPlayer
