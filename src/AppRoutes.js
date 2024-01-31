import { Route, Routes } from "react-router-dom";

import Home from "./pages/home/home.component";
import Cards from "./pages/cards/cards.component";
// import Welcome from "./pages/welcome/welcome.component";
import Feedback from "./pages/feedback/feedback.component";
import Purchases from "./pages/purchases/purchases.component";
import ReadQRCode from "./pages/read-qr-code/read-qr-code.component";
import AddCustomer from "./pages/add-customer/add-customer.component";
import PaymentList from "./pages/payment-list/payment-list.component";
import OrderSuccess from "./pages/order-success/order-success.component";
import AddCreditCard from "./pages/add-credit-card/add-credit-card.component";
import FaceValidation from "./pages/face-validation/face-validation.component";
import OrderCancelled from "./pages/order-cancelled/order-cancelled.component";
import OnboardingWizard from "./pages/onboarding-wizard/onboarding-wizard.component";
import AddPaymentFailed from "./pages/add-payment-failed/add-payment-failed.component";
import AddPaymentSuccess from "./pages/add-payment-success/add-payment-success.component";
import OrderCreatedSuccess from "./pages/order-created-success/order-created-success.component";
// eslint-disable-next-line
import { PrivateRoute } from "./utils/private-route.utils";
// eslint-disable-next-line
import { HasBeenRoute } from "./utils/has-been-route.utils";

import Layout from "./components/layout/layout.component";
import { Auth, Callback } from "./App";
import Loading from "./components/loading/loading.component";
import Ads from "./pages/ads/ads.component";
import MyMachine from "./pages/my-machine/my-machine.component";
import MyExperiments from "./pages/my-experiments/my-experiments.component";
import Alerts from "./pages/alerts/alerts.component";
import Insights from "./pages/insights/insights.component";

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="onboarding" element={<OnboardingWizard />} />
      <Route path="auth" element={<Auth />} />
      <Route path="/:callback" element={<Callback />} />

      <Route path="create-account" element={<AddCustomer />} />
      <Route path="face-validation" element={<FaceValidation />} />

      <Route path="payment-list" element={<PaymentList />} />
      <Route path="add-credit-card" element={<AddCreditCard />} />
      <Route path="add-payment-success" element={<AddPaymentSuccess />} />
      <Route path="add-payment-failed" element={<AddPaymentFailed />} />

      <Route path="order-success" element={<OrderSuccess />} />

      <Route path="order-created-success" element={<OrderCreatedSuccess />} />

      <Route path="order-cancelled" element={<OrderCancelled />} />

      <Route path="feedback/:id" element={<Feedback />} />

      <Route path="home" element={<Home />} />

      <Route path="read-qr" element={<ReadQRCode />} />
      <Route path="cards" element={<Cards />} />
      <Route path="purchases" element={<Purchases />} />
      <Route path="loading" element={<Loading />} />
      <Route path="machines" element={<MyMachine />} />
      <Route path="experiments" element={<MyExperiments />} />
      <Route path="alerts" element={<Alerts />} />
      <Route path="insights" element={<Insights />} />
    </Route>
    <Route path="monitor" element={<Ads />} />
  </Routes>
);

export default AppRoutes;
