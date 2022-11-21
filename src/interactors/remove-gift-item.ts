import GiftItemModel from '../models/gift-item';

interface RemoveGiftInput {
	_id: string;
}

export default async function removeGiftItem({ _id }:RemoveGiftInput) {
	try {
	const response = await GiftItemModel.findByIdAndDelete(_id);
		console.log(response);
		return {
			error: false,
			data: response
	}

	} catch (error) {
		console.log(error);
		return {
			error: true,
			data:null
		}
	}
}