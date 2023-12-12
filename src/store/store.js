import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./features/user/userSlice";
import authReducer from "./features/auth/authSlice";
import cardReducer from "./features/card/cardSlice";
import customerReducer from "./features/customer/customerSlice";
import paymentMethodsReducer from "./features/payment-methods/paymentMethodsSlice";
import productReducer from "./features/product/productSlice";
import orderReducer from "./features/order/orderSlice";
import feedbackReducer from "./features/feedback/feedbackSlice";
import storeReducer from "./features/store/storeSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    auth: authReducer,
    card: cardReducer,
    customer: customerReducer,
    paymentMethods: paymentMethodsReducer,
    products: productReducer,
    order: orderReducer,
    feedback: feedbackReducer,
    store: storeReducer,
  },
});
