import Dog from './Dog';
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { getAgeMonths } from '../../lib/getAge';
import { Grid } from '@mui/material';
import { Link } from '../../ui/core/Link';
import { CardActionArea } from '@mui/material';
import MaleRoundedIcon from '@mui/icons-material/MaleRounded';
import FemaleRoundedIcon from '@mui/icons-material/FemaleRounded';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Gender } from './Gender';

type DogProp = {
  dog: Dog
}

export const DogCard = ({ dog } : DogProp) => {
  var ageMonths: number = getAgeMonths(dog.Birthdate);
  var ageString = ageMonths >= 12 ? `${Math.floor(ageMonths / 12)} ans` : `${ageMonths} mois`;
  const [anchorEl, setAnchorEl] = React.useState(null); 
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const cardActions = [
    { label: "Edit", action: (id: string) => { alert("Edit" + id) } },
    { label: "Delete", action: (id: string) => { alert("Delete" + id) } }
  ]

  return (
    <Card sx={{maxWidth: 768, mx: "auto", marginY: 1}}>
      <CardContent sx={{paddingX: 2}}>
        <Grid container spacing={2}>
          <Grid item xs={3}>
            <Link href={"/dogs/" + dog.Id}>
              <span style={{ fontWeight: 'bold', fontSize: '1.66em' }}> 
                { dog.Name} 
                { dog.Gender == Gender.Male ? <MaleRoundedIcon style={{color: '#7BD7FF'}}/> : <FemaleRoundedIcon style={{color:'#FF7BAB'}}/> }
              </span> 
            </Link>
          </Grid>
          <Grid item xs={8} style={{display: 'flex', alignItems: 'center'}}>
            <span style={{fontSize: '1.25em'}}>
              { ageString }
              { ' • ' }
              { dog.BreedName }
            </span>
          </Grid>
          <Grid>
            <IconButton
              aria-label="more"
              id="long-button"
              aria-controls={open ? 'long-menu' : undefined}
              aria-expanded={open ? 'true' : undefined}
              aria-haspopup="true"
              onClick={handleClick}
              style={{position: 'relative', right: -10, top: 30}} // wow mucho clean, mucho css
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
                {cardActions.map(({label, action}) => (
                  <MenuItem key={label} onClick={() => { action(dog.Id); handleClose(); } }>
                    {label}
                  </MenuItem>
                ))}
            </Menu>
          </Grid>
        </Grid>
        <Grid container spacing={2} style={{fontSize: '0.9em'}}>
          <Grid item xs={3}>
            <Link href={'/clients/123'}> 
              <span style={{ fontWeight: '600' }}>
                { dog.Master.lastname }
                { ' ' } 
                { dog.Master.firstname }
              </span>
            </Link>
          </Grid>
          <Grid item xs={9}>
            <Link href={'tel:' + dog.Master.phone}>
              { dog.Master.phone }
            </Link>
            { ' • ' }
            <Link href={'mailto:' + dog.Master.email}>
              { dog.Master.email }
            </Link>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};