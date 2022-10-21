import * as React from 'react';

import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 300,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export default function CreateTicketModal({ submitForm }) {
    const [open, setOpen] = React.useState(false);
    const [name, setName] = React.useState('')
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);


    const handleChange = (event) => setName(event.target.value);;

    return (
        <>
            <Button className='create-ticket-modal_button' variant="contained" onClick={handleOpen}>Add New Organization</Button>
            <Modal
                open={open}
                onClose={handleClose}
            >
                <Box sx={style}>
                    <Typography className="create-ticket-modal-title" variant="h6" component="h2">
                        Create Organization
                    </Typography>
                    <TextField
                            id="create-ticket-modal-input"
                            label="Organization Name"
                            value={name}
                            onChange={handleChange}
                            fullWidth
                        />
                    <Button className='create-ticket-modal-submit' variant="contained" onClick={() => submitForm(name)}>Create Ticket</Button>
                </Box>
            </Modal>
        </>
    );
}