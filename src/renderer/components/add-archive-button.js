import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '@buttercup/ui';
import ArchiveIcon from 'react-icons/lib/md/add';
import { showContextMenu } from '../system/menu';

const AddArchiveButton = ({
  condenced = false,
  onNewClick,
  onOpenClick,  
  ...props
}) => (
  <Button
    onClick={() =>
      showContextMenu([
        {
          label: 'Open Archive File',
          accelerator: 'CmdOrCtrl+O',
          click: onOpenClick
        },
        {
          label: 'New Archive File',
          accelerator: 'CmdOrCtrl+N',
          click: onNewClick
        }
      ])}
    icon={<ArchiveIcon />}
    {...props}
  >
    {condenced ? ' ' : 'Add Archive'}
  </Button>
);

AddArchiveButton.propTypes = {
  condenced: PropTypes.bool,
  onOpenClick: PropTypes.func,
  onNewClick: PropTypes.func
};

export default AddArchiveButton;
