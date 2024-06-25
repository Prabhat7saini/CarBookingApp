import React from 'react'
import { useForm, Controller } from 'react-hook-form'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Container } from '@mui/material';
import { Button } from '@mui/material';
import { zodResolver } from '@hookform/resolvers/zod';
// import * as yup from "yup"
import { PersonalDetailsSchema } from '../schema';
import { useNavigate } from 'react-router-dom';
const PersonalDetails: React.FC = () => {
    interface PersonalDetailsData {
        name: string,
        email: string,
        Phoneno: string,
        address: string
    }
    const navigate = useNavigate();
    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm<PersonalDetailsData>({
        resolver: zodResolver(PersonalDetailsSchema),
        defaultValues: {
            name: '',
            email: '',
            Phoneno: '',
            address: ''             // default to an empty string to avoid undefined issues
        },
    });

    const onSubmitaction = (data: object) => {
        localStorage.setItem('PerSonalDetails', JSON.stringify(data));
        console.log(data);
        navigate('/service-Details')
    }
    return (
        <Container  >
            <form onSubmit={handleSubmit(onSubmitaction)}>
                <Box display='flex' flexDirection='column' paddingX='1rem' >

                    <Controller
                        name="name"
                        control={control}
                        render={({ field }) => (
                            <TextField {...field}
                                type='text'
                                label="Name"
                                variant="outlined"
                                fullWidth
                                margin="normal"
                            />
                        )}
                    ></Controller>
                    {errors.name?.message && <p>{errors.name?.message}</p>}
                    <Controller
                        name="email"
                        control={control}
                        render={({ field }) => (
                            <TextField {...field}
                                type='email'
                                label="Email"
                                variant="outlined"
                                fullWidth
                                margin="normal"
                            />
                        )}
                    ></Controller>
                    {errors.email?.message && <p>{errors.email?.message}</p>}
                    <Controller
                        name="Phoneno"
                        control={control}
                        render={({ field }) => (
                            <TextField {...field}
                                //    type='number'
                                type='text'
                                label="Phoneno"
                                variant="outlined"
                                fullWidth
                                margin="normal"
                                 />
                        )}
                    ></Controller>
                    {errors.Phoneno?.message && <p>{errors.Phoneno?.message}</p>}
                    <Controller
                        name="address"
                        control={control}
                        render={({ field }) => (
                            <TextField {...field}
                                type='text'
                                label="address"
                                variant="outlined"
                                fullWidth
                                margin="normal"
                                />
                        )}
                    ></Controller>
                    {errors.address?.message && <p>{errors.address?.message}</p>}
                    
                </Box>
                <Button type='submit' >Next</Button>
            </form>
        </Container>
    )
}

export default PersonalDetails

