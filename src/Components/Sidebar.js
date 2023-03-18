import React from 'react'

function Sidebar() {
  const onDragStart = (event, nodeType) => {
    console.log('[event, nodeType]', event, nodeType)
    event.dataTransfer.setData('application/reactflow', nodeType);
    event.dataTransfer.effectAllowed = 'move';
  };
  return (
    <div className='sidebar p-10 w-1/4'>
      <h1 className='text-center text-white text-4xl font-black mt-6 mb-8'>No-Code STX</h1>
      <div className='mt-6 flex flex-col gap-4'>
        <div className='p-4 bg-[#7a40ee] rounded-md text-white font-bold' onDragStart={(event) => onDragStart(event, 'CrossContractNode')} draggable><i className="fa-solid fa-tent-arrow-left-right mr-2" /> Cross Contract Call</div>
        <div className='p-4 bg-[#7a40ee] rounded-md text-white font-bold' onDragStart={(event) => onDragStart(event, 'FunctionNode')} draggable><i className="fa-solid fa-function mr-2" /> New Function</div>
        <div className='p-4 bg-[#7a40ee] rounded-md text-white font-bold' onDragStart={(event) => onDragStart(event, 'OperatorNode')} draggable><i className="fa-solid fa-brackets-curly mr-2" /> Operator</div>
        <div className='p-4 bg-[#7a40ee] rounded-md text-white font-bold'><i className="fa-solid fa-regular fa-code-compare mr-2" /> Condition</div>
        <div className='p-4 bg-[#7a40ee] rounded-md text-white font-bold'><i className="fa-solid fa-regular fa-user-secret mr-2" /> Post Condition</div>
        <div className='p-4 bg-[#7a40ee] rounded-md text-white font-bold' onDragStart={(event) => onDragStart(event, 'VariableNode')} draggable><i className="fa-solid fa-regular fa-code mr-2" /> Variable</div>
      </div>
    </div>
  )
}

export default Sidebar