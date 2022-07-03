import logo from "../../public/logo.svg";
import Image from "next/image";

export default function Layout({ children }) {
  return (
    <div className="App">
      <header className="App-header">
        <div className="App-logo">
          <Image src={logo} alt="logo" />
        </div>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>

      <div className="App-line"></div>

      <main className="App-main">{children}</main>
      <style jsx>{`
        .App {
          display: flex;
          justify-content: space-between;
          align-items: center;
          height: 100vh;
          width: 100vw;
          background-color: #282c34;
          text-align: center;
        }

        .App-logo {
          height: 40vmin;
          pointer-events: none;
        }

        @media (prefers-reduced-motion: no-preference) {
          .App-logo {
            animation: App-logo-spin infinite 20s linear;
          }
        }

        .App-header {
          width: 45%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          font-size: calc(10px + 2vmin);
          color: white;
        }

        @keyframes App-logo-spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        .App-line {
          height: 50%;
          width: 2px;
          background-color: white;
        }

        .App-main {
          height: 100%;
          width: 45%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          font-size: calc(10px + 2vmin);
          color: white;
        }
      `}</style>
      <style jsx global>{`
        .App-link {
          color: #61dafb;
        }
      `}</style>
    </div>
  );
}
