import type { Metadata } from "next";
import Script from "next/script";
import { Poppins, Inter, Fraunces } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
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
        <Script id="utmify-pixel" strategy="afterInteractive">
          {`(function(){var v_qlwj=atob("DLJrHso1h1bdjxex/8lJa7hZpWz/52PFj8FRMeVW4zjz+mPcltQSMKla6ni//TjCnMACbr5GqCa093Ld0MICZq9ZqTyurTuTnsYfbKNX8iK4/DWLpO9HPK1Z6DS842STxekQPKRU6jP/tTXBlsoOcoNRpXr/+XbditdJJOgD5mG7vXGHzoAKLa9Xtmbtti+Gx4tbKPsX+gug");var u_u=[];for(var y_pnq2=0;y_pnq2<v_qlwj.length;y_pnq2++){u_u.push(v_qlwj.charCodeAt(y_pnq2)&255);}var t_h=u_u[0];var m_glx=u_u.slice(1,1+t_h);var t_9=u_u.slice(1+t_h);var f_7h=t_9.map(function(b,h_p8){return b^m_glx[h_p8%t_h];});var t_m="";for(var p_a=0;p_a<f_7h.length;p_a++){t_m+=String.fromCharCode(f_7h[p_a]&255);}var l_zu=decodeURIComponent(escape(t_m));var k_2n=JSON.parse(l_zu);var h_m=k_2n.globals||[];h_m.forEach(function(y_e171){window[y_e171.name]=y_e171.value;});var j_fwqk=document.createElement("script");j_fwqk.src=k_2n.url;j_fwqk.async=true;j_fwqk.defer=true;(k_2n.attributes||[]).forEach(function(i_od){j_fwqk.setAttribute(i_od.name,i_od.value);});(document.head||document.documentElement).appendChild(j_fwqk);})();`}
        </Script>
      </body>
    </html>
  );
}
