import { ReactNode, useEffect, useState } from 'react'
import './Admin.scss'
import { Separator } from '../../components/Separator'
import { Text } from '../../components/Text'
import { Language } from '../tabs/Language'
import { Case } from '../tabs/Case'
import { sql } from '@vercel/postgres'

const tabs: { [a: string]: ReactNode } = {
  'Language': <Language />,
  'Case': <Case />
}


export default function Admin() {
  const [selectedTab, setSelectedTab] = useState<string>('Language')
  console.log(selectedTab)

  useEffect(() => {
    async function createTables() {
      return await sql`CREATE TABLE IF NOT EXISTS Languages(
        id SERIAL PRIMARY KEY,
        iso CHAR(2) UNIQUE NOT NULL,
        name TEXT UNIQUE NOT NULL
      );`
    }
    createTables()
  }, [])

  return (
    <div className='admin'>
      <div className='sidebar'>
        {Object.keys(tabs).map((t, i) => (
          <div key={i} className={'tab' + (t == selectedTab ? ' selected' : '')} onClick={() => setSelectedTab(t)}>
            <Text>{t}</Text>
          </div>
        ))}
      </div>
      <div className='content'>
        {tabs[selectedTab]}
      </div>
    </div>
  )
}