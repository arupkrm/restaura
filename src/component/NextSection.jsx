import React from 'react'
import missionImg from '../assets/mission.jpeg'
import mission from '../assets/mission.mp4'
import {NEXTSECTION} from '../constants'
function NextSection() {
  return (
    <section id="nextsection">
    <div className='container mx-auto text-center'>
        <h2 className='mb-8 text-3xl lg:text-4xl'>
            Our Mission
            <div className='relative flex items-center justify-center'>
            <video className='w-full rounded-3xl' autoPlay muted loop playInline poster={missionImg} >
                <source src={mission} type="video/mp4"/>
            </video>
            <div className='absolute h-full w-full rounded-3xl bg-black/40'>

            </div>
                <p className='absolute max-w-lg tracking-tighter lg:text-3xl'>
                    {NEXTSECTION}
                </p>
            </div>
        </h2>
    </div>
    </section>
  )
}

export default NextSection