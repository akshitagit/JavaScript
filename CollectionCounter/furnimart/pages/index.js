import { Header } from "../components";
import { Home } from "../components/Home/Home";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useSetRecoilState } from "recoil";
import { currentUserState } from "../lib/recoil-atoms";

const IndexPage = () => {
  const router = useRouter();
  const setUserState = useSetRecoilState(currentUserState);

  useEffect(() => {
    const _currentUser = JSON.parse(localStorage.getItem("currentUser"));
    if (_currentUser) {
      setUserState(_currentUser); // Set current user state fetched from local storage
    } else {
      router.push("/login");
    }
  }, []);
  return (
    <>
      <Header />
      <Home />;
    </>
  );
};

export default IndexPage;
