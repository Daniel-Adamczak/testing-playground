import React, { useState } from "react";
import { calcCMtoDM, calcCMtoKM, calcCMtoMM } from "./utils";

/**
 * Zadanie
 *
 * Dokończ aplikacje tak żeby funkcjonalnośc convertera działała
 * Następnie stwórz funkcje jednostkowe dla funkcji pomocniczych:
 *  - calcCMtoDM
 *  - calcCMtoMM
 *  - calcCMtoKM
 *
 * Przetestuj też widok za pomocą Cypressa
 *
 */

export const Converter = () => {
  const [valueCM, setValueCM] = useState("");

  const valueDM = calcCMtoDM(valueCM);
  const valueMM = calcCMtoMM(valueCM);
  const valueKM = calcCMtoKM(valueCM);

  return (
    <article>
      <h1>Converter</h1>
      <label>
        CM
        <input type="number" />
      </label>
      <label>
        DM
        <input type="text" readOnly value={valueDM} />
      </label>
      <label>
        MM
        <input type="text" readOnly value={valueMM} />
      </label>
      <label>
        KM
        <input type="text" readOnly value={valueKM} />
      </label>
    </article>
  );
};
