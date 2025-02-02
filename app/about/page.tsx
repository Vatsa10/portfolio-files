import React from 'react'
import Biography from '@/components/Biography'
import TechList from '@/components/TechList'
import Experience from '@/components/Experience'
import { techItems, experiencesData, educationData } from '@/constants'


const page = () => {
  return (
    <div>
      <Biography 
        heading="About Me" 
        body="I am currently pursuing a Bachelor of Technology (BTech) in Computer Science at Navrachana University, Vadodara. With a deep curiosity for technology and a passion for solving complex challenges, 
        I enjoy exploring the intricate workings of modern computing. Beyond building technical expertise, 
        I am committed to developing essential skills like effective communication, adaptability, and teamwork—qualities that are crucial in today’s fast-paced tech industry.
        I thrive on both academic and hands-on learning, always eager to apply engineering principles in real-world scenarios. Recently, I secured 2nd place in a hackathon, where I worked on a Deep Fake Detection System using AI and ML. This experience reinforced my problem-solving skills and deepened my understanding of cutting-edge technologies.
        I am always open to new learning opportunities and excited to take on challenges that push my boundaries."

        buttonLink="/Vatsa-Resume.pdf" 
        buttonText="Resume" 
        avatar="/photo.jpg"  
      />

      <br /><br />

      <TechList title="What I Use" techItems={techItems} />

      <br /><br />

      <Experience 
        heading="Experience"
        experiences={experiencesData}
      />

      <Experience 
        heading="Education"
        experiences={educationData}
      />
    </div>
  )
}

export default page