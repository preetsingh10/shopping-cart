
function QuantityUpdater({ useTimes,setTimes,item }) {

    return (
        <div>
            <button onClick={() => setTimes(useTimes + 1)}>+</button>
            <input type="number" name="times" id="times" value={useTimes} />
            <button onClick={()=>setTimes(useTimes !==1? useTimes - 1: 1)}>-</button>
        </div>
    )
}
export default QuantityUpdater