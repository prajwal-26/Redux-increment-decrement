
import './App.css'
import {useSelector} from 'react-redux'
import { useDispatch } from 'react-redux'
import {Inc,Dec} from './states/reducers/index'
function App() {
 
const curState = useSelector((state)=> state.incdec.value)
const dispatch = useDispatch();
console.log(curState);
  return (
    <>
     <div className="container">
      <h1>redux</h1>
      <br />
      <br />
       {curState}
       <br />
       <br />
     
     
      <button onClick={()=> dispatch(Inc())}>inc</button>
      <button onClick={()=> dispatch (Dec())}>dec</button>
     </div>
       
    </>
  )
}

export default App
