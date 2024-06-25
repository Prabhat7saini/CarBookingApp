import React from 'react';
import { Container, Typography } from '@mui/material';

const Confirmation: React.FC = () => {
  interface PersonalDetailsData {
    name: string,
    email: string,
    Phoneno: number,
    address: string
  }

  interface BookDetailsData {
    date: string,
    time: string
  }

  const extractPersonalDetails: string | null = localStorage.getItem('PerSonalDetails');
  const extractBookingDetails: string | null = localStorage.getItem('BookingDetails');

  const personalDetails: PersonalDetailsData = extractPersonalDetails
    ? JSON.parse(extractPersonalDetails)
    : { name: '', email: '', Phoneno: 0, address: '' };

  const bookingDetails: BookDetailsData = extractBookingDetails
    ? JSON.parse(extractBookingDetails)
    : { date: '', time: '' };

  return (
    <Container>
      <Typography>
        Hi {personalDetails.name}, your booking is scheduled at {bookingDetails.time} on {bookingDetails.date}.<br />
        Thanks!!
      </Typography>
    </Container>
  );
}

export default Confirmation;
