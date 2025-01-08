import React, { useState } from 'react';
import { Dropdown, Button } from 'antd';

const PriorityLevel = () => {
  const [currentStatus, setCurrentStatus] = useState('Choose Status'); // Default status

  const items = [
    {
      key: '1',
      label: 'Option A',
    },
    {
      key: '2',
      label: 'Option B',
    },
    {
      key: '3',
      label: 'Option C',
    },
  ];

  const handleMenuClick = (e) => {
    const selectedOption = items.find(item => item.key === e.key)?.label;
    setCurrentStatus(selectedOption || 'Choose Status'); // Update the current status
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
          <Button className="bg-slate-700 border-none text-white px-4 py-2 rounded-xl hover:bg-blue-600 transition duration-300">
            {currentStatus}
          </Button>
        </Dropdown>
      </div>
    </div>
  );
};

export default PriorityLevel;
