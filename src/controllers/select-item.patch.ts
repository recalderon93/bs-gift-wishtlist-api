import { Request, Response } from 'express';
import selectItemInteractor from '../interactors/select-item';

export default function selectItemController(req: Request, res:Response) {
	const USER_IP = req.socket.remoteAddress;
	
	console.log(req.body, USER_IP)
	selectItemInteractor({ _id: req.body._id, ip: USER_IP }).then(response => {
		res.json(response);
	})
}