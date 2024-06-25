import { useForm, Controller } from "react-hook-form"
import { BookingDetailsSchema } from "../schema/BookingDetailsSchema"
import { Box, TextField } from "@mui/material"
import { zodResolver } from "@hookform/resolvers/zod"
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
import { BookDetailsData } from "../utils/interface";
const BookingDetails: React.FC = () => {

  
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

      <Box style={{
        width: '100vw', display: 'flex', justifyContent: 'center',
        alignItems: "center"
      }}>
        <Box style={{
          width: '15rem', display: 'flex',  flexDirection: 'column'
        }}>
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
      </Box>
    </form>
  )
}

export default BookingDetails
