import React from 'react';
import { Box,  Typography } from '@mui/material';
import { PersonalDetailsData ,BookDetailsData} from '../utils/interface';
const Confirmation: React.FC = () => {


  const extractPersonalDetails: string | null = localStorage.getItem('PerSonalDetails');
  const extractBookingDetails: string | null = localStorage.getItem('BookingDetails');

  const personalDetails: PersonalDetailsData = extractPersonalDetails
    ? JSON.parse(extractPersonalDetails)
    : { name: '', email: '', Phoneno: 0, address: '' };

  const bookingDetails: BookDetailsData = extractBookingDetails
    ? JSON.parse(extractBookingDetails)
    : { date: '', time: '' };

  return (
    <Box style={{width:'100vw',display:'flex',justifyContent:'center', alignItems:"center"}}>
      <Typography>
        <pre>
          Hi {personalDetails.name}, your booking is scheduled at {bookingDetails.time} on {bookingDetails.date}.<br />
        Thanks!!
        </pre>
      </Typography>
    </Box>
  );
}

export default Confirmation;
