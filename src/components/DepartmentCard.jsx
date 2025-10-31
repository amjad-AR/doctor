import React from 'react'

const DepartmentCard = ({img, title1, title2}) => {

  return (
    <div className="border-(--Dark_Mode_BG) border text-2xl text-(--Dark_Mode_BG) p-4 rounded-sm shadow-md hover:shadow-lg hover:-translate-1 transition-all duration-300 cursor-poitner">
      <div className="mb-4 flex flex-row justify-start items-center gap-4">
        <div className="w-20 h-20 bg-(--Dark_Mode_BG) flex items-center justify-center">
          <img src={img} alt="image" />
        </div>
        <h2>{title1}</h2>
      </div>
      <p>{title2}</p>
      <a href="">READ MORE</a>
    </div>
  );
}

export default DepartmentCard