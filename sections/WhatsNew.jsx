'use client';
import styles from '../styles';
import { motion } from 'framer-motion';
import { NewFeatures, StartSteps, TitleText, TypingText } from '../components';
import { staggerContainer, fadeIn, planetVariants } from '../utils/motion';
import { newFeatures} from '../constants';


const WhatsNew = () => (
  <section className={`${styles.paddings} relative z-10`}>
  <motion.div
  variants={staggerContainer}
  initial="hidden"
  whileInView="show"
  viewport={{ once: 'false', amount: 0.25}}
  className={`${styles.innerWidth} mx-auto flex lg:row flex-col gap-8`}
  >

<motion.div
variants={fadeIn('right', 'tween', 0.2, 1)}
className="flex-[0.75] flex justify-center flex-col"
>
<TypingText title="| What's New?" />
<TitleText title={<>What's new about Metaversus?</> }/>
<div className='mt-[48px] flex flex-wrap max-w-[370px] gap-[24px]'>
  {newFeatures.map((feature)=> (
    <NewFeatures 
      key={feature.title}
      {...feature}
    />
  ))}
</div>

</motion.div>
<motion.div
variants={planetVariants('left')}
className={`flex-1 ${styles.flexCenter}`}
>
<img 
src="/get-started.png"
alt="get-started"
className="w-[90%] h-[90%] object-contain"
/>
</motion.div>
  </motion.div>
</section>
);

export default WhatsNew;
