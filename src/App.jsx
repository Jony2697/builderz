import './App.css'
import Blog from './components/Blog'
import Boost from './components/Boost'
import HeroSection from './components/HeroSection'
import Intro from './components/Intro'
import Layout from './components/Layout'
import QualityFeature from './components/QualityFeature'
import Support from './components/Support'
import Testimonial from './components/Testimonial'

function App() {
 

  return (
    <>
      
     <Layout>
      <HeroSection></HeroSection>
      <QualityFeature></QualityFeature>
      <Boost></Boost>
      <Intro></Intro>
      <Testimonial></Testimonial>
      <Support></Support>
      <Blog></Blog>     
     </Layout>
      
      
    </>
  )
}

export default App
