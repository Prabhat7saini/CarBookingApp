

import { useForm, Controller } from 'react-hook-form';
import { Select, MenuItem, FormControl, InputLabel, Button, FormHelperText } from '@mui/material';
import { zodResolver } from '@hookform/resolvers/zod';
import { VehicleDetailsSchema } from '../schema/VehicleDetailsSchema';
import { TextField, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { VehicleDetailsData } from '../utils/interface';

export default function ServiceDetails() {
   
    const navigate = useNavigate();

    const options = ['Car', 'Bike', 'Truck'];
    const { control, handleSubmit, formState: { errors } } = useForm<VehicleDetailsData>({
        resolver: zodResolver(VehicleDetailsSchema),
        defaultValues: {
            vehicle_Type: '', // default to an empty string to avoid undefined issues
            vehicleModelNo: ''
        },
    });
    const onSubmit = (data: object) => {
        console.log(data);
        navigate('/booking-Details')
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Box style={{
                width: '100vw', display: 'flex', flexDirection:'column', justifyContent: 'center',
                alignItems: "center"
            }}>
                <FormControl error={!!errors.vehicle_Type} margin="normal">
                    <InputLabel id="vehicle-Type-label">Vehicle Type</InputLabel>
                    <Controller
                        name="vehicle_Type"
                        control={control}
                        render={({ field }) => (
                            <Select
                                {...field}
                                labelId="vehicle-Type-label"
                                label="Vehicle Type"
                                defaultValue="" // Ensure a default value is provided
                            >
                                <MenuItem value=""><em>None</em></MenuItem>
                                {options.map(option => (
                                    <MenuItem key={option} value={option}>{option}</MenuItem>
                                ))}
                            </Select>
                        )}
                    />
                    {errors.vehicle_Type && (
                        <FormHelperText>{errors.vehicle_Type.message}</FormHelperText>
                    )}
                    <Controller
                        name="vehicleModelNo"
                        control={control}
                        render={({ field }) => (
                            <TextField {...field}
                                type='text'
                                label="Name"
                                variant="outlined"
                                fullWidth
                                margin="normal"
                                helperText={errors.vehicleModelNo ? errors.vehicleModelNo.message : null} />
                        )}
                    ></Controller>
                </FormControl>
                <Button type="submit" variant="contained" color="primary" style={{ marginTop: '20px' }}>
                    Next
                </Button>
            </Box>

        </form>
    );

}
