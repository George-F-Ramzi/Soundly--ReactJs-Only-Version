import { Response } from "express";
import prisma_client from "../lib/database";
import Joi, { Schema } from "joi";
import { MYREQEUST } from "../lib/types.def";

export default async function Comment(req: MYREQEUST, res: Response) {
  let my_id: number = req.user!;
  let song_id: number = Number(req.params.song_id);
  let { details }: { details: string } = req.body;

  const schema: Schema = Joi.object({
    details: Joi.string().required().label("Comment Details"),
  });

  const { error } = schema.validate(req.body);

  if (error) {
    return res.status(400).json(error.message);
  }

  let song_row = await prisma_client.song.findUnique({
    where: { id: song_id },
    select: { artist_id: true },
  });

  if (song_row === null) return res.status(400).send("something wrong happen");

  await prisma_client.comment.create({
    data: {
      details,
      artist_id: my_id,
      song_id,
    },
  });

  if (my_id === song_row.artist_id) {
    return res.status(200).send("Commenting Done");
  }

  await prisma_client.notification.create({
    data: {
      message_detail: "Commented on your song",
      nottifer_id: song_row.artist_id,
      trigger_id: my_id,
      song_id,
    },
  });
  res.status(200).send("Commenting Done");
}
