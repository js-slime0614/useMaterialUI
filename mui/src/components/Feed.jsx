import { Favorite, MoreVert, Share } from '@mui/icons-material'
import { Avatar, Box, Card, CardActions, CardContent, CardHeader, CardMedia, IconButton, Typography } from '@mui/material'
import React from 'react'

const Feed = () => {
    return (
        <Box bgcolor="pink" flex={4} p={2}>
            <Card>
                <CardHeader
                    avatar={
                        <Avatar sx={{bgcolor: 'red' }} aria-label="recipe">
                            R
                        </Avatar>
                    }
                    action={
                        <IconButton aria-label='settings'>
                            <MoreVert/>
                        </IconButton>
                    }
                    title=''
                    subheader=''
                    />
                    <CardMedia
                        component='img'
                        height='20%'
                        image='images/card1.jpeg'
                        alt='Paella dish'
                    />
                    <CardContent>
                        <Typography variant='body2' color='text.secondary'>
                            This imporessive paella is a perfect party dish and a fun meal to cook
                            together with your guests. Add 1 cup of frozen peas along with the mussels,
                            if you like.
                        </Typography>
                    </CardContent>
                    <CardActions disableSpacing>
                        <IconButton aria-label='add to favorites'>
                            <Favorite/>
                        </IconButton>
                        <IconButton aria-label='share'>
                            <Share/>
                        </IconButton>
                    </CardActions>
            </Card>
        </Box>
    )
}

export default Feed