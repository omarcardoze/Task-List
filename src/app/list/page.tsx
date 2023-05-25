import React from 'react'
import styles from './list.module.css'
import { getUserList } from '../services/getUserList'
import CardUser from '../components/CardUser'

interface ListResult {
  id: number
  name: string
  createdAt: string
  avatar: string
}

export default async function list() {
  const listUsers: ListResult[] = await getUserList()
  return (
    <main className={styles.container}>
      <div className={styles.users}>

        {
          listUsers.length === 0 && <p>Cargando....</p>
        }

        {listUsers.map((user) => (
          <CardUser key={user.id} user={user} />
        ))}
      </div>
    </main>
  )
}
