import { useState } from "react"
import { RiSearchAi4Fill } from "react-icons/ri";

const HiddenSearchBar = () => {
    const[inpustState,setInputState]=useState(false);
    const bagColor=inpustState?"black":"white";
    const textColor=inpustState?"white":"black";
    const handleSearch=()=>{
        setInputState((prevstate)=>!prevstate);
    }
  return (
    <section style={{backgroundColor:bagColor,color:textColor}}>
        {inpustState?
        (<><input type="text" id="searchbar" /><label htmlFor="searchbar"><RiSearchAi4Fill onClick={handleSearch}/></label></>):
        (<RiSearchAi4Fill onClick={handleSearch}/>)}
    </section>
  )
}

export default HiddenSearchBar