import { Route, Routes } from "react-router-dom";

import Home from "./pages/home/home.component";
import Cards from "./pages/cards/cards.component";
import Welcome from "./pages/welcome/welcome.component";
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

import { PrivateRoute } from "./utils/private-route.utils";
import { HasBeenRoute } from "./utils/has-been-route.utils";

import Layout from "./components/layout/layout.component";
import { Auth, Callback } from "./App";
import Loading from "./components/loading/loading.component";
import Ads from "./pages/ads/ads.component";
import MyMachine from "./pages/my-machine/my-machine.component";

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route
        index
        element={
          <HasBeenRoute>
            <Welcome />
          </HasBeenRoute>
        }
      />
      <Route path="onboarding" element={<OnboardingWizard />} />
      <Route path="auth" element={<Auth />} />
      <Route path="/:callback" element={<Callback />} />

      <Route
        path="create-account"
        element={
          <PrivateRoute>
            <AddCustomer />
          </PrivateRoute>
        }
      />
      <Route
        path="face-validation"
        element={
          <PrivateRoute>
            <FaceValidation />
          </PrivateRoute>
        }
      />

      <Route
        path="payment-list"
        element={
          <PrivateRoute>
            <PaymentList />
          </PrivateRoute>
        }
      />
      <Route
        path="add-credit-card"
        element={
          <PrivateRoute>
            <AddCreditCard />
          </PrivateRoute>
        }
      />
      <Route
        path="add-payment-success"
        element={
          <PrivateRoute>
            <AddPaymentSuccess />
          </PrivateRoute>
        }
      />
      <Route
        path="add-payment-failed"
        element={
          <PrivateRoute>
            <AddPaymentFailed />
          </PrivateRoute>
        }
      />

      <Route
        path="order-success"
        element={
          <PrivateRoute>
            <OrderSuccess />
          </PrivateRoute>
        }
      />

      <Route
        path="order-created-success"
        element={
          <PrivateRoute>
            <OrderCreatedSuccess />
          </PrivateRoute>
        }
      />

      <Route
        path="order-cancelled"
        element={
          <PrivateRoute>
            <OrderCancelled />
          </PrivateRoute>
        }
      />

      <Route
        path="feedback/:id"
        element={
          <PrivateRoute>
            <Feedback />
          </PrivateRoute>
        }
      />

      <Route
        path="home"
        element={
          <PrivateRoute>
            <Home />
          </PrivateRoute>
        }
      />

      <Route
        path="read-qr"
        element={
          <PrivateRoute>
            <ReadQRCode />
          </PrivateRoute>
        }
      />
      <Route
        path="cards"
        element={
          <PrivateRoute>
            <Cards />
          </PrivateRoute>
        }
      />
      <Route
        path="purchases"
        element={
          <PrivateRoute>
            <Purchases />
          </PrivateRoute>
        }
      />
      <Route
        path="loading"
        element={
          <PrivateRoute>
            <Loading />
          </PrivateRoute>
        }
      />
      <Route
        path="machines"
        element={
          <PrivateRoute>
            <MyMachine />
          </PrivateRoute>
        }
      />
    </Route>
    <Route path="monitor" element={<Ads />} />
  </Routes>
);

export default AppRoutes;
