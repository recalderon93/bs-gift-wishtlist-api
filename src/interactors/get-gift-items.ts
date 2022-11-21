import { HydratedDocument  } from "mongoose";
import GiftItemModel from "../models/gift-item";

export default async function getGiftItemInteractor() {
	try {
		const giftItemList = await GiftItemModel.find();
		return {
			error: false,
			data: giftItemList,
		}
	} catch (e) {
		console.log(e);
		return {
			error:true,
			data:null
		}

	}
}