import { Request, Response } from 'express';
import getGiftItemInteractor from '../interactors/get-gift-items';

export default function getItemsController(req: Request, res: Response) {
	// console.log(req.socket.remoteAddress)
	getGiftItemInteractor().then(response=> {
		res.json(response);
	})
}