import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { getAgeMonths } from '../../lib/getAge';
import { Grid } from '@mui/material';
import { Link } from '../../ui/core/Link';
import { CardActionArea } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';

type ConsultationProp = {
  Consultation: Consultation
}

export const ConsultationCard = ({ Consultation } : ConsultationProp) => {
  var ageMonths: number = getAgeMonths(Consultation.birthdate);
  var ageString = ageMonths >= 12 ? `${Math.floor(ageMonths / 12)} ans` : `${ageMonths} mois`;
  const [anchorEl, setAnchorEl] = React.useState(null); 
  const open = Boolean(anchorEl);
  const handleClick = (event: any) => {
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
            <Link href={"/Consultations/" + Consultation.id}>
              <span className="text-xl font-bold"> 
                { Consultation.name} 
              </span> 
            </Link>
          </Grid>
          <Grid item xs={8} className="flex items-center">
            <span className="text-xl">
              { Consultation.situation }
              { ' • ' }
              { Consultation.goal}
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
              className="relative right-[-10px] top-[25px]"
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
                  <MenuItem key={label} onClick={() => { action(Consultation.id); handleClose(); } }>
                    {label}
                  </MenuItem>
                ))}
            </Menu>
          </Grid>
        </Grid>
        <Grid container spacing={2} className="text-sm">
          <Grid item xs={3}>
            <Link href={'/clients/123'}> 
              <span className="font-semibold">
                { Consultation.master.lastname }
                { ' ' } 
                { Consultation.master.firstname }
              </span>
            </Link>
          </Grid>
          <Grid item xs={9}>
            <Link href={'tel:' + Consultation.master.phone}>
              { Consultation.master.phone }
            </Link>
            { ' • ' }
            <Link href={'mailto:' + Consultation.master.email}>
              { Consultation.master.email }
            </Link>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};