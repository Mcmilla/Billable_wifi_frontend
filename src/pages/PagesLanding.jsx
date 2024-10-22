import React from 'react'
import Hero from '../components/Hero/hero';
import Pricing from '../components/Pricing/price';
import SocialProof from '../components/SocialProof/proof';
import FAQSection from '../components/Faq/faq';
import Login from '../components/auth/active'


const PagesLanding = () => {
  return (
    <>
              <Hero />
              <Pricing />
              <Login />
              <SocialProof />
              <FAQSection />
              
    </>
  )
}

export default PagesLanding