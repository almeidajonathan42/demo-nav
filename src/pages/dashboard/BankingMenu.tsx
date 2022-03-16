// @mui
import { Grid, Container, Stack, Box, List, ListItem, ListItemButton, ListItemText, ListSubheader } from '@mui/material';

// ----------------------------------------------------------------------

export default function BankingMenu() {
    return (
        <Box sx={{ position: 'fixed', top: '100px', left: '100px' }}>
            <List key={'bankingMenu'} sx={{ width: '200px' }}>
                <ListItem disablePadding>
                    <ListItemButton component="a" href="/dashboard/banking">
                        <ListItemText primary="Main" />
                    </ListItemButton>
                </ListItem>

                <ListItem disablePadding>
                    <ListItemButton component="a" href="/dashboard/user/profile">
                        <ListItemText primary="Profile" />
                    </ListItemButton>
                </ListItem>

                <ListItem disablePadding>
                    <ListItemButton component="a" href="/dashboard/user/account">
                        <ListItemText primary="Account" />
                    </ListItemButton>
                </ListItem>

                <ListItem disablePadding>
                    <ListItemButton component="a" href="/dashboard/user/list">
                        <ListItemText primary="User list" />
                    </ListItemButton>
                </ListItem>
            </List>
        </Box>
    );
}