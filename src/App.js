import * as React from 'react';
import Button from '@mui/joy/Button';
import Box from '@mui/joy/Box';
import Badge from '@mui/joy/Badge';

export default function BasicButtons() {
  return (    
    <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', backgroundColor: 'rgba(255 255 255 / 0.6)',}} >
      <Badge badgeContent="Nextcloud" >
        <Button img="https://nextcloud.com/wp-content/uploads/2022/11/nextcloud-logo.svg">
        </Button>
      </Badge>
        
    </Box>
  );
}
