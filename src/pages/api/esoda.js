// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import esoda from "../../../public/mockData/esoda.json";

// normally we should call out DB from here. ** in our case our DB is a local json file

export default function handler(req, res) {
  res.status(200).json({ data: esoda.data });
}
