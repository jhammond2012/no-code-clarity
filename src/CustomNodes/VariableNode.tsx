import React, { memo } from "react";
import { Handle, Position, useStoreApi, useReactFlow } from "reactflow";

type VariableNodeProps = {
  id: string;
  data: {
    label: string;
  };
  isConnectable: boolean;
};

const VariableNode = ({ id, data, isConnectable }: VariableNodeProps) => {
  const { setNodes } = useReactFlow();
  const store = useStoreApi();

  // These three functions could be refactored into one function. Just hacking it out for now.
  // TODO: Refactor into one function
  const onTypeChange = (evt: { target: { value: any } }) => {
    const { nodeInternals } = store.getState();
    setNodes(
      Array.from(nodeInternals.values()).map((node) => {
        console.log("NODE", node);
        if (node.id === id) {
          node.data = {
            ...node.data,
            nodeVarData: {
              ...node.data.nodeVarData,
              type: evt.target.value,
            },
          };
        }

        return node;
      })
    );
  };

  const onNameChange = (evt: { target: { value: any } }) => {
    const { nodeInternals } = store.getState();
    setNodes(
      Array.from(nodeInternals.values()).map((node) => {
        if (node.id === id) {
          node.data = {
            ...node.data,
            nodeVarData: {
              ...node.data.nodeVarData,
              name: evt.target.value,
            },
          };
        }

        return node;
      })
    );
  };

  const onInitialValueChange = (evt: { target: { value: any } }) => {
    const { nodeInternals } = store.getState();
    setNodes(
      Array.from(nodeInternals.values()).map((node) => {
        if (node.id === id) {
          node.data = {
            ...node.data,
            nodeVarData: {
              ...node.data.nodeVarData,
              initial_value: evt.target.value,
            },
          };
        }

        return node;
      })
    );
  };
  return (
    <div className="bg-white rounded-md overflow-hidden">
      <div className="bg-[#7a40ee] w-full text-white text-xs font-bold p-2 pl-6">
        Variable Node
      </div>
      <div className="p-2 flex items-center justify-between">
        <input
          type="text"
          placeholder="Function Name"
          className="p-0 text-xs flex-none outline-none"
          onChange={onNameChange}
        />
        <select
          name="var-type"
          id=""
          className="text-xs"
          onChange={onTypeChange}
        >
          <option value="string">String</option>
          <option value="int">Int</option>
          <option value="float">Float</option>
        </select>
      </div>
      <div className="flex px-2 pb-2">
        <label htmlFor="initial_value" className="text-[10px] mr-2">
          Initial Value:{" "}
        </label>
        <input
          type="text"
          name="initial_value"
          className="text-xs border-b-2"
          onChange={onInitialValueChange}
        />
      </div>
      <Handle
        type="source"
        position={Position.Left}
        id="b"
        style={{
          bottom: "auto",
          left: 10,
          top: 16,
          background: "#555",
          width: 8,
          height: 8,
        }}
        isConnectable={isConnectable}
      />
    </div>
  );
};

export default memo(VariableNode);
