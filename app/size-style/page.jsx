import styles from '../page.module.css'
import ListItem from '../components/ListItem'
import Daytona from '../../public/two-tone-daytona.jpg'
import Image from 'next/image'

export default function SizeAndStyle() {
  return (
    <main className={styles.main}>
      <h1 style={{marginBottom: '40px'}}>Size & Style</h1>
      <ul style={{fontSize: '22px', maxWidth: '60vw'}}>
        <ListItem>There are 3 ways to size a next/image</ListItem>
        <ListItem>1. Automatically with a local import not setting width/height</ListItem>
        <ListItem>2. Explicitly by adding a width/height property</ListItem>
        <ListItem>3. Implicitly using fill, causing the image to fill it's parent element</ListItem>
        <ListItem>You can style next Images similar to how you'd style a regular HTML img</ListItem>
        <ListItem>However, you should use either className or the style prop, not styled-jsx</ListItem>
        <ListItem>When using fill, the parent element must have position:relative and it also must have display:block</ListItem>
        <ListItem>We can make a full-screen background for the image below using fill and objectFit:cover</ListItem>
        <Image 
        src={Daytona}
        alt="daytona"
        style={{
          width: '100%',
          height: 'auto',
        }}
        />
      </ul>
    </main>
  )
}
