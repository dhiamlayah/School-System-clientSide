import { useEffect } from "react";

const Pagination = ({parents,showPartOfParents}) => {
    const paginatoTo=Math.ceil(parents.length/5)
    const list=[]
    useEffect(()=>{
        showPartOfParents(0,5)
    },[])

    if(paginatoTo === 1 || paginatoTo ===0 ){
        return null   
    }
    for(let i=1 ;i<=paginatoTo ;i++){
        list.push(i)
    }
   return (
    <nav>
      <ul className="pagination pagination-sm   justify-content-center">
        {list.map((count)=>{
            return (
                <li className="page-item" key={count}>
                    <button className=" btn btn-secondary mx-1 " onClick={()=>{showPartOfParents((count-1)*5,((count-1)*5)+5)}}>{count}</button>
                 </li>
             )
        })}    
      </ul>
    </nav>
  );
};

export default Pagination;
