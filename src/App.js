import { useCallback, useRef, useState, useEffect } from 'react';
import ReactFlow, {
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
  ReactFlowProvider
} from 'reactflow';

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from "react-syntax-highlighter/dist/esm/styles/hljs";

import 'reactflow/dist/style.css';

// Custom Nodes
import CustomNode from './CustomNodes/TestNode';
import CrossContractNode from './CustomNodes/CrossContractNode';
import FunctionNode from './CustomNodes/FunctionNode';
import VariableNode from './CustomNodes/VariableNode';
import OperatorNode from './CustomNodes/OperatorNode';

// Components
import Sidebar from './Components/Sidebar';

const initialNodes = [];

const initialEdges = [];

const nodeTypes = {
  CustomNode,
  CrossContractNode,
  FunctionNode,
  VariableNode,
  OperatorNode
}

let id = 0;
const getId = () => `dndnode_${id++}`;

function App() {
  const reactFlowWrapper = useRef(null);
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  const [functionName, setFunctionName] = useState('count-up');
  const [showCode, toggleShowCode] = useState(false);
  const [reactFlowInstance, setReactFlowInstance] = useState(null);
  const [clarityCode, setCode] = useState(``);
  const [clarityVariables, setVariables] = useState([]);

  const onConnect = useCallback((params) => setEdges((eds) => addEdge(params, eds)), []);

  const onDragOver = useCallback((event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = 'move';
  }, []);

  const onDrop = useCallback(
    (event) => {
      event.preventDefault();

      const reactFlowBounds = reactFlowWrapper.current.getBoundingClientRect();
      const type = event.dataTransfer.getData('application/reactflow');

      // check if the dropped element is valid
      if (typeof type === 'undefined' || !type) {
        return;
      }

      const position = reactFlowInstance.project({
        x: event.clientX - reactFlowBounds.left,
        y: event.clientY - reactFlowBounds.top,
      });
      const newNode = {
        id: getId(),
        type,
        position,
        data: { label: `${type} node` },
      };

      setNodes((nds) => nds.concat(newNode));
    },
    [reactFlowInstance]
  );

  // Function to update or add object based on id
  const updateOrAddItem = (id, name) => {
    const items = [...clarityVariables];
    // Check if the id exists in the array
    const itemIndex = items.findIndex(item => item.id === id);
    
    // If the id exists, update the object's name property
    if (itemIndex !== -1) {
      items[itemIndex].name = name;
      setVariables(items);
    } 
    // If the id does not exist, add a new object to the array
    else {
      items.push({ id: id, name: name });
      setVariables(items);
    }
  }

  useEffect(() => {
    // (define-data-var token-name (string-ascii 32) "")
    nodes.map((node) => {
      updateOrAddItem(node?.id, node?.data?.nodeVarData?.name);
    })

    console.log('clarityVariables', clarityVariables);
  }, [nodes]);

  let code = ``;

  useEffect(() => {
    clarityVariables.map((variable) => {
      code += `${variable.id === "dndnode_0" ? '// Define Vars\n' : ""}(define-data-var ${variable.name || ""} (string-ascii 32) "")\n`;
    })

    setCode(code);
  }, [clarityVariables]);

  return (
    <div className='parent'>
      <ReactFlowProvider>
        <Sidebar />
        <div className="w-full h-full" ref={reactFlowWrapper}>
          <ReactFlow
            nodes={nodes}
            edges={edges}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            onConnect={onConnect}
            onDrop={onDrop}
            onDragOver={onDragOver}
            onInit={setReactFlowInstance}
            nodeTypes={ nodeTypes }
            defaultViewport={{ x: 20, y: 20, zoom: 1.5 }}
            className='canvas'
            fitView
          >
            {/* <MiniMap /> */}
            {/* <Controls /> */}
            <Background
              color='#474747'
            />
          </ReactFlow>
        </div>
      </ReactFlowProvider>
      <div className="bg-[#282a36] p-4 w-1/4">
        <div className='p-2 text-xl font-bold text-white'>Contract Code</div>
        <div className=''>
          <SyntaxHighlighter children={clarityCode} showLineNumbers language="javascript" style={dracula} className="text-sm" />
        </div>
      </div>
    </div>
  );
}

export default App;
