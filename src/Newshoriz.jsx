import React from 'react'
import { useState,useEffect } from 'react';
import ReactPaginate from "react-paginate";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWindowClose } from '@fortawesome/free-solid-svg-icons'
const Newshoriz = () => {
  const [items, setItems] = useState([])
  useEffect(() => {
    const getdata = async () => {

      const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_page=1&_limit=6`);
   const data= await res.json();
   setItems(data);
    
    };
    getdata();
  }, []);
  const fetchData=async(currentPage)=>{
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_page=${currentPage}&_limit=6`);
    const data = await res.json();
    return data;
  };
  
  const handlePageClick= async (data)=>
  {
    
     let currentPage= data.selected+1
     const fetchapi=await fetchData(currentPage); 
     setItems(fetchapi);

  };
  const deleteItem=(id)=>{
    const newList = items.filter((curElem)=> curElem.id !== id)
    setItems(newList);
  }
    return (
        <> <div>
          <div className="horizontal-container">
          { 
            
            items.map((curElem)=> {
              return(
                <>
                 
                <div className="card">
                <FontAwesomeIcon className="delete-btn" onClick={()=>deleteItem(curElem.id)} icon={ faWindowClose} />
  <div className="card-body">
    
 
    <h5 className="card-title">{curElem.title}</h5>
 
    <p className="card-text">{curElem.body}</p>
    <img src="./image.jpg" className ="img-horizontal" alt="..."/>
    
  </div>
</div>
                </>
              )
         }  )
          }</div>
      <ReactPaginate
      previousLabel={'<<'}
      nextLabel={'>>'}
      breakLabel={'...'}
      pageCount={6}
      marginPagesDisplayed={2}
      pageRangeDisplayed={2}
      onPageChange={handlePageClick}
      containerClassName={'pagination fixed-bottom justify-content-center'}
      pageClassName={'page-item'}
      pageLinkClassName={'page-link'}
      previousClassName={'page-item'}
      previousLinkClassName={'page-link'}
      nextClassName={'page-item'}
      nextLinkClassName={'page-link'}
      breakClassName={'page-item'}
      breakLinkClassName={'page-link'}
      activeClassName={'active'}

        />
      </div>

        )
             
        </>
    )
}

export default Newshoriz
