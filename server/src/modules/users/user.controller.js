import * as Yup from 'yup';

import { PROVIDER_ENUM } from './user.model';
import { AuthProvider } from '../../service/authProvider';
import { getOrCreateCustomer, me } from './user';
import { AuthServices } from '../../service/Auth';

export const create = async (req, res) => {
    const { token, provider } = req.body;
    
    const bodySchema = Yup.object().shape({
      token: Yup.string().required(),
      provider: Yup.string()
        .oneOf(PROVIDER_ENUM)
        .required()
    });

    try {
        await bodySchema.validate({ token, provider });

        let data;

        if(provider === 'FACEBOOK') {
            data = await AuthProvider.Facebook.authAsync(token);

        } else if(provider === 'GOOGLE') {
            data = await AuthProvider.Google.authAsync(token)
             
        } else {
            res.sendStatus(400);
        }
        console.log('data', data);

        const user = await getOrCreateCustomer(data, provider);

        const jwtToken = AuthServices.createToken(user)

        res.status(200).json({ token: jwtToken })

    } catch (error) {
        res.status(400).json({ message: error.message  })
    }

};

export const getUserInfo = async (req, res) => {
    try {
        if (req.customer) {
            const userInfo = await me(req.customer._id);

            res.status(200).json(userInfo); 

        } else {
            res.status(400).json({ message: 'No User' });
        }
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}