import * as React from 'react';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Unstable_Grid2';
import TextField from '@mui/material/TextField';

import CardMenu from './CardMenu';

export default function CardHolder({ organizations }) {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <Box className='card-holder'>
            <Grid container rowSpacing={4} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                {organizations.map((item, index) => (
                    <Grid key={index} xs={12} sm={6} md={4}>
                        <Card>
                            <CardHeader
                                className='card-holder-header'
                                avatar={
                                    <Avatar sx={{ width: 24, height: 24, bgcolor: red[500] }} aria-label="recipe">
                                        R
                                    </Avatar>
                                }
                                action={
                                    <IconButton id="demo-positioned-button"
                                        aria-controls={open ? 'demo-positioned-menu' : undefined}
                                        aria-haspopup="true"
                                        aria-expanded={open ? 'true' : undefined}
                                        onClick={handleClick}
                                    >
                                        <MoreVertIcon />
                                    </IconButton>
                                }
                                title={item.title}
                            />
                            <CardMenu anchorEl={anchorEl} handleClose={handleClose} />
                            <Divider variant="middle" />
                            <CardContent>
                                <Typography variant="subtitle1" gutterBottom sx={{
                                    pb: 2
                                }}>
                                    Licenses
                                </Typography>
                                <Box className='card-content' sx={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    px: 1
                                }}>
                                    <div>
                                        <Typography
                                            variant="subtitle2"
                                            gutterBottom
                                            sx={{
                                                fontWeight: '900'
                                            }}>Tracking</Typography>
                                        <Box className='flex align-items-center'>
                                            <Typography variant="subtitle2" gutterBottom sx={{
                                                mr: 2
                                            }}>In use:</Typography>
                                            <Typography variant="subtitle2" gutterBottom>1245</Typography>
                                        </Box>
                                        <Box className='flex align-items-center'>
                                            <Typography variant="subtitle2" gutterBottom sx={{
                                                mr: 2
                                            }}>Assigned: </Typography>
                                            <TextField
                                                sx={{ maxWidth: '25%' }}
                                                id="standard-number"
                                                type="number"
                                                variant="standard"
                                            />
                                        </Box>
                                    </div>
                                    <div className='card-content-right'>
                                        <Typography variant="subtitle2" gutterBottom sx={{
                                            fontWeight: '900'
                                        }}>Protection</Typography>
                                        <Box className='flex align-items-center'>
                                            <Typography variant="subtitle2" gutterBottom sx={{
                                                mr: 2
                                            }}>In use:</Typography>
                                            <Typography variant="subtitle2" gutterBottom>1245</Typography>
                                        </Box>
                                        <Box className='flex align-items-center'>
                                            <Typography variant="subtitle2" gutterBottom sx={{
                                                mr: 2
                                            }}>Assigned: </Typography>
                                            <TextField
                                                sx={{ maxWidth: '25%' }}
                                                type="number"
                                                variant="standard"
                                            />
                                        </Box>
                                    </div>
                                </Box>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}