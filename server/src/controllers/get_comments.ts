import { Request, Response } from "express";
import prisma_client from "../lib/database";

export default async function GetComments(req: Request, res: Response) {
  let song_id: number = Number(req.params.song_id);

  try {
    let comments = await prisma_client.comment.findMany({
      where: { song_id },
      include: {
        artist: {
          select: {
            followers: true,
            following: true,
            photo_url: true,
            songs_uploaded_number: true,
            username: true,
            id: true,
          },
        },
      },
    });

    res.status(200).json(comments);
  } catch (error) {
    return res.status(400).json("Something Wrong Happen");
  }
}