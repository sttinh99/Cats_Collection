import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <div
        style={{
          width: "100%",
          height: "50px",
        }}
      >
        Footeaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaar
      </div>
    </>
  );
}

export default MyApp;
