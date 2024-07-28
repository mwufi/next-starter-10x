"use client";

import React, { useState } from 'react';
import {
    ReactFlow, Background, Controls,
    useReactFlow,
    useNodesState,
    ReactFlowProvider,
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import { Input } from '@/components/ui/input'
import { useHotkeys } from 'react-hotkeys-hook';

const initialNodes = [
    {
        id: '1',
        type: 'iframeNode',
        position: { x: 100, y: 100 },
        data: { url: 'https://example.com', id: '1' },
    },
    {
        id: '2',
        type: 'iframeNode',
        position: { x: 400, y: 200 },
        data: { url: '/play', id: '2' },
    },
];

const Sizes = {
    iphone14Pro: { width: 430, height: 932 }
}

const IframeNode = ({ data }) => {
    const [url, setUrl] = useState(data.url);
    const [isEditing, setIsEditing] = useState(false);
    const reactFlow = useReactFlow();

    const deleteNode = () => {
        console.log('deleting', data)
        reactFlow.deleteElements({ nodes: [data] })
    }

    return (
        <div className='flex flex-col gap-1'>
            <div className="flex justify-between items-center p-4 bg-white/10 rounded-lg">
                <div onClick={() => setIsEditing(true)}>
                    {isEditing ? (
                        <Input
                            value={url}
                            onChange={(e) => setUrl(e.target.value)}
                            onBlur={() => setIsEditing(false)}
                            className='w-full bg-transparent border-none outline-none focus:outline-none focus:ring-0'
                            autoFocus
                        />
                    ) : (
                        <div className='w-full'>
                            {url}
                        </div>
                    )}
                </div>
                <button className="hover:text-white text-gray-300" onClick={deleteNode}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>
            <div style={Sizes.iphone14Pro} className='rounded-lg overflow-hidden'>
                <iframe
                    src={url}
                    title="Embedded content"
                    className="flex-grow rounded-b-lg"
                    style={{ border: 'none', width: '100%', height: '100%' }}
                />
            </div>
        </div>
    )
}


const nodeTypes = {
    iframeNode: IframeNode,
};

function DesignTool() {
    const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
    const reactFlow = useReactFlow();

    const [mouse, setMouse] = useState({ x: 0, y: 0 })
    function updateMousePosition(e) {
        const viewport = reactFlow.getViewport();
        setMouse({
            x: (e.clientX - viewport.x) / viewport.zoom,
            y: (e.clientY - viewport.y) / viewport.zoom
        });
    }

    function createNode() {
        const id = `node-${Date.now()}`;
        const { x, y } = { x: mouse.x, y: mouse.y };
        const newNode = {
            id,
            type: 'iframeNode',
            position: { x, y },
            data: { url: 'https://example.com', id }
        };
        setNodes((nds) => nds.concat(newNode));
    }

    useHotkeys('c', createNode);
    console.log('render!')

    return (
        <div className="flex h-screen bg-gray-400">
            {/* <Sidebar /> */}
            <div className="flex-grow">
                <ReactFlow
                    nodes={nodes}
                    nodeTypes={nodeTypes}
                    onNodesChange={onNodesChange}
                    onMouseMove={updateMousePosition}
                    fitView
                >
                    <Background color="#444" gap={16} />
                    <Controls />
                </ReactFlow>
            </div>
        </div>
    );
}

function DesignToolWrapped() {
    return (
        <ReactFlowProvider>
            <DesignTool />
        </ReactFlowProvider>
    )
}

export default DesignToolWrapped;
