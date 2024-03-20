// pageclip
const Pageclip = require("pageclip");

// types
import {  NextResponse } from "next/server";

export async function POST(request:Request) {

    const data = await request.json();

    try {
        const pageclipAPIKey = process.env.PAGECLIP_API_KEY;
        let pageclip = new Pageclip(pageclipAPIKey);

        pageclip.send(data).then((response: any) => {
            console.log(response.status, response.data); 
        });
        
        return NextResponse.json({ message: "Your message has been sent successfully."});
    } catch (error) {
        console.log(error);
    }

}

export async function GET() {
    return NextResponse.json({ request: "Please don't do what you're thinking of doing. Bro, go get some life." });
}