import React from "react"
import { Fragment } from "react"
import { Heading } from "../common/Heading"
import { about } from "../data/dummydata"
// import {CV} from '../../../public/bdf/Taha-Al-Makawie.pdf'

export const About = () => {
  return (
    <>
      <section className='about'>
        <div className='container flex'>
          {about.map((val) => (
            <Fragment>
              <div className='left' data-aos='fade-down-right'>
                <img src={val.cover} alt='' />
              </div>
              <div className='right' data-aos='fade-down-left'>
                <Heading title='About Me' />
                <p>{val.desc}</p>
                <p>{val.desc1}</p>
                <a className="don-cv" download='' href='Taha-Al-Makawie.pdf' ><button>Download CV</button></a>
                <a download href='Taha-Al-Makawie.pdf'  ><button className='primaryBtn'>Download CV</button></a>
              </div>
            </Fragment>
          ))}
        </div>
      </section>
    </>
  )
}
