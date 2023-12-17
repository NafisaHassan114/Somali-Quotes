import { useState } from "react"

function SomaliQuotes(){
    const [index, setIndex]= useState(0)
    const Maahmaah = ["1.Habar fadhido lagdan la fudud",
                    "2.Af daboolan waa dahab",
                    "3.Gacmo wadajir bay wax ku gooyaan ",
                    "4.Nin is faanshay waa ri' is nuugtay",
                    "5.Far kaliya fool ma dhaqdo",
                    "6.Labo kala bariday kala war la'",
                     "7.Af jooga looma adeego",
                    "8.Abaal qof galay waa la arkay qof gudaase yar",
                    "9.Alla aamin ma iisho",
                    "10.Aadane eed ma waayo"]

                    const nextBtn = ()=>{
                       if(index < Maahmaah.length -1)
                       setIndex(index +1)
                    }
                    const preBtn = ()=>{
                        if(index >0)
                        setIndex(index -1)
                    }
                    
            
                    
                    

    return <div className="text-center ">
        <p style={{display: index == Maahmaah.length -1 ? "block" : "none"}} className="text-3xl text-red-500 font-bold"> Dhamaad</p>
        <p className={`text-2xl mt-14 ${index == Maahmaah.length -8 ? "text-red-500" : ""}`}>{Maahmaah[index]} </p>
        <div className="mt-[150px]">

        <button onClick={preBtn} className="bg-blue-500 px-8 py-3 rounded text-white text-3xl ">Previous</button>
        <button onClick={nextBtn} className="bg-blue-500 px-8 py-3 rounded text-white text-3xl ml-8">Next</button>
      </div>
    </div>
}

export default SomaliQuotes