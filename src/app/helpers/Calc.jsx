

function Calc({ num1, num2 }) {
   const sum = Number(num1) + Number(num2);
  return (
    <div style={{ padding:"5rem", margin:"3rem", background:"#ccc", color:"#000", fontWeight:"bold", fontSize:"3rem"}}>{sum}</div>
  )
}

export default Calc