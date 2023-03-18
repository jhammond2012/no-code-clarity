import React, { memo } from 'react';
import { Handle, Position } from 'reactflow';


export default memo(({ data, isConnectable }) => {
  return (
    <div className='bg-white p-2 rounded-md'>
      <Handle
        type="target"
        position={Position.Left}
        onConnect={(params) => console.log('handle onConnect', params)}
        isConnectable={isConnectable}
      />
      <div>
      <p className='text-xs'>Cross Contract Call Cross Contract Call</p>
      </div>
      <Handle
        type="source"
        position={Position.Top}
        id="a"
        style={{ top: -10, background: '#555' }}
        isConnectable={isConnectable}
      />
      <Handle
        type="source"
        position={Position.Right}
        id="b"
        style={{ bottom: 10, top: 'auto', background: '#555' }}
        isConnectable={isConnectable}
      />
    </div>
  );
});