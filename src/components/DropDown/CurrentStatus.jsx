import React, { useState } from 'react';
import { Dropdown, Button, Input, Modal } from 'antd';

const CurrentStatus = () => {
  const [currentStatus, setCurrentStatus] = useState('Choose Status');
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [userInput, setUserInput] = useState('');

  const items = [
    {
      key: '1',
      label: 'Completed',
    },
    {
      key: '2',
      label: 'Uncompleted',
    },
    {
      key: '3',
      label: 'User Input',
    },
  ];

  const handleMenuClick = (e) => {
    const selectedOption = items.find(item => item.key === e.key)?.label;
  
    if (selectedOption === 'User Input') {
      setIsModalVisible(true);
    } else {
      setCurrentStatus(selectedOption || 'Choose Status');
    }
  };

  const handleOk = () => {
    setCurrentStatus(userInput || 'Choose Status');
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <div className="pt-4 flex items-center gap-4">
      <label htmlFor="status-dropdown" className="text-white text-lg font-medium">Current Status:</label>
      <Dropdown
        menu={{ items, onClick: handleMenuClick }}
        trigger={['click']}
        id="status-dropdown"
      >
        <Button className="bg-slate-700 text-white px-4 py-2 border-none rounded-xl  duration-300">
          {currentStatus}
        </Button>
      </Dropdown>

      {/* Modal for user input */}
      <Modal
        title="Enter Custom Status"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        okText="Submit"
        cancelText="Cancel"
        className="bg-gray-800 text-white"
      >
        <Input
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          placeholder="Enter your status"
          className="bg-gray-700 text-white border border-gray-500 rounded-md p-2"
        />
      </Modal>
    </div>
  );
};

export default CurrentStatus;
