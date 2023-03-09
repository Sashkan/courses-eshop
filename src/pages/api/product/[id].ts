import { type Product } from "@prisma/client";
import { type NextApiRequest, type NextApiResponse } from "next";
import { prisma } from "~/server/db";

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse<Product[]>
) => {
  const product: Product[] = await prisma.product.findUnique({
    where: {
      id: req.query.id as string,
    },
  });

  res.status(200).json(product);
};

export default handler;
