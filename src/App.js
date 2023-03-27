import * as React from 'react';
import Button from '@mui/joy/Button';
import Box from '@mui/joy/Box';

export default function BasicButtons() {
  return (    
    <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', backgroundColor: 'rgba(255 255 255 / 0.6)',}} >
      <Button>Button</Button>
      <Button disabled>Disabled</Button>
      <Button loading>Loading</Button>
    </Box>
  );
}
