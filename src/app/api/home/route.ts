import axios from "axios";
import { NextResponse } from "next/server";
export const GET = async (req: Request, res: Response) => {
  const url = process.env.NGROK_LINK + "searchAll"; // Replace with your API URL

  try {
    const response = await axios.get(url);

    return NextResponse.json(response.data);
  } catch (error) {
    return NextResponse.json({ message: error });
  }
};
