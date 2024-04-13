import { useGSAP } from "@gsap/react";
import gsap from 'gsap';
import { rightImg, watchImg } from "../utils";
import VideoCarousal from "./VideoCarousal";
const Highlights = () => {


    useGSAP(()=>{
        gsap.to('#title',{
            opacity: 1,
            // delay: 2,
            y: 0
        })
        gsap.to('.link',{
            opacity: 1,
            duration: 1,
            y: 0,
            stagger: 0.25
        })
    },[])

  return (
    <section id="highlights" className=" w-screen overflow-hidden h-full common-padding bg-zinc">
      <div className="screen-max-width">
        <div className="mb-12 w-full md:flex items-end justify-between">
            <h1 id="title" className="section-heading">Get the Highlights</h1>
            <div className=" flex flex-wrap items-end gap-5 ">
                <p className="link">Watch the film</p>
                <img src={watchImg} alt="watch" className="ml-2"/>
                <p className="link">Watch the Event</p>
                <img src={rightImg} alt="watch" className="ml-2"/>
            </div>
        </div>
        <div>
            <VideoCarousal />
        </div>
      </div>
    </section>
  )
}

export default Highlights
