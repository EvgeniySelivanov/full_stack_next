'use client';
import styled, { CSSProp } from 'styled-components';
import { InputLabel } from '@mui/material';
import { form } from 'source/styles/layouts';
import { primary } from 'source/styles/colors';

export const Label = styled(InputLabel)<{ $sx?: CSSProp }>`
  display: flex !important;
  gap: ${form.label.padding.h}px;
  margin-bottom: ${form.label.margin.v}px;
  align-items: center;
  color: black !important;
  font-size: 18px !important;
  font-weight: normal !important;
  ${({ $sx }) => $sx ?? {}};
`;

export const InputControl = styled.div<{ $sx?: CSSProp }>`
  display: flex;
  flex-direction: column;
  &:focus-within label,
  &:focus-within legend {
    color: ${primary.main} !important;
  }

  ${({ $sx }) => $sx ?? {}};
`;
