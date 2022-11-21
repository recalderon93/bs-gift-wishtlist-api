import { GiftItemBase } from "../../types";
import GiftItemModel from "../models/gift-item";

interface UpdateGiftInput{
	_id: string,
	data: Partial<GiftItemBase>
}
export default async function updateGiftItems({
	_id,	data
}: UpdateGiftInput) {
	try {
		const filter = { _id };
		console.log(filter, _id, data)
		const giftItem = await GiftItemModel.findOneAndUpdate(filter, data);
		await giftItem?.update();

		return {
			data: giftItem,
			error: false,
		}
	} catch (e) {
		console.log(e);
		return {
			error: true,
			data:null
		}
	}
}