import { sql } from "@vercel/postgres"
import Input from "../../components/Input"
import { Separator } from "../../components/Separator"
import { Text } from "../../components/Text"
import { useEffect, useState } from "react"
import * as Type from "../data/Types"
import './Language.scss'
import { Button } from "../../components/Button"

interface Props { }

export function Language() {
  const [editingId, setEditingId] = useState<number | null>(null)
  const [languages, setLanguages] = useState<Type.Language[]>([])

  const [iso, setIso] = useState<string>('')
  const [name, setName] = useState<string>('')

  useEffect(() => {
    loadLanguages()
  }, [])

  useEffect(() => {
    if (editingId) {
      const lang = languages.find(l => l.id == editingId)
      if (lang) {
        setIso(lang.iso)
        setName(lang.name)
      }
    } else {
      setIso('')
      setName('')
    }
  }, [editingId])

  async function loadLanguages() {
    const data = await sql`SELECT * FROM Languages;`
    setLanguages(data.rows as Type.Language[])
  }

  async function addLanguage() {
    await sql`INSERT INTO Languages(iso, name) VALUES(${iso}, ${name});`
    await loadLanguages()
  }

  async function saveLanguage() {
    await sql`UPDATE Languages SET iso=${iso}, name=${name} WHERE id=${editingId};`
    await loadLanguages()
    setEditingId(null)
  }

  async function deleteLanguage(id: number) {
    await sql`DELETE FROM Languages WHERE id=${id};`
    await loadLanguages()
  }

  return (
    <div className="language">
      <div>
        <Separator label={<Text size="medium">Add language</Text>} />
        <div className="add">
          <Input value={iso} label={<Text>ISO code</Text>} onChange={setIso}></Input>
          <Input value={name} label={<Text>Name</Text>} onChange={setName}></Input>
          <div className="actions">
            {editingId
              ? <>
                <Button label={<Text>Save</Text>} onClick={saveLanguage}></Button>
                <Button label={<Text>Cancel</Text>} onClick={() => setEditingId(null)}></Button>
              </> :
              <Button label={<Text>Add</Text>} onClick={addLanguage}></Button>
            }
          </div>
        </div>
      </div>
      <div>
        <Separator label={<Text size="medium">List languages</Text>} />
        <div className="list">
          <div className="row header">
            <Text>ISO</Text>
            <Text>Name</Text>
            <Text>X</Text>
          </div>
          {languages.map(l => (
            <div key={l.id} className="row" onClick={() => setEditingId(l.id)}>
              <Text>{l.iso}</Text>
              <Text>{l.name}</Text>
              <Button label={<Text>X</Text>} onClick={() => deleteLanguage(l.id)} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}