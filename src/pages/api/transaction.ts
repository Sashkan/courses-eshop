import { type Product } from "@prisma/client";
import { type NextApiRequest, type NextApiResponse } from "next";
import { prisma } from "~/server/db";

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse<Product[]>
) => {
  const { method } = req;

  switch (method) {
    case "POST":
      const transaction = await prisma.transaction.create({ data: req.body });
      res.status(200).json(transaction);
      break;
    case "GET":
      const transactions = await prisma.transaction.findMany();
      res.status(200).json(transactions);
      break;
    default:
      res.status(405).json({ message: "Method not allowed" });

      break;
  }
};

export default handler;
