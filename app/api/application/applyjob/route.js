import { NextResponse } from "next/server";
import database from '../../../../database/database'
database();

export async function POST(req) {
    try {
        
        const userId = req.headers.get("xUserId")
        
        const _id = req.nextUrl.pathname.split('/').pop();
        console.log(userId);
        console.log(_id);
        return NextResponse.json({ success: true, message: "Registered successfully" }, { status: 200 })
    } catch (error) {
        return NextResponse.json({ success: false, message: error.message }, { status: 500 })
    }
}