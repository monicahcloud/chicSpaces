import { Link } from 'react-router-dom'

import hero1 from '../assets/hero1.webp'
import hero2 from '../assets/hero2.webp'
import hero3 from '../assets/hero3.webp'
import hero4 from '../assets/hero4.webp'

const carouselImages = [hero1, hero2, hero3, hero4]

const Hero = () => {
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
        <div className="">
          <h1 className="max-w-2xl text-4xl font-bold tracking-tight sm:text-6xl">
            Reimagining Your Shopping Experience
          </h1>
          <p className="mt-8 max-w-xl text-lg leading-8">
            At Chic Spaces, we&apos;re transforming the way you shop for your
            home. Explore our carefully curated selection of furniture and
            decor, all designed to inspire and elevate your space. With a
            user-friendly platform and personalized guidance from our
            knowledgeable team, we make it easy to find the perfect pieces that
            reflect your unique style. Welcome to a shopping experience
            that&apos;s as enjoyable as your home will be!
          </p>
          <div className="mt-10">
            <Link to="/products" className="btn btn-primary">
              Our Products
            </Link>
          </div>
        </div>
        <div className="hidden h-[28rem] lg:carousel carousel-center p-4 space-x-4 bg-neutral rounded-box">
          {carouselImages.map((images) => {
            return (
              <div className="carousel-item" key={images}>
                <img
                  src={images}
                  className="rounded-box h-full w-80 object-cover"
                />
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default Hero
