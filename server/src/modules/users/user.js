import { buildUserInfo } from "./builduserinfo";
import User from './user.model';
import { AuthServices } from "../../service/Auth";

export const userAuth = async (req, res, next) => {
    const token = AuthServices.getTokenFromHeaders(req);

    if(!token) {
        req.user = null;

        return res.sendStatus(401);
    }

    const user = await User.findById(token.id)

    if(!user) {
        req.customer = null;

        return res.sendStatus(401);
    }

    req.customer = user;

    return next();
}

export const getOrCreateCustomer = async (info, providerName) => {
    const userInfo = buildUserInfo(info, providerName);

    try {   
        const _user = await User.findOne({ email: userInfo.email }) 

        const { provider, ...customerInfo } = userInfo;

        if (!_user) {
            const user = await User.create({
                ...customerInfo,
                provider: [provider],
            });

            return user;
        }


        const providerExist = _user.provider.find(
          el =>
            el.uid === userInfo.provider.uid &&
            el.type === userInfo.provider.type
        );

        if(providerExist) {
            return _user;
        }

        _user.provider.push(userInfo.provider);

        await _user.save()

        return _user;
    } catch (error) {
        throw error;
    }
}

export const me = async customerId => {
    try {
        const customer = await User.findById(customerId);

        if(!customer) {
            throw new Error('User not exist');
        }

        return customer;

    } catch (error) {
        throw error;
    }
}