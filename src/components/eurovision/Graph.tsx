import './Graph.sass'

type Performance = {
  country: string,
  artist: string,
  song: string,
  spotify: number,
  youtube: number,
  ecs_live: number,
}

interface Props {
  performances: Performance[]
}

export default function Graph({ performances }: Props) {
  return (
    <div className='pane'>
      <div className='panel flex-column full flex-grow'>
        <h1>
          Graph
        </h1>
      </div>
    </div>
  )
}