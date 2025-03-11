import axios from 'axios';

interface FacebookPost {
    id: string;
    message: string;
    created_time: string;
}

interface FacebookApiResponse {
    data: FacebookPost[];
}

//curl -i -X GET curl -i -X GET \
 //"https://graph.facebook.com/v22.0/me?fields=id%2Cname&access_token=EAAHq9zraChMBO83jkZAvOyeSzX58jkJhGE6S7tHejStyZCXL1MDs9O45pEXpg75GQReFljkqZBjiz3wdLUlugqYagzYDShZAf8CQRQck3RpaZAIx4oAcVvv261wahJguxjq6QAJv0ZAs8prKKlNleM2CN5zRoOi7GlTFhspYDK7hLFSO8NXPZAFN2UBRb09Dip4DpdYSqESSAwEtzaBEgZDZD"
// "https://graph.facebook.com/v22.0/me?fields=id%2Cname&access_token=EAAPUE1qro4gBO7JqfZBrZAZBGbfSrYPOvoLHuVUm02B6kag9OHUINP4rXYOQwZBJSnw8cvQ8B4jp6ScoZAivjIFzQK2tKUFNH1zWWsOSo27ulNulDwZADQsTgPTZCyr6eRexCphceoN3LtGppbAoz7ezX2huB04kQlrZBye7rZCrcx8M2v2AxBZBzrTCK9ZCmWku5M1ey8rZCeUcNLCZC437Asn7eZA6vYNQ7RX70KtsUZD"

export async function GET() {
    const my_url = "https://graph.facebook.com/v22.0/me?fields=id%2Cname&access_token=EAAHq9zraChMBO83jkZAvOyeSzX58jkJhGE6S7tHejStyZCXL1MDs9O45pEXpg75GQReFljkqZBjiz3wdLUlugqYagzYDShZAf8CQRQck3RpaZAIx4oAcVvv261wahJguxjq6QAJv0ZAs8prKKlNleM2CN5zRoOi7GlTFhspYDK7hLFSO8NXPZAFN2UBRb09Dip4DpdYSqESSAwEtzaBEgZDZD"
    const APP_ID = "61569013286511"; //503791912815822
    const ACCESS_TOKEN = "EAAH0MfvwB5wBO3LZBLepgb0GPJHZA6o4aHZBfZAGvYaxtuZC5Xt1bbwdSAZCvCLzkFTY9ntjUFZBPx0NCuvuNjnkg20qZCsUtmU6ZADDgLoA4ZAcNVnd5i5if7I2WV8FCowzyFbYMnKPVYIYPjLC03m7luJrQY9qnHySz0QjI8OgRTDfZC2PFdn96gUgZCbJSQZDZD";
    const apiUrl = `https://graph.facebook.com/v17.0/${APP_ID}/posts?access_token=${ACCESS_TOKEN}`;

    try {
        const response = await axios.get(my_url);
         console.log("face book posts",response?.data);
        const data: FacebookApiResponse = await response?.data;
        return data;
    } catch (error) {
        console.log('Error fetching Facebook posts:', error);
        throw new Error('Error fetching Facebook posts');
    }
}