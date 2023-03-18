import React, { memo } from 'react';
import { Handle, Position } from 'reactflow';


export default memo(({ data, isConnectable }) => {
  return (
    <div className='custom-node'>
      <Handle
        type="target"
        position={Position.Left}
        style={{ background: '#555' }}
        onConnect={(params) => console.log('handle onConnect', params)}
        isConnectable={isConnectable}
      />
      <div>
        Cross Contract Call Cross Contract Call
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