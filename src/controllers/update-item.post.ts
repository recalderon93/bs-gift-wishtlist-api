import { Request, Response } from 'express';
import updateGiftItems from '../interactors/update-gift-items';

export default function updateItemController(req: Request, res: Response) {
	const { _id, ...data } = req.body;
	console.log(req.body, _id, data);
	//@ts-ignore
	updateGiftItems({_id, data}).then(response => {
		res.json(response);
	})
}