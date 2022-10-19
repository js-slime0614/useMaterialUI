import { Pets, Mail, Notifications } from "@mui/icons-material"
import { MenuItem, Menu, AppBar, styled, Toolbar, Typography, Box, InputBase, Badge, Avatar } from '@mui/material'
import React, { useState } from 'react'

const StyledToolbar = styled(Toolbar)({
    display:'flex',
    justifyContent:"space-between"
})

const Search = styled("div")(({theme}) => ({
    backgroundColor: "white",
    padding: '0 10px',
    borderRadius: theme.shape.borderRadius,
    width:'40%',
}))
const Icons = styled(Box)(({theme}) => ({
    display:'none',
    gap:"20px",
    alignItems:'center',
    [theme.breakpoints.up('sm')]:{
        display:'flex'
    }
}))

const UserBox = styled(Box) (({theme}) => ({
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    [theme.breakpoints.up('sm')]:{
        display:'no                   ne'
    }
}))

const Navbar = () => {
    const [open, setOpen] = useState(false)
    return (
        <AppBar position="sticky">
            <StyledToolbar>
                <Typography variant="h6" sx={{display:{xs:"none", sm:"block"}}}>NAVBAR</Typography>
                <Pets sx={{display:{xs:"block", sm:"none"}}}/>
                <Search><InputBase placeholder="search..."/></Search>
                <Icons>
                    <Badge badgeContent={4} color="error">
                        <Mail/>
                    </Badge>
                    <Badge badgeContent={2} color="error">
                        <Notifications/>
                    </Badge>
                    <Avatar sx={{width:30, height:30}} src=""
                    
                    />
                </Icons>
                <UserBox>
                <Avatar sx={{width:30, height:30}} src=""/>
                <Typography variant="span">John</Typography>
                </UserBox>
            </StyledToolbar>
            <Menu
                id="demo-positioned-menu"
                aria-labelledby='demo-positioned-button'
                open={true}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
            >
                <MenuItem>Profile</MenuItem>
                <MenuItem>My account</MenuItem>
                <MenuItem>Logout</MenuItem>
            </Menu>
        </AppBar>
    )
}

export default Navbar