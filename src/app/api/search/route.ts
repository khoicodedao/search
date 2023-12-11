import axios from "axios";
import { NextResponse } from "next/server";
export const POST = async (req: Request, res: Response) => {
  const { query } = await req.json();
  const url = "http://10.32.119.98:4000/search"; // Replace with your API URL
  // Define the request data as an object
  const requestData = {
    query,
  };

  try {
    const response = await axios.post(
      url,
      requestData // Pass data as query parameters
    );

    return NextResponse.json(response.data);
  } catch (error) {
    return NextResponse.json({ message: error });
  }
};
