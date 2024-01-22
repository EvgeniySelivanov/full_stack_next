'use client';
// import styled, { CSSProp } from 'styled-components';
import { Box, OutlinedInput as MUIOutlinedInput, OutlinedInputProps } from '@mui/material';

export default function OutlinedInput(props: OutlinedInputProps) {
  if (props?.startAdornment !== undefined) {
    return (
      <Box
        // sx={{
        //   '.MuiOutlinedInput-root': {
        //     paddingLeft: 8
        //   },
        //   input: {
        //     paddingLeft: 6
        //   }
        // }}
      >
        <MUIOutlinedInput
          // sx={{
          //   // paddingLeft: '8 !important',

          //   input: {
          //     paddingLeft: 6
          //   }
          // }}
          // {...props}
        />
      </Box>
    );
  }

  return (
    <MUIOutlinedInput
      sx={{
        input: {
          paddingLeft: 8
        }
      }}
      {...props}
    />
  );
}
