import { Response } from "express";
import prisma_client from "../lib/database";
import { MYREQEUST } from "../lib/types.def";

export default async function Inbox(req: MYREQEUST, res: Response) {
  let my_id = Number(req.user!);

  let data = await prisma_client.notification.findMany({
    where: { nottifer_id: my_id },
    include: { trigger: { select: { photo_url: true, username: true } } },
  });

  res.status(200).json(data);
}
