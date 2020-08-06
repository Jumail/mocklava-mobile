import * as eva from "@eva-design/eva";
import { ApplicationProvider, IconRegistry } from "@ui-kitten/components";
import { EvaIconsPack } from "@ui-kitten/eva-icons";
import React from "react";
import { AppNavigator } from "./src/AppNavigator.js";
import { default as theme } from "./theme.json"; // <-- Import app theme

export default () => (
  <>
    <IconRegistry icons={EvaIconsPack} />
    <ApplicationProvider
      {...eva}
      theme={{ ...eva.dark, ...theme }}
      // customMapping={mapping}
    >
      <AppNavigator />
    </ApplicationProvider>
  </>
);
