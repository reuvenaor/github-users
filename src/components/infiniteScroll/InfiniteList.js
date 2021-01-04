
import GithubCard from '../githubCard'

const InfiniteList = ({data}) => {

  return (
    <>
      {
        data.map((user, idx) => {
          return <GithubCard data={user} key={idx}/>
        })
      }
    </>
  )
}

export default InfiniteList;