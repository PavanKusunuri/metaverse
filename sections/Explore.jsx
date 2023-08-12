'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import styles from '../styles';
import { ExploreCard, TitleText, TypingText } from '../components';
import { staggerContainer } from '../utils/motion';
import { exploreWorlds} from '../constants';


const Explore = () => {
  const [active, setActive] = useState(3)
  return(
  <section className={`${styles.paddings}`} id="explore">
    <motion.div
    variants={staggerContainer}
    initial="hidden"
    whileInView="show"
    viewport={{ once: false, amount: 0.25 }}
    className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
<TypingText  title="|The World" textStyles="text-center" />
<TitleText title={<>Choose the world you want <br className="md:block hidden" /> to explore</>}  textStyles="text-center" />
<div className='mt-[50px] flex lg:flex-row flex-col min-h-[70vh] gap-5'>
{ exploreWorlds.map((world, index)=>(
  <ExploreCard
  key={world.id}
  {...world}
  index={index}
  active={active}
  handleClick={setActive}
  />
))}
</div>
<p className="font-normal text-[16px] leading-[20px] text-white uppercase"> Enter the Metaverse</p>
<h2 className="mt-[24px] font-semibold sm:text-[32px] text-[24px] text-white">
  Hello
  
  {/* {title} */}
  </h2>

    </motion.div>
  </section>
);
}
export default Explore;
