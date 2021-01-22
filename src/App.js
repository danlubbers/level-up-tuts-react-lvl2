import logo from "./logo.svg";
import "./App.css";
import { User } from "./User";
import { UserProvider } from "./UserProvider";
import { Transition } from "react-spring/renderprops";

import { ToggleRenderPropsChildren, Modal } from "./utilities";

function App() {
  return (
    <UserProvider>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <User />
          {/* <ToggleRenderProps
          render={({ on, toggle, greeting }) => (
            <>
              {on && <h1>{greeting}</h1>}
              <button onClick={toggle}>Show/Hide</button>
            </>
          )}
        />
        <ToggleRenderProps
          render={({ on, toggle }) => (
            <>
              {on && <h1>Shows it's reusable Code</h1>}
              <button onClick={toggle}>Reusable Show/Hide</button>
            </>
          )}
        /> */}
          {/* <ToggleRenderPropsChildren>
          {({ on, toggle }) => (
            <>
              {on && <h1>CHILDREN</h1>}
              <button onClick={toggle}>Reusable Show/Hide</button>
            </>
          )}
        </ToggleRenderPropsChildren> */}
          <ToggleRenderPropsChildren>
            {({ on, toggle }) => (
              <>
                <button onClick={toggle}>SHOW / HIDE</button>
                <Transition
                  items={on}
                  unique
                  from={{ opacity: 0 }}
                  enter={{ opacity: 1 }}
                  leave={{ opacity: 0 }}
                >
                  {(show) => (styles) =>
                    show && (
                      <div style={{ ...styles }}>Think of the Children!!</div>
                    )}
                </Transition>
              </>
            )}
          </ToggleRenderPropsChildren>
          <ToggleRenderPropsChildren>
            {({ on, toggle }) => (
              <>
                <button onClick={toggle}>Login</button>
                <Modal on={on} toggle={toggle}>
                  Still in Modal
                </Modal>
              </>
            )}
          </ToggleRenderPropsChildren>
        </header>
      </div>
    </UserProvider>
  );
}

export default App;
