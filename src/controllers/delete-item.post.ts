import { Request, Response } from 'express';
import removeGiftItem from '../interactors/remove-gift-item';

export default function deleteItemController (req: Request, res: Response) {
	console.log(req.body);
	removeGiftItem(req.body).then(response => {
		res.json(response);
	});
}