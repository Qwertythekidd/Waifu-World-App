import mongoose from 'mongoose';

const reviewSchema = new mongoose.Schema(
	{
		name: {type: String, required: true},
		comment: {type: String, required: true},
		rating: {type: Number, required: true},
	},
	{
		timestamps: true,
	}
);
const productSchema = new mongoose.Schema(
	{
		name: {type: String, required: true, unique: true},
		seller: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
		image: {type: String, required: true},
		brand: {type: String, required: true},
		category: {type: String, required: true},
		description: {type: String, required: true},
		price: {type: Number, requred: true},
		countInStock: {type: Number, requred: true},
		rating: {type: Number, requred: true},
		numReviews: {type: Number, requred: true},
		reviews: [reviewSchema]
	},
	{
		timestamps: true,
	}
);
const Product = mongoose.model('Product', productSchema);

export default Product;