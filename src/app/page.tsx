import styles from './page.module.css'
import Button from './components/Button'

export default function Home() {
  return (
    <main className={styles.main}>
      <Button text='Tasks' linkTo='/tasks' />
      <Button text='List' linkTo='/list' />
    </main>
  )
}
