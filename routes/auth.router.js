import {Router} from "express";
import {config} from "dotenv";

const authRouter = Router()

config()

authRouter.post('/login', async function(req, res, next) {
    const userSchema = {
        'login': process.env.ADMIN_LOGIN,
        'password': process.env.ADMIN_PASSWORD,
    };
    const loginDetails = {
        'login': req.body.login,
        'password': req.body.password,
    }
    console.log(loginDetails)
    const result = userSchema.password === loginDetails.password && userSchema.login === loginDetails.login;
    if (result) {
        console.log("Auth is ready")
        // const profile = await dao.login(loginDetails);

        req.session.profile = "true";
        res.redirect('/');
        // } else {
        //     res.render('login', {'login': profile,
        //         'message': 'Could not authenticate using the user details provided',
        //         'active': 'profile'});
        // }
    } else {
        // Return validation message
    }
});

authRouter.get('/logout', async function(req, res, next) {
    req.session.destroy(function(err) {
        console.log('Destroyed session')
    })
    res.redirect('/');
});


export default authRouter