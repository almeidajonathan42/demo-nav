// @mui
import { Grid, Container, Stack, Box, List, ListItem, ListItemButton, ListItemText, ListSubheader } from '@mui/material';

// ----------------------------------------------------------------------

export default function BankingMenu() {
    return (
        <Box sx={{ position: 'fixed' }}>
            <List key={'bankingMenu'} sx={{ width: '200px' }}>
                <ListItem disablePadding>
                    <ListItemButton component="a" href="/dashboard/booking">
                        <ListItemText primary="Profile" />
                    </ListItemButton>
                </ListItem>

                <ListItem disablePadding>
                    <ListItemButton component="a" href="/dashboard/booking">
                        <ListItemText primary="Cards" />
                    </ListItemButton>
                </ListItem>

                <ListSubheader component="div" id="nested-list-subheader">
                    Sub group
            </ListSubheader>

                <ListItem disablePadding>
                    <ListItemButton component="a" href="/dashboard/booking">
                        <ListItemText primary="Account" />
                    </ListItemButton>
                </ListItem>

                <ListItem disablePadding>
                    <ListItemButton component="a" href="/dashboard/booking">
                        <ListItemText primary="Values" />
                    </ListItemButton>
                </ListItem>
            </List>
        </Box>
    );
}