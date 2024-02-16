import mongoose from "mongoose";

const orderSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User",
    },
    orderItems: [
        {
            name: { type: "string", required: true},
            qty: { type: "string", required: true},
            image: { type: "string", required: true},
            price: { type: "string", required: true},
            product: {
                type: mongoose.Schema.Types.ObjectId,
                required: true,
                ref: "Product"
            },
            
        }
    ],
    shippingAddress: {
        address: { type: "string", required: true},
        city: { type: "string", required: true},
        postalCode: { type: "string", required: true},
        country: { type: "string", required: true},
    },
    paymentMethod: {
        type: String,
        required: true,
    },
    paymentResult: {
        id: {type: String},
        status: {type: String},
        update_time: {type: String},
        email_address: {type: String},
    },

    itemsPrice: {
        type: Number,
        required: true,
        default: 0.0,
    },
    taxPrice: {
        type: Number,
        required: true,
        default: 0.0,
    },
    shippingPrice:{
        type: Number,
        required: true,
        default: 0.0,
    },
    totalPrice:{
        type: Number,
        required: true,
        default: 0.0,
    },
    isPaid:{
        type: Boolean,
        required: true,
        default: false,
    },
    paidAt:{
        type: Date,
        
    },
    isDelivered:{
        type: Boolean,
        required: true,
        default: false,
    },
    deliveredAt:{
        type: Date,
    },
}, {
    timestamps: true, 
});

const Order = mongoose.model('Order', orderSchema);

export default Order;