import React from 'react'
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';


const IconButton = ({ Icon, buttonName, iconColor, handleSubmit, isLoading }) => {
    return (
        <Button onClick={handleSubmit} variant="contained" startIcon={!isLoading && <Icon />} sx={{
            '&:hover': {
                backgroundColor: 'primary.highlight',
                color: iconColor, 
                boxShadow: 'none',
            },
            '& .MuiButton-startIcon': {
                color: iconColor,
            },
        }}>
            {isLoading ? <CircularProgress size={20} sx={{ color: iconColor }} /> : buttonName}
        </Button>
    )
}

export default IconButton