import mongoose from "mongoose";
import { GiftItemBase } from "../../types";
// Gift Item Schema

const GiftItemSchema = new mongoose.Schema<GiftItemBase>({
	name: String,
	link: String,
	quantity: Number,
	description: String,
})

const GiftItemModel = mongoose.model('GiftItem', GiftItemSchema);

export default GiftItemModel;