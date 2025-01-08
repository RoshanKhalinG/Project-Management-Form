import React, { useState } from 'react';
import { Dropdown, Button } from 'antd';
import { DownOutlined } from '@ant-design/icons'; 


const PriorityLevel = () => {
  const [currentPriority, setCurrentPriority] = useState('Choose Status'); 
  

  const items = [
    { key: "1", label: "High" },
    { key: "2", label: "Medium" },
    { key: "3", label: "Low " },
  ];

  const handleMenuClick = (e) => {
    const selectedOption = items.find(item => item.key === e.key)?.label;
    setCurrentPriority(selectedOption || 'Choose Priority'); 
    
  };

  return (
    <div className="pt-4">
      <div className="flex items-center gap-4">
        <label htmlFor="status-dropdown" className="text-white text-lg font-medium ">
          Priority Level:
        </label>
        <Dropdown
          menu={{ items, onClick: handleMenuClick }}
          trigger={['click']}
          id="status-dropdown"
        >
          <Button className="bg-slate-700 border-none text-white px-2 py-2 rounded-xl hover:bg-blue-600 transition duration-300">
            {currentPriority}
            <DownOutlined/> 
          </Button>
        </Dropdown>
      </div>
    </div>
  );
};

export default PriorityLevel;
