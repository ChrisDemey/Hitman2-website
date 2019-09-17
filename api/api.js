let express = require("express");
let app = express();
let cors = require("cors");
let axios = require("axios");

app.use(cors());
let func = async (res,requestURL) => {
    let result = await axios.get(requestURL);
    res.json(result.data);
}

app.get("/",(req,res) => {
    let requestURL = 'http://api.steampowered.com/ISteamNews/GetNewsForApp/v0002/?appid=863550&count=5&maxlength=300&format=json';
    func(res,requestURL)
    .catch(err => res.send(err));
})

app.listen(8000,() => {
    console.log("listening on port",8000);
})