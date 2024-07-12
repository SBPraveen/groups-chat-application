import { InputBase } from '@mui/material';
import React from 'react'

const CustomTextField = ({ placeholder, multiline = false, rows = 0, sx = {}, setState }) => {
    return (
        <InputBase
            multiline={multiline}
            rows={rows}
            onChange = {(event) => setState(event.target.value)}
            placeholder={placeholder}
            sx={{
                ...sx,
                width: "100%",
                '& .MuiInputBase-input': {
                    padding: '0px',
                },
                '& textarea': {
                    scrollbarWidth: 'none', /* Firefox */
                    '&::-webkit-scrollbar': {
                        display: 'none', /* Safari and Chrome */
                    },
                },
            }}
        />

    )
}

export default CustomTextField
