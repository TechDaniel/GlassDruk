const nodemailer = require('nodemailer');
const { google } = require('googleapis');

const CLIENT_ID = ''
const CLIENT_SECRET = ''
const REDIRECT_URI = ''
const REFRESH_TOKEN = ''

const oAuth2Client = new google.auth.OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URI);
oAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN })

async function sendMail(){
    try {
        const accessToken = await oAuth2Client.getAccessToken();

        const transport = nodemailer.createTransport({
            servive: 'gmail',
            auth: {
                type: 'Oauth2',
                user: 'KontaktGlassDruk@gmail.com',
                clientId: CLIENT_ID,
                clientSecret: CLIENT_SECRET,
                refreshToken: REFRESH_TOKEN,
                accessToken: accessToken
            }
        })

        const mailOptions = {
            from: 'KontaktGlassDruk <KontaktGlassDruk@gmail.com',
            to: 'GlassDruk@gmail.com',
            subject: '',
            text: '',
            html: '<h1>Siema</h1>'
        };
        
        const result = transport.sendMail(mailOptions);
        return result;

    } catch (error) {
        return error;
    }
}

sendMail()
    .then(result => console.log("E-Mail został wysłany", result))
    .catch(error => console.log(error.message));