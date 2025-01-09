import { model, models, Schema } from "mongoose";
import { unique } from "next/dist/build/utils";

const UserSchema = new Schema(
  {
    email: { type: String, required: true, unique: true },
    password: {
      type: String,
      required: true,
      validate: (pass: string | any[]) => {
        if (!pass?.length || pass.length < 5) {
          new Error("bahi 5 char to hona chayie");
        }
      },
    },
  },
  { timestamps: true }
);

export const User = models?.User || model("User", UserSchema);
