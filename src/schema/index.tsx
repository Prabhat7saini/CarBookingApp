import * as Z from 'zod';

export const  PersonalDetailsSchema = Z.object({
    name: Z.string().min(1, { message: 'Required' }),
    email: Z.string().min(1,{message:"This is required"}).email({message:"Must be a valid email"}),
    Phoneno: Z.string().min(1,{message:"Number Requied"}).max(10,{message:"Max Length 10"}),
    // Phoneno:Z.coerce.number().lte(50).gte(50),
    address: Z.string().min(1,{message:"Required"}),
    // createdOn: Z.date(),
  });