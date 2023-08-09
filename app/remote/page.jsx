import styles from '../page.module.css'
import ListItem from '../components/ListItem'
import Image from 'next/image'

export default function Remote() {
  return (
    <main className={styles.main}>
      <h1 style={{marginBottom: '40px'}}>Remote Images</h1>
      <ul style={{fontSize: '22px', maxWidth: '60vw'}}>
        <ListItem>To use a remote image, make the src prop of the Image component a URL string pointing to your remote image</ListItem>
        <ListItem>When using remote images, you need to add a width and height prop manually to your Image component. You need to do this because Next doesn't have access to remote files during build-time</ListItem>
        <ListItem>However, when using width and height, it just sets the Image aspect ratio, it doesn't actually set the size... a little weird, I know. But I don't make the rules okay</ListItem>
        <ListItem>You also need to update your next.config.js with the remote url pattern</ListItem>
        <Image 
        src='https://i.ibb.co/DpntQs6/pexels-joe-caltiere-10996872.jpg'
        alt="omega watch"
        width={525}
        height={400}
        />
      </ul>
    </main>
  )
}
