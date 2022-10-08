import { RecoilRoot } from "recoil";
import "../assets/stylesheets/globals.scss";

export default function MyApp({ Component, pageProps }) {
  return (
    <RecoilRoot>
      <Component {...pageProps} className="font-gemunu" />
    </RecoilRoot>
  );
}
