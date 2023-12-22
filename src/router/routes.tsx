import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Pages from "../pages";
import pages from "../pages";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path={"/auth"}>
        <Route path={"login"} element={<Pages.Auth.Login.Component />} />
        <Route
          path={"selectregister"}
          element={<Pages.Auth.Selectregister.Component />}
        />
        <Route
          path={"registerseller"}
          element={<Pages.Auth.Register.Component />}
        />
        <Route
          path={"registercollector"}
          element={<Pages.Auth.CollectorRegister.Component />}
        />
        <Route
          path={"verify-otp/:email"}
          element={<Pages.Auth.VerifyOtp.Component />}
        />
        <Route
          path={"forgot-password"}
          element={<Pages.Auth.Forgotpassword.Component />}
        />
      </Route>

      <Route path={"/"}>
        <Route index element={<Pages.Home.Component />} />
        <Route
          path={pages.Allsellers.path}
          element={<Pages.Allsellers.Component />}
        />
        <Route path="seller/:id" element={<Pages.seller.Component />} />
        <Route path="item/:id" element={<Pages.Item.Component />} />

        <Route
          path={pages.Allitems.path}
          element={<Pages.Allitems.Component />}
        />
        <Route path="seller">
          <Route path="profile" element={<Pages.sellerProfile.Component />} />
          <Route path="additems" element={<Pages.AddItems.Component />} />
        </Route>

        <Route path="collector">
          <Route path="profile" element={<Pages.CollectorProfile.Component />} />
        </Route>
        <Route path ="edit-profile" element={<Pages.EditProfile.Component />} />
      </Route>
    </Route>
  )
);

export const Router = () => {
  return <RouterProvider router={router} />;
};
