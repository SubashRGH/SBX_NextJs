import Header from "./Header";
import Footer from "./Footer";
import { useRouter } from "next/router";
import { LanguageWrapper } from "./LanguageWrapper";
import Award from "./Award";

export default function Layout({ children }: { children: any }) {
  const router = useRouter();

  const shouldShowHeader = (pathname: string) => {
    return (
      pathname !== "/generic-landing" &&
      !pathname.includes("/thanks") &&
      !pathname.includes("/campaign") &&
      !pathname.includes("/vncampaign") &&
      !pathname.includes("/2024-NY-CashbackCampaign")
    );
  };

  const shouldShowFooter = (pathname: string) => {
    return (
      pathname !== "/generic-landing" &&
      !pathname.includes("/thanks") &&
      !pathname.includes("/campaign") &&
      !pathname.includes("/vncampaign") &&
      !pathname.includes("/2024-NY-CashbackCampaign")
    );
  };

  return (
    <>
      <LanguageWrapper>
        {shouldShowHeader(router.pathname) && <Header />}
        <main>{children}</main>
        {shouldShowFooter(router.pathname) && (
          <>
            {/* <Award /> */}
            <Footer />
          </>
        )}
      </LanguageWrapper>
    </>
  );
}

