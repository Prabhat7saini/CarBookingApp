import * as z from 'zod';
const options = ['Car', 'Bike', 'Truck'];
export const  VehicleDetailsSchema = z.object({
    vehicle_Type: z.string().nonempty("Vehicle type is required").refine(
        (val) => options.includes(val),
        {
            message: "Invalid vehicle type selected",
        }
    ),
    vehicleModelNo: z.string().min(1, { message: 'Required' }),
    
  });