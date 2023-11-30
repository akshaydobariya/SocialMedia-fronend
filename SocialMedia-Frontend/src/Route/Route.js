import { createBrowserRouter } from "react-router-dom";
import { lazy, Suspense } from "react";
import App from "../App";
import { ColorRing } from "react-loader-spinner";
// Lazy-loaded components
const Home = lazy(() => import("../Component/Home"));
const SignUp = lazy(() => import("../Account/SignUp"));
const SignIn = lazy(() => import("../Account/SignIn"));
const Post = lazy(() => import("../Component/Post"));
const AddPost = lazy(() => import("../Component/AddPost"));
const Comment = lazy(() => import("../Component/Comment"));
const Profile = lazy(() => import("../Component/Profile"));
const Connection = lazy(() => import("../Component/Connection"));

export const Route = createBrowserRouter([
  { path: "/", element: <SignIn /> },
  {
    path: "/home",
    element: (
      <Suspense
        fallback={
          <div>
            <ColorRing
              visible={true}
              height="40"
              width="40"
              ariaLabel="blocks-loading"
              wrapperStyle={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                minHeight: "80vh",
                minWdith: "100%",
              }}
              wrapperClass="blocks-wrapper"
              colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
            />
          </div>
        }
      >
        <App />
      </Suspense>
    ),
    children: [
      {
        path: "",
        element: (
          <Suspense
            fallback={
              <div>
                <ColorRing
                  visible={true}
                  height="40"
                  width="40"
                  ariaLabel="blocks-loading"
                  wrapperStyle={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    minHeight: "80vh",
                    width: "100%", // Set width to 100%
                  }}
                  wrapperClass="blocks-wrapper"
                  colors={[
                    "#e15b64",
                    "#f47e60",
                    "#f8b26a",
                    "#abbd81",
                    "#849b87",
                  ]}
                />
              </div>
            }
          >
            <Home />
          </Suspense>
        ),
      },
      {
        path: "post",
        element: (
          <Suspense
            fallback={
              <div>
                <ColorRing
                  visible={true}
                  height="80"
                  width="80"
                  ariaLabel="blocks-loading"
                  wrapperStyle={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    minHeight: "80vh",
                    width: "100%", // Set width to 100%
                  }}
                  wrapperClass="blocks-wrapper"
                  colors={[
                    "#e15b64",
                    "#f47e60",
                    "#f8b26a",
                    "#abbd81",
                    "#849b87",
                  ]}
                />
              </div>
            }
          >
            <Post />
          </Suspense>
        ),
      },
      {
        path: "addpost",
        element: (
          <Suspense
            fallback={
              <div>
                <ColorRing
                  visible={true}
                  height="80"
                  width="80"
                  ariaLabel="blocks-loading"
                  wrapperStyle={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    minHeight: "80vh",
                    width: "100%", // Set width to 100%
                  }}
                  wrapperClass="blocks-wrapper"
                  colors={[
                    "#e15b64",
                    "#f47e60",
                    "#f8b26a",
                    "#abbd81",
                    "#849b87",
                  ]}
                />
              </div>
            }
          >
            <AddPost />
          </Suspense>
        ),
      },
      {
        path: "comment/:param1/:param2",
        element: (
          <Suspense
            fallback={
              <div>
                <ColorRing
                  visible={true}
                  height="80"
                  width="80"
                  ariaLabel="blocks-loading"
                  wrapperStyle={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    minHeight: "80vh",
                    width: "100%", // Set width to 100%
                  }}
                  wrapperClass="blocks-wrapper"
                  colors={[
                    "#e15b64",
                    "#f47e60",
                    "#f8b26a",
                    "#abbd81",
                    "#849b87",
                  ]}
                />
              </div>
            }
          >
            <Comment />
          </Suspense>
        ),
      },
      {
        path: "profile/",
        element: (
          <Suspense
            fallback={
              <div>
                <ColorRing
                  visible={true}
                  height="80"
                  width="80"
                  ariaLabel="blocks-loading"
                  wrapperStyle={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    minHeight: "80vh",
                    width: "100%", // Set width to 100%
                  }}
                  wrapperClass="blocks-wrapper"
                  colors={[
                    "#e15b64",
                    "#f47e60",
                    "#f8b26a",
                    "#abbd81",
                    "#849b87",
                  ]}
                />
              </div>
            }
          >
            <Profile />
          </Suspense>
        ),
      },
      {
        path: "connection",
        element: (
          <Suspense
            fallback={
              <div>
                <ColorRing
                  visible={true}
                  height="80"
                  width="80"
                  ariaLabel="blocks-loading"
                  wrapperStyle={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    minHeight: "80vh",
                    width: "100%", // Set width to 100%
                  }}
                  wrapperClass="blocks-wrapper"
                  colors={[
                    "#e15b64",
                    "#f47e60",
                    "#f8b26a",
                    "#abbd81",
                    "#849b87",
                  ]}
                />
              </div>
            }
          >
            <Connection />
          </Suspense>
        ),
      },
    ],
  },
  {
    path: "/signup",
    element: (
      <Suspense
        fallback={
          <div>
            <ColorRing
              visible={true}
              height="80"
              width="80"
              ariaLabel="blocks-loading"
              wrapperStyle={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                minHeight: "80vh",
                width: "100%", // Set width to 100%
              }}
              wrapperClass="blocks-wrapper"
              colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
            />
          </div>
        }
      >
        <SignUp />
      </Suspense>
    ),
  },
]);
