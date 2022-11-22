import GiftItemModel from "../models/gift-item";

interface SelectItemInput {
	_id: string;
	qty: number;
	ip?: string;
}

export default async function selectItemInteractor({ _id, qty, ip }: SelectItemInput) {
	if (_id&& ip) {
		// Check that user does exist

			const gift = await GiftItemModel.findById(_id);
			const currentQty = gift?.quantity;
		if (gift) {

			if (currentQty && currentQty > 0) {
				await gift.update({quantity: currentQty - qty})
				return { error: false }
			}
		}

	}
	return {
		error: true,
		data: null,
	}
}