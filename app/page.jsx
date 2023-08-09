import ListItem from './components/ListItem'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <h1 style={{marginBottom: '40px'}}>Images Overview</h1>
      <ul style={{fontSize: '22px', maxWidth: '60vw'}}>
        <ListItem>Images are surprisingly tricky in web development</ListItem>
        <ListItem>Next JS makes them easier with various optimizations</ListItem>
        <ListItem>You can use an Image component from next/image</ListItem>
        <ListItem>Next extends the HTML img element</ListItem>
        <ListItem>You get automatic size optimization where Next JS correctly serves the right image size for each device using WebP and AVIF image formats.</ListItem>
        <ListItem>Layout shift is prevented</ListItem>
        <ListItem>Images are lazily loaded -- only loaded when they enter the viewport</ListItem>
        <ListItem>On-demand image resizing and responsiveness</ListItem>
      </ul>
    </main>
  )
}
