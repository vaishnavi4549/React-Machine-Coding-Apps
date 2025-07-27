import React,{useState, useEffect, useRef} from 'react';
import Loading from './Loading.gif';


function App() {
  const [photos,setPhotos] = useState([]);
  const [pageno,setpageno] = useState(1);
  const [loading,setloading] =useState(false);
  
  const fetchPhotos = async (pageno)=>{
    const Access_Key = "-uY7ZyWJT-m8mqkhTVgPRJ_MSq-OcCwB7dgwOuXhtsw"
    const res = await fetch(`https://api.unsplash.com/photos/?client_id=${Access_Key}&page=${pageno}&per_page=5`)
    const data = await res.json()
    console.log(data);
    // setPhotos(data);
    setloading(true);
    setPhotos(photo=>[...photos,...data])
  }
  useEffect(()=>{
    fetchPhotos(pageno);
  },[pageno])

  const loadmore=()=>{
      setpageno(prevPageNumber=>prevPageNumber+1)
  }

  const pageEnd = useRef();
  useEffect(()=>{
    if(loading){
      const observer = new IntersectionObserver(entries=>{
        if(entries[0].isIntersecting){
            loadmore();
        }
      },{threshold:1});
      observer.observe(pageEnd.current);
    }
  },[loading])
  
  return (
    <div className="App">
      <h1>Infinite scroll image gallery</h1>
      {
          photos.map((photo,index)=>(
            <div className="photos" key={index}>
              <img src={photo.urls.small} alt=""/>
              <p>{photo.user.first_name +' ' +photo.user.last_name}</p>
              <span>Like: {photo.user.total_likes}</span>
            </div>
          ))
      }
      <div className="loading">
        <img src={Loading} alt=""/>
      </div>
      <h3>{photos.length}</h3>
      <button onClick={loadmore} ref={pageEnd}>Load More</button>
    </div>
  );
}

export default App;
