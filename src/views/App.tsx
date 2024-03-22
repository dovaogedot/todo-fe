import './App.sass'
import Board from '../components/Board/Board'
import CrapRepositoryContext from '../store/ApiContext'
import { ITodoRepository } from '../api/ITodoRepository'
import ApiContext from '../store/ApiContext'

interface Props {
  api: ITodoRepository
}

const App = ({ api }: Props) => {
  return (
    <ApiContext.Provider value={api}>
      <div className='app'>
        <Board id={0}/>
      </div>
    </ApiContext.Provider>
  )
}

export default App