import { useForm, Controller } from "react-hook-form"
import { BookingDetailsSchema } from "../schema/BookingDetailsSchema"
import { Box, TextField } from "@mui/material"
import { zodResolver } from "@hookform/resolvers/zod"
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
const BookingDetails: React.FC = () => {

  interface BookDetailsData {
    date: string,
    time: string
  }
  const navigate = useNavigate();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<BookDetailsData>({
    resolver: zodResolver(BookingDetailsSchema),
    defaultValues: {
      date: '',
      time: '',

    },
  });
  const onSubmitaction = (data: object) => {
    localStorage.setItem('BookingDetails', JSON.stringify(data));
    console.log(data);
    navigate('/confirmation')
  }
  return (
    <form onSubmit={handleSubmit(onSubmitaction)}>
      <Box display='flex' flexDirection='column'
        alignItems={"center"} justifyContent={"center"}
        paddingX='3rem' maxWidth="sm">
        <Controller
          name="date"
          control={control}
          render={({ field }) => (
            <TextField {...field}
              type='date'
              // label="Name"
              variant="outlined"
              fullWidth
              margin="normal"
              helperText={errors.date ? errors.date.message : null} />
          )}
        ></Controller>
           <Controller
          name="time"
          control={control}
          render={({ field }) => (
            <TextField {...field}
              type='time'
              // label="Name"
              variant="outlined"
              fullWidth
              margin="normal"
              helperText={errors.time ? errors.time.message : null} />
          )}
        ></Controller>
        
        <Button type='submit' >Book</Button>
      </Box>
    </form>
  )
}

export default BookingDetails
