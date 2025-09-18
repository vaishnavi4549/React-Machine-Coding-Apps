import { useState } from "react"

export const Structure = ({directoryData})=>{
   const[expand,setExpand] = useState(false);
   const[inputValue,setInputValue] = useState('');
   const[showInput,setShowInput] = useState({
        visible: false,
        isfolder: null
   });

   const handleNewFolderFile=(e, isfolder)=>{
        e.preventDefault();
        setExpand(true);
        setShowInput({
            visible: true,
            isfolder
        })
   }

   const handleNewInput=(e)=>{
    setInputValue(e.target.value);  
   }

   const onAddFolder =()=>{}

   if(directoryData.isfolder){
    return(
        <div style={{
            display: 'flex',
            cursor: 'pointer',
            flexDirection: 'column',
        }}>
            <div>
                <div style={{
                         display: 'flex',
                         width: '60%',
                         justifyContent: "space-between",
                         backgroundColor: 'lightgray',
                         marginBottom: '10px',
                         padding: '5px'
                    }}>
                    <div onClick={()=>setExpand(!expand)}>
                        📁{directoryData.name}
                    </div>
                    <div>
                        <button onClick={(e)=>handleNewFolderFile(e,true)}>Folder&nbsp;+</button>
                        <span>&nbsp;&nbsp;</span>
                        <button onClick={(e)=>handleNewFolderFile(e,false)}>File &nbsp;+</button>
                    </div>
                </div>
                <div style={{display: expand ? 'block' : 'none', paddingLeft: '30px'}}>
                    {
                        showInput.visible && (
                            <div style={{marginBottom: '10px'}}>
                                <span>{showInput.isfolder? "📁" : "🗎"}</span>
                                <input 
                                    type='text'
                                    onChange={(e)=>handleNewInput(e)} 
                                    value={inputValue}/>
                                    <button onClick={(e)=>onAddFolder(e)}>Add</button>
                            </div>
                        )
                    }
                    {directoryData.items.map((data)=>(
                       <div>
                         {data.isfolder ? <Structure directoryData={data}/> : <span>🗎{data.name}</span>}
                       </div>
                    ))}
                </div>
            </div>
        </div>
    )
   }else{
        return<span>🗎{directoryData.name}</span>
   }
}