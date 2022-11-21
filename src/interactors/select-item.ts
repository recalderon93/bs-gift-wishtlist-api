import GiftItemModel from "../models/gift-item";
import UserModel, { IUser } from "../models/user";

interface SelectItemInput {
	_id: string;
	ip?: string;
}

export default async function selectItemInteractor({ _id, ip }: SelectItemInput) {
	console.log(_id, ip)
	if (_id&& ip) {
		// Check that user does exist
		const user = await UserModel.findOne({ip});
		console.log(user,'Verification if the user')

		if (!user) {
			const gift = await GiftItemModel.findById(_id);
			const currentQty = gift?.quantity;

			if (currentQty && currentQty > 0) {
				await gift?.update({quantity:currentQty-1})
				if (gift) {
					const user = new UserModel({ itemSelected: _id, ip });
					await user.save();
					return { error: false, user }
				}
			}
		}

	}
	return {
		error: true,
		data: null,
	}
}