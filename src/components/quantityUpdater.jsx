
function QuantityUpdater({ useTimes, setTimes }) {
    function inputHandler(e) {

        setTimes(e.target.value)
    }
    return (
        <div>
            <button onClick={() => setTimes(useTimes + 1)}>+</button>
            <input onChange={(e) => inputHandler(e)} type="number" name="times" id="times" value={useTimes} required />
            <button onClick={() => setTimes(useTimes !== 1 ? useTimes - 1 : 1)}>-</button>
        </div>
    )
}
export default QuantityUpdater