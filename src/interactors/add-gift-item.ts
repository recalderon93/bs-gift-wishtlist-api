import { HydratedDocument } from 'mongoose';
import { GiftItemBase } from '../../types';
import GiftItemModel from '../models/gift-item';

export default async function addGiftItemInteractor({ name, quantity, description, link }: GiftItemBase) {
	try { 
		const giftItem = new GiftItemModel({ name, quantity, description, link });
		const response=await giftItem.save();
		return {
			error: false,
			data:response
		}
	} catch (e) {
		return {
			error: true,
			data:null
		}
	}

}