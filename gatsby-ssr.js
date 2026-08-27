const React = require("react")

exports.onRenderBody = ({ setHeadComponents, setPreBodyComponents }) => {
  setHeadComponents([
    // YouTube identifies the embedding site from the Referer header. If the host
    // serves a stricter Referrer-Policy the embeds fail with "Error 153", so pin
    // the browser default explicitly.
    <meta
      key="referrer-policy"
      name="referrer"
      content="strict-origin-when-cross-origin"
    />,
    <script
      key="gtm-script"
      dangerouslySetInnerHTML={{
        __html: `
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-WGJP69ZR');
        `,
      }}
    />,
    <React.Fragment key="gtag">
      {/* Google tag (gtag.js) */}
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-PRRKEY5NP8"></script>
      <script
        dangerouslySetInnerHTML={{
          __html: `
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-PRRKEY5NP8');
        `,
        }}
      />
    </React.Fragment>,
  ])

  setPreBodyComponents([
    <noscript key="gtm-noscript">
      <iframe
        src="https://www.googletagmanager.com/ns.html?id=GTM-WGJP69ZR"
        height="0"
        width="0"
        style={{ display: "none", visibility: "hidden" }}
      />
    </noscript>,
  ])
}
