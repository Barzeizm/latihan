import React from 'react'

const Card = ({title = "", icon = "", body = ""}) => {
  return (
    <div className="card w-full bg-base-100 hover:bg-slate-100 shadow-xl group"> 
        <div className="card-body border p-6 border-black rounded-xl hover:outline hover:outline-2 hover:outline-offset-2">
            <h2 className="card-title font-bold">{title}<span className='group-hover:scale-150'>{icon}</span></h2>
            <p className="font-pop">{body}</p>
        </div>
    </div>
  )
}

export default Card
