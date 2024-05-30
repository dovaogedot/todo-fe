import Graph from '../components/eurovision/Graph'

type Performance = {
  country: string,
  artist: string,
  song: string,
  spotify: number,
  youtube: number,
  ecs_live: number,
}

type Contest = {
  year: number
  performances: Performance[]
}

const data: Contest[] = [
  {
    year: 2024,
    performances: [
      {
        country: 'Croatia',
        artist: 'Baby Lasagna',
        song: 'Rim Tim Tagi Dim',
        spotify: 7887359,
        youtube: 4173399,
        ecs_live: 0
      }, {
        country: 'Ukraine',
        artist: 'Alyona Alyona & Jerry Heil',
        song: 'Teresa & Maria',
        spotify: 12369735,
        youtube: 1152368,
        ecs_live: 0
      }, {
        country: 'Switzerland',
        artist: 'Nemo',
        song: 'The Code',
        spotify: 7570672,
        youtube: 165106,
        ecs_live: 0
      }
    ]
  }
]

export default function Eurovision() {
  return (
    <div className='full-width flex-column'>
      <Graph performances={data[0].performances}/>
      <Graph performances={data[0].performances}/>
    </div>
  )
}