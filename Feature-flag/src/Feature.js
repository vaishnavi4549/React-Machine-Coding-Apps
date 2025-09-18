import { createContext, useContext, useState } from "react";

export const FeatureFlagContext = createContext({});

export const FeatureFlagProvider = ({ children }) => {
  const [featureFlags, setFeatureFlags] = useState({
    showChannels: false,
    showImpersonation: false,
  });

  const toggleFlag = (flagName) => {
    setFeatureFlags((prev) => ({
      ...prev,
      [flagName]: !prev[flagName],
    }));
  };

  return (
    <FeatureFlagContext.Provider value={{ featureFlags, toggleFlag }}>
      {children}
    </FeatureFlagContext.Provider>
  );
};
