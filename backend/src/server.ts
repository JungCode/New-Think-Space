import app from "./app";
import https from "https";
import fs from "fs";

const port = Number(process.env.PORT) || 3000;

const options = {
    key: fs.readFileSync('/etc/ssl/private/key.pem'),
    cert: fs.readFileSync('/etc/ssl/private/cert.pem')
};

https.createServer(options, app).listen(port, () => {
    console.log('Server running on HTTPS',port);
});