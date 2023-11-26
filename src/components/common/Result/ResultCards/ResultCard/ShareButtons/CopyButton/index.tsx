import React from 'react';
import { IconButton } from '@mui/material';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { useBool } from '../../../../../../../lib/useBool';

type CopyButtonProps = {
  target: string;
  iconSize: number;
};
const CopyButton: React.FC<CopyButtonProps> = ({ target, iconSize }) => {
  const [open, handleClick, handleClose] = useBool(false);

  return (
    <>
      <CopyToClipboard text={target}>
        <IconButton onClick={handleClick} aria-label='Copy link' size='large'>
          <FileCopyIcon style={{ fontSize: iconSize }} />
        </IconButton>
      </CopyToClipboard>
      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
      >
        <MuiAlert elevation={6} variant='filled' severity='success'>
          Copied!
        </MuiAlert>
      </Snackbar>
    </>
  );
};
export default CopyButton;
