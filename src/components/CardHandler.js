import * as React from 'react';

import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Box from '@mui/material/Box';

import CreateTicketModal from './CreateTicketModal';

import './index.scss'

export default function CardHandler({ allOrganization, handleSearch, setOrganiztions }) {
    const [search, setSearch] = React.useState('');

    return (
        <Box className='card-handler'>
            <Box className='card-handler-wrapper'>
                <Typography className='card-handler_text'>All Organization ({allOrganization})</Typography>
                <div className='card-handler_search-holder'>
                    <InputBase
                        sx={{ ml: 1, flex: 1 }}
                        placeholder="Search Organization"
                        value={search}
                        onChange={e => setSearch(e.target.value)}
                    />
                    <IconButton type="button" aria-label="search" onClick={() => handleSearch(search)}>
                        <SearchIcon />
                    </IconButton>
                </div>
            </Box>
            <CreateTicketModal submitForm={setOrganiztions} />
        </Box>
    )
}