import React from 'react'
import phoneImg from './images/phone.svg'
import { useGlobalcontext } from './context'

const Hero = () => {
const {closesubmenu} = useGlobalcontext()

  // const data = useGlobalcontext()
  // console.log(data);
  return (
    <section className="hero" onMouseOver={closesubmenu}>
      <div className="hero-center">
      <article className="hero-info">
      <h1>Payments infrastructure for the internet</h1>
        <p>
        Millions of businesses of all sizes—from startups to large enterprises—use Stripe’s software and APIs to accept payments, send payouts, and manage their businesses online.
        </p>
        <button className="btn">
          Start now
        </button>
      </article>
      <article className="hero-images">
      <img src={phoneImg} className="phone-img" alt="phone" />
      </article>
      </div>
    </section>
  )
}

export default Hero
