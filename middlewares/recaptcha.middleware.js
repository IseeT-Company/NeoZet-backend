import {config} from "dotenv"
import {response} from "express";

config()

let captchaChecker = (req, res, next) => {


    const response_key = req.body["g-recaptcha-response"];
    // var response = JSON.stringify(req.body.response);
    console.log(req.body);
    // console.log(response_key);
    // Put secret key here, which we get from google console
    const secret_key = process.env.SECRET_KEY
    // console.log(secret_key);
    const url = `https://www.google.com/recaptcha/api/siteverify?secret=${secret_key}&response=${response_key}`;

    fetch(url, {
        method: "post",
    })
        .then((response) => response.json())
        .then((google_response) => {

            // google_response is the object return by
            // google as a response
            console.log(google_response);
            if (google_response.success === true) {
                //   if captcha is verified
                // return res.send({response: "Successful"});
                next()
            } else {
                // if captcha is not verified
                return res.send({response: "Failed"});
            }
        })
        .catch((error) => {
            // Some error while verify captcha
            return res.json({error});
        });
}

export default captchaChecker;