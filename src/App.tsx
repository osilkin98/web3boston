import React from "react";
import "./App.css";

type TileProps = {
  children: React.ReactNode;
};

/** Render a tile on the page.
 *
 * @param props TileProps - Properties to be used by the Tile.
 * @returns
 */
const Tile = (props: TileProps) => {
  return (
    <div className="hover:border-l-white border-transparent border-solid  border-2 max-w-xl mx-auto px-4 my-4 py-1 ">
      {props.children}
    </div>
  );
};

function App() {
  const header3Style = "font-sans text-2xl font-semibold";
  const linkStyle = "hover:text-black hover:bg-white px-1 rounded-sm";
  return (
    <div className="App bg-scroll">
      <div className="">
        {/* header */}
        <div className="py-8 border-b-2 mx-16">
          {/* FIXME: better font */}
          <h1 className="text-white font-sans text-6xl font-extrabold">
            Web3B
          </h1>
          <h2 className="text-white font-sans text-2xl pt-2">
            Boston WeB3 Builders{" "}
          </h2>
        </div>
        {/* main  */}
        <div className="text-white text-left">
          <Tile>
            <p className="text-lg">
              The <span className="font-mono">Web3B</span> can be explained with
              the following 5 W's:
            </p>
          </Tile>
          <Tile>
            <h3 className={header3Style}>
              <span className="font-mono">Who</span> is Web3B?
            </h3>
            <p className="">
              We are a collective community of individuals located in the Boston
              region interested in the web3 space. Web3B welcomes all skill
              levels, so feel free to join even if you are just learning about
              Web3 🙂
            </p>
          </Tile>
          <Tile>
            <h3 className={header3Style}>
              <span className="font-mono  ">What</span> is Web3B?
            </h3>
            <p className="">
              Web3B is a community for web3 Bostonians to come together and
              learn about new developments, collaborate, or share laughs.
            </p>
          </Tile>
          <Tile>
            <h3 className={header3Style}>
              <span className="font-mono">When</span> does Web3B meet?
            </h3>
            <p className="">TBD</p>
          </Tile>
          <Tile>
            <h3 className={header3Style}>
              <span className="font-mono">Where</span> does Web3B meet?
            </h3>
            <p className="">
              We are working on an online community, in-person meetings are TBD
            </p>
          </Tile>
          <Tile>
            <h3 className={header3Style}>
              <span className="font-mono">How</span> do I join Web3B?
            </h3>
            <p className="">Links:</p>
            <div className="pl-4">
              <ul className="list-disc">
                <li className="">
                  {/* OPTIMIZE: create a dynamic way to load these in case of link changes */}
                  <a className={linkStyle} href="https://discord.gg/TPzf2NH5Wm">
                    Discord
                  </a>
                </li>
                <li className="">
                  <a className={linkStyle} href="https://lu.ma/web3boston">
                    Luma
                  </a>
                </li>
              </ul>
            </div>
          </Tile>
          <Tile>
            <h3 className={header3Style}>
              <span className="font-mono">Why</span> would I join Web3B?
            </h3>
            <p className="">Why not?</p>
          </Tile>
        </div>
      </div>
    </div>
  );
}

export default App;
