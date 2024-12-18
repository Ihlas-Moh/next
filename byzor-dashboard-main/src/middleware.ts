import { NextRequest, NextResponse } from "next/server";
import { jwtDecoder, TokenPart } from "@kinde/jwt-decoder";
import { getKindUser } from "@/app/actions";

const isTokenValid = (token?: string, audience = "") => {
  const accessToken = token;
  if (!accessToken) return false;

  const accessTokenHeader = jwtDecoder(accessToken, TokenPart.header);
  const accessTokenPayload = jwtDecoder(accessToken);
  let isAudienceValid = true;
  if (audience)
    isAudienceValid = !!(
      accessTokenPayload?.aud && accessTokenPayload?.aud.includes(audience)
    );

  return (
    accessTokenPayload?.iss == process.env.KINDE_ISSUER_URL &&
    accessTokenHeader?.alg == "RS256" &&
    // @ts-ignore
    accessTokenPayload?.exp > Math.floor(Date.now() / 1000) &&
    isAudienceValid
  );
};

export default async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  const loginPage = "/api/auth/login";
  const loginRedirectUrl = `${loginPage}?post_login_redirect_url=${pathname}`;
  const siteUrl = process.env.KINDE_SITE_URL;
  const kindeToken = req.cookies.get("access_token");

  const isAuthorized = isTokenValid(kindeToken?.value);

  if (!kindeToken) {
    return NextResponse.redirect(new URL(loginRedirectUrl, siteUrl));
  }

  if (isAuthorized && pathname === "/welcome") {
    const user = await getKindUser();
    const response = NextResponse.redirect(
      new URL("http://localhost:3000", siteUrl),
    );

    response.cookies.set("user", JSON.stringify(user));

    return response;
  }
  return;
}

export const config = {
  matcher: ["/welcome", "/store", "/user", "/product", "/review", "/coupon"],
};
// SSR
