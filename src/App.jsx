
import { useState } from 'react';
import './App.css'


function App() {
  const [colour,setColour]=useState(" #242424");
  document.body.style.backgroundColor=colour;
  function ChangeColor(colour)
  {
    // console.log(colour);
   document.body.style.backgroundColor=setColour(colour);
  }
  return (
    <div className="w-full h-full">
        <div id="Container" className=" p-6 h-25 flex flex-wrap justify-center items-center rounded-2xl space-x-3 bg-cyan-200" >
          <button className="bg-blue-500 text-stone-50" onClick={()=>ChangeColor("#3b82f6")}>Blue</button>
          <button className="bg-red-700 text-stone-50 " onClick={()=>ChangeColor("#b91c1c")}>Red</button>
          <button className="bg-green-700 text-stone-50" onClick={()=>ChangeColor("#15803d")}>Green</button>
          <button className="bg-purple-800 text-stone-50" onClick={()=>ChangeColor("#6b21a8")}>Purple</button>
          <button className="bg-lime-900 text-stone-50" onClick={()=>ChangeColor("#365314")}>Olive</button>
          <button className="bg-yellow-400 text-slate-950" onClick={()=>ChangeColor("#facc15")}>Yellow</button>
          <button className="bg-violet-400 text-slate-950" onClick={()=>ChangeColor("#a78bfa")}>Lavender</button>
          <button className="bg-pink-400 text-slate-950" onClick={()=>ChangeColor("#f472b6")}>Pink</button>
          <button className="bg-stone-50 text-slate-950" onClick={()=>ChangeColor("#fafaf9")}>White</button>
          <button className="bg-stone-950 " onClick={()=>ChangeColor("#0c0a09")}>Black</button>
        </div>
    </div>
  )
}

export default App