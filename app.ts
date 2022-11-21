import Express from 'express';
import cors from 'cors';
import * as dotEnv from 'dotenv';
import mongoose from 'mongoose';
import getItemsController from './src/controllers/get-items.get';
import AddItemController from './src/controllers/add-item.post';
import deleteItemController from './src/controllers/delete-item.post';
import updateGiftItems from './src/interactors/update-gift-items';
import updateItemController from './src/controllers/update-item.post';
import selectItemController from './src/controllers/select-item.patch';

dotEnv.config();
const app = Express();

const port = process.env.PORT;

app.use(Express.json())

app.use(cors());

app.get('/', (req,res)=>{res.json({name:'geek'})})

app.get('/get-items', getItemsController)

app.post('/add-item', AddItemController);

app.delete('/delete-item', deleteItemController);

app.put('/update-item', updateItemController);

app.patch('/select-item', selectItemController);

async function startApp() {
	try {
		await mongoose.connect(process.env.MONGO_URI||'')
		app.listen(port, () => {
			console.log(`Server start on Port: ${port}`);
		})
	} catch (error) {
		console.log(error);
		process.exit(1);
	}
}

startApp();