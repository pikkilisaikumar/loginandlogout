import './index.css'

const Message = props => {
  const {logindata} = props
  return <h1 className="headingfirst">{logindata}</h1>
}

export default Message
