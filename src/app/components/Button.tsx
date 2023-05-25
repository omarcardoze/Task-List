import React from 'react'
import styles from '../page.module.css'

export default function Button(props: {text: string, linkTo: string}) {
    const { text, linkTo } = props
  return (
      <a href={linkTo} className={styles.mainBtn}>{text}</a>
  )
}
