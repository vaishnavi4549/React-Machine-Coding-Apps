import "./styles.css";
import React, { useContext } from "react";
import { FeatureFlagContext } from "./Feature";

export default function App() {
  const { featureFlags, toggleFlag } = useContext(FeatureFlagContext);
  const showChannels = featureFlags["showChannels"];
  const showImpersonation = featureFlags["showImpersonation"];
  return (
    <div>
      <h1>Feature Flag</h1>

      {showChannels ? (
        <h2>Show feature flag screen</h2>
      ) : (
        <h2>No feature flag</h2>
      )}
      <button onClick={() => toggleFlag("showChannels")}>
        Toggle Channels
      </button>

      {showImpersonation ? (
        <h2>Show Impersonation screen</h2>
      ) : (
        <h2>No Impersonation</h2>
      )}
      <button onClick={() => toggleFlag("showImpersonation")}>
        Toggle Impersonation
      </button>
    </div>
  );
}
