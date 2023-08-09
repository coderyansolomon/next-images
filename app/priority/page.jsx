import styles from '../page.module.css'
import ListItem from '../components/ListItem'
import Daytona from '../../public/two-tone-daytona.jpg'
import Rolex from '../../public/rolex-2.jpg'
import Image from 'next/image'

export default function Priority() {
  return (
    <main className={styles.main}>
      <h1 style={{marginBottom: '40px'}}>Priority</h1>
      <ul style={{fontSize: '22px', maxWidth: '60vw'}}>
        <ListItem>Add a priority prop to the Image component that will be the largest contentful paint</ListItem>
        <ListItem>This allows Next.js to load this image first, improving your LCP core web vital</ListItem>
        <ListItem>The LCP element is usually the largest image visiable within the viewport of the page</ListItem>
        <ListItem>Slow 3g demo</ListItem>
        <Image 
        priority
        src={Daytona}
        alt="daytona"
        style={{
          width: '100%',
          height: 'auto',
        }}
        />
          <Image 
        src={Rolex}
        alt="rolex watch"
        style={{
          width: '100%',
          height: 'auto',
        }}
        />
      </ul>
    </main>
  )
}
