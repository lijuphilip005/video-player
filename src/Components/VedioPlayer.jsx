import React, { useState } from 'react'
import { mediaJSON } from '../assets/videos/data'
import ReactPlayer from "react-player"

function VedioPlayer() {
  console.log(mediaJSON.categories[0].videos)

  const [vedioUrl, setVedioUrl] = useState(mediaJSON.categories[0].videos[0].sources)


  return (
    <div className=' overflow-hidden'>

      <nav className='hidden md:block shadow-2xl  h-[50px] fixed w-[100vw] bg-neutral-800 text-slate-200' >
        Video Player
      </nav>

      <div className=' left-[15%] top-[40%] -z-10 mt-[100px] -mr-[20%]'>
        <div className='flex justify-center xl:flex-row flex-col  h-[80vh]  mt-[30px] w-fit '>
          <div className=' flex  items-center w-[100%]  lg:mt-0 mt-0 sm:mt-[200px]  xl:w-[50%] bg-black'>

            {
        
              <div className='shadow-2xl w-[100vw] cursor-pointer' >  <ReactPlayer url={vedioUrl} playing={true} controls={true} player={true} loop={true} width='100%'
                height='100%'
              />

              </div>
            }

          </div>

          <div className=' h-fit '>

            <div className='flex flex-col md:mt-0 mt-9  h-[82vh] w-[100%] md:w-[50%]  ms-3 rounded-2xl overflow-scroll  overflow-x-hidden scroll-m-4 '>

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
                      <img src={"http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/" + video.thumb} alt="thumb" className='sm:w-[40%] w-[20%] rounded-lg ' />
                      { }
                      <div className='font-bold sm:text-[1rem] text-[0.8rem]'>{video.title} </div>
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
