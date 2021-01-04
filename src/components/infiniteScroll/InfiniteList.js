
const divStyle = {
  color: 'blue',
  height: '250px',
  width: '100vw',
  textAlign: 'center',
  padding: '5px 10px',
  background: '#eee',
  marginTop: '15px',
  overflow: 'scroll'
};

const InfiniteList = ({data}) => {

  return (
    <>
      {
        data.map((user, index) => {
          return (<div key={index} className="post" style={divStyle}>
            <h2> {user.login} </h2>
          </div>)
        })
      }
    </>
  )
}

export default InfiniteList;