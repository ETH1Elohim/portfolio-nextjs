import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import hermesImg from '../public/assets/projects/hermesProj.png'
import ProjectItem from './ProjectItem'
import boxBuddyImg from '../public/assets/projects/boxBuddy-main.png'
import blackjackImg from '../public/assets/projects/blackjack1.png'
import odeszaImg from '../public/assets/projects/odesza-forum.png'
import portfolioImg from '../public/assets/projects/portfolio-home.png'


export const Projects = () => {
  return (
    <div id='projects' className='w-full'>

        <div className='max-w-[1240px] mx-auto px-2 py-16'>
            <p className='text-xl tracking-widest uppercase text-[#5651e5]'>Projects</p>
            <h2 className='py-4'>What I've Built</h2>
            <div className='grid md:grid-cols-2 gap-8'>
              
              <ProjectItem title='Box Buddy' description='Full-Stack Mobile Fitness Application' backgroundImg={boxBuddyImg} projectUrl='/boxBuddy' className='w-64 h-32' />
              <ProjectItem title='Hermes App' description='Front-End Crypto Application' backgroundImg={hermesImg} projectUrl='/hermesApp' />
              <ProjectItem title='My Portfolio Site' description='Front-End Next.js Portfolio Site' backgroundImg={portfolioImg} projectUrl='/myPortfolio' />
              <ProjectItem title='Odesza Forum' description='Odesza forums with Socket.io' backgroundImg={odeszaImg} projectUrl='/odeszaForum' />
              <ProjectItem title='Blackjack Game' description='Logic-based Blackjack Game' backgroundImg={blackjackImg} projectUrl='/blackjack' />
              
            </div>
        </div>
    </div>
  )
}
