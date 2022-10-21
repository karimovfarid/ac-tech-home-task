import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import EditIcon from '@mui/icons-material/Edit';
import DoDisturbAltIcon from '@mui/icons-material/DoDisturbAlt';
import CheckIcon from '@mui/icons-material/Check';

export default function CardMenu({anchorEl, handleClose}) {
    const open = Boolean(anchorEl);

    return (
        <Menu
            id="demo-positioned-menu"
            aria-labelledby="demo-positioned-button"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'left',
            }}
            transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
            }}
        >
            <MenuItem onClick={handleClose}>
                <ListItemIcon>
                    <EditIcon fontSize="small" />
                </ListItemIcon>
                <ListItemText>Edit</ListItemText>
            </MenuItem>
            <MenuItem onClick={handleClose}>
                <ListItemIcon>
                    <CheckIcon fontSize="small" />
                </ListItemIcon>
                <ListItemText>Go To Organization</ListItemText>
            </MenuItem>
            <MenuItem onClick={handleClose}>
                <ListItemIcon>
                    <DoDisturbAltIcon fontSize="small" />
                </ListItemIcon>
                <ListItemText>Delete Organization</ListItemText>
            </MenuItem>
        </Menu>
    )
}