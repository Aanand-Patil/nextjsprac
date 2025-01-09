import mongoose from "mongoose";

export function POST(req: any) {
  mongoose.connect(`${process.env.MONGO_URL}`);

  return Response.json("OK");
}
