import { Gender } from '../types/dog';
import { Client } from '../types/client';
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Grid } from '@mui/material';
import { Link } from '../ui/core/Link';
import MaleRoundedIcon from '@mui/icons-material/MaleRounded';
import FemaleRoundedIcon from '@mui/icons-material/FemaleRounded';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';

type ClientProp = {
  client: Client
}

export const ClientCard = ({ client }: ClientProp) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const cardActions = [
    { label: "Edit", action: (id) => { alert("Edit" + id) } },
    { label: "Delete", action: (id) => { alert("Delete" + id) } }
  ]

  return (
    <Card sx={{ maxWidth: 768, mx: "auto", marginY: 1 }}>
      <CardContent sx={{ paddingX: 2 }}>
        <Grid container spacing={2}>
          <Grid item xs={3}>
            <Link href="/clients/123">
              <span style={{ fontWeight: 'bold', fontSize: '1.66em' }}>
                {client.firstname} {client.lastname}
                {client.gender == Gender.Male.toString() ? <MaleRoundedIcon style={{ color: '#7BD7FF' }} /> : <FemaleRoundedIcon style={{ color: '#FF7BAB' }} />}
              </span>
            </Link>
          </Grid>
          <Grid item xs={8} style={{ display: 'flex', alignItems: 'center' }}>
          </Grid>
          <Grid>
            <IconButton
              aria-label="more"
              id="long-button"
              aria-controls={open ? 'long-menu' : undefined}
              aria-expanded={open ? 'true' : undefined}
              aria-haspopup="true"
              onClick={handleClick}
              style={{ position: 'relative', right: -10, top: 30 }} // wow mucho clean, mucho css
            >
              <MoreVertIcon />
            </IconButton>
            <Menu
              id="long-menu"
              MenuListProps={{
                'aria-labelledby': 'long-button',
              }}
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              PaperProps={{
                style: {
                  maxHeight: 300,
                  width: '20ch',
                },
              }}
            >
              {cardActions.map(({ label, action }) => (
                <MenuItem key={label} onClick={() => { action(client.id); handleClose(); }}>
                  {label}
                </MenuItem>
              ))}
            </Menu>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};