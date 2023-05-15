import {NextApiRequest, NextApiResponse} from "next";

export default function preview(req: NextApiRequest, res: NextApiResponse){
    res.setDraftMode({ enable: true });
    res.writeHead(307, {
        location: "/"
    });
    res.end("Draft mode is enabled")
}