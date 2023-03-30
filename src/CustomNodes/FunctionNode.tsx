import React, { memo } from "react";
import { Handle, Position } from "reactflow";

type FunctionNodeProps = {
  data: {
    label: string;
  };
  isConnectable: boolean;
};

export default memo(({ data, isConnectable }: FunctionNodeProps) => {
  return (
    <div className="bg-white rounded-md overflow-hidden">
      <div className="bg-[#7a40ee] w-full text-white text-xs font-bold p-2">
        Function Node
      </div>
      <div className="p-2 pt-0">
        <input
          type="text"
          placeholder="Function Name"
          className="w-full p-0 mb-2 text-xs flex-none outline-none"
        />
        <label htmlFor="is_public" className="text-[8px] flex">
          <input type="checkbox" name="is_public" className="mr-1" />
          Is Public?
        </label>
      </div>
      <Handle
        type="source"
        position={Position.Right}
        id="b"
        style={{
          bottom: "auto",
          right: 10,
          top: 16,
          background: "#555",
          width: 8,
          height: 8,
        }}
        className="w-20"
        isConnectable={isConnectable}
      />
    </div>
  );
});
