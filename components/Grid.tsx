import React from 'react'
import { BentoGrid, BentoGridItem } from './ui/bento-grid'
import { gridItems } from '@/data'

const Grid = () => {
  return (
    <section id="about" className='bg-[#fff0f3] mt-10 pt-5 ml-2 mr-2'>
        
      <BentoGrid className='max-w-7xl mx-auto'>
            {gridItems.map((item) => (
                <BentoGridItem id={item.id} key={item.id} title={item.title} description={item.description} className={item.className} img={item.img} imgClassName={item.imgClassName} titleClassName = {item.titleClassName} spareImg = {item.spareImg} />
            ))}
        </BentoGrid>

    </section>
  )
}

export default Grid