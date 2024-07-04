import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider, useDispatch, useSelector } from "react-redux";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import Signin from "./components/Signin";
import Privacy from "./components/Privacy";
import Terms from "./components/Terms";
import About from "./components/About";
import ProfileForm from "./components/ProfileForm";
import ProfileEdit from "./components/ProfileEdit";
import store from "./redux/store";
import { loginSuccess } from "./redux/authReducer";
import ProfileView from "./components/ProfileView";
import SIPCalculator from "./components/Calculators/SipCalculator";
import LumpsumCalculator from "./components/Calculators/LumpsumCalculator";
import StepUpSIPCalculator from "./components/Calculators/StepUpSIPCalculator";
import SWPCalculator from "./components/Calculators/SWPCalculator";
import STPCalculator from "./components/Calculators/STPCalculator";
import BuyDreamCar from "./components/Goals/DreamCar";
import DreamHouseGoal from "./components/Goals/DreamHouse";
import ChildEducationGoal from "./components/Goals/ChildPlan";
import ChildMarriageGoal from "./components/Goals/ChildMarriage";
import BuildYourCorpus from "./components/Goals/Corpus";
import PlanYourGoal from "./components/Goals/PlanYourGoal";
import PlanYourRetirement from "./components/Goals/RetirementCalc";
import GoalsPage from "./components/Goals/Goals";
import PlanYourChildEducation from "./components/Goals/ChildEducation";
import CalculatorsPage from "./components/Calculators/Calculators";
import AboutUs1 from "./components/About1";
import Carousel from "./components/Carousel";
import Blog from "./components/Blogs";
import ExploreYourself from "./components/EYourself";
import Calendly from "./components/Appointment";
import ContactUsPage from "./components/ContactUs";
import ContactForm from "./components/Contact";
import ProtectedRoute from "./components/ProtectedRoute";
import ComingSoonPage from "./components/ComingSoon";

function App() {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const user = JSON.parse(localStorage.getItem("user"));
    if (token && user) {
      dispatch(loginSuccess(user, token));
    }
  }, [dispatch]);

  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/contact" element={<ContactForm />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/about" element={<About />} />
        <Route path="/sipcalculator" element={<SIPCalculator />} />
        <Route path="/lumpsumcalculator" element={<LumpsumCalculator />} />
        <Route path="/stepupsipcalculator" element={<StepUpSIPCalculator />} />
        <Route path="/swpcalculator" element={<SWPCalculator />} />
        <Route path="/stpcalculator" element={<STPCalculator />} />
        <Route path="/dreamcar" element={<BuyDreamCar />} />
        <Route path="/dreamhouse" element={<DreamHouseGoal />} />
        <Route path="/childplan" element={<ChildEducationGoal />} />
        <Route path="/childmarriage" element={<ChildMarriageGoal />} />
        <Route path="/corpus" element={<BuildYourCorpus />} />
        <Route path="/planyourgoal" element={<PlanYourGoal />} />
        <Route path="/retirementcalculator" element={<PlanYourRetirement />} />
        <Route path="/goals" element={<GoalsPage />} />
        <Route path="/childeducation" element={<PlanYourChildEducation />} />
        <Route path="/calculators" element={<CalculatorsPage />} />
        <Route path="/eyourself" element={<ExploreYourself />} />
        <Route path="/aboutus" element={<AboutUs1 />} />
        <Route path="/carousel" element={<Carousel />} />
        <Route path="/blogs" element={<Blog />} />
        <Route path="/contactus" element={<ContactUsPage />} />
        <Route path="/comingsoon" element={<ComingSoonPage />} />

        <Route element={<ProtectedRoute isAuthenticated={isAuthenticated} />}>
          <Route path="/profile" element={<ProfileForm />} />
          <Route path="/profile/view" element={<ProfileView />} />
          <Route path="/profile/edit" element={<ProfileEdit />} />
        </Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default function AppWrapper() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  );
}
