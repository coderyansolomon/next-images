import styles from '../page.module.css'
import ListItem from '../components/ListItem'
import Daytona from '../../public/two-tone-daytona.jpg'
import Image from 'next/image'

export default function Local() {
  return (
    <main className={styles.main}>
      <h1 style={{marginBottom: '40px'}}>Local Images</h1>
      <ul style={{fontSize: '22px', maxWidth: '60vw'}}>
        <ListItem>To use a local image, use an import statement to import the image similar to how you would import a component</ListItem>
        <ListItem>Next JS will automatically determine the width/height of your image based on your imported file preventing layout shift</ListItem>
        <ListItem>You also should import Image from next/image</ListItem>
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
