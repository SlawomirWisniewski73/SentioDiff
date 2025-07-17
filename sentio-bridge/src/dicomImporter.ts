// sentio-bridge/src/dicomImporter.ts

import { Track } from "../../sentio-core/src/types";

export function importDICOM(fileData: ArrayBuffer): Track<any>[] {
  // Placeholder: DICOM parsing not implemented.
  // In a real scenario, one could use a DICOM library to extract image frames or sensor readings.
  console.log("importDICOM: stub function (no real DICOM parsing).");
  return [];
}
