import React from 'react'
import { FaEdit } from 'react-icons/fa';
import Button from '@mui/material/Button'; 

function Edit() {
  return (
    <div>
      <Button className="btn text-primary fs-2">
        <FaEdit />
      </Button>
    </div>
  );
}

export default Edit
