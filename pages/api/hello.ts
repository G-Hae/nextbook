import { NextApiRequest, NextApiResponse } from 'next';

type HelloReponse = {
    name: string;
};

export default (req: NextApiRequest, res: NextApiResponse<HelloReponse>) => {
    res.status(200).json({ name: 'John Doe' });
};
