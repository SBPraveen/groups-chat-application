import { InputBase } from '@mui/material';
import React from 'react'

const CustomTextField = ({ placeholder,sx = {}, state, setState }) => {
    return (
        <InputBase
            multiline={false}
            rows={0}
            onChange = {(event) => setState(event.target.value)}
            placeholder={placeholder}
            value={state}
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

