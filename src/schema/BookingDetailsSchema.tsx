import * as Z from 'zod';

export const  BookingDetailsSchema = Z.object({
    date: Z.string().min(1, { message: 'Required' }),
  time: Z.string().min(1,{message:"This is required"}),
   
  });