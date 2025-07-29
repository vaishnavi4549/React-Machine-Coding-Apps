import {useState} from 'react'

export const Structure=({directoryData})=>{
    const [expand, setExpand] = useState(false);
    console.log('heyy', directoryData)
    if(directoryData.isfolder){
        return(
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                width:'60%',
                cursor: 'pointer',
            }}>
                <div>
                    <div onClick={()=>{setExpand(!expand)}}>
                        📁{directoryData.name}
                    </div>
                    <div style={{display: expand ? 'block' : 'none', paddingLeft: '30px'}}>
                        {directoryData.items.map((data)=>(
                            <div key={data.id}>
                                {data.isfolder ? <Structure directoryData={data} /> : <span>🗎{data.name}</span>}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        )
    }else{
        return <span>🗎{directoryData.name}</span>
    }
}