import { withIronSessionApiRoute } from 'iron-session/next';
import { sessionOptions } from '../../lib/session';


async function fetchUser(account, password) {
    const res = await fetch(`http://localhost:3001/account/${account}/password/${password}`);
    const user = await res.json();
    console.log(user);
    return user.result[0];
}

async function loginRoute(req, res) {
    const { account, password } = await req.body;

    try {
        const {
            Account,
            Avartar,
            Password,
            RoleID,
            UserId,
            UserName,
            email,
            status } = await fetchUser(account, password);


        const user = {
            isLoggedIn: true,
            account: Account,
            avartar: Avartar,
            password: Password,
            roleID: RoleID,
            userId: UserId,
            userName: UserName,
            Email: email,
            Status: status
        }

        req.session.user = user;
        await req.session.save();
        res.json(user);
    }

    catch (err) {
        res.status(500).json({ message: err.message })
        console.log(err);
    }


}

export default withIronSessionApiRoute(loginRoute, sessionOptions)

