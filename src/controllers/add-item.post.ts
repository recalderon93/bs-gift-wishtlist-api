import { Request, Response} from 'express';
import addGiftItemInteractor from '../interactors/add-gift-item';

export default function AddItemController (req: Request, res: Response) {
	console.log(req.body);
	addGiftItemInteractor(req.body).then(response => {
		// @ts-ignore
		res.json(response);
	});

}