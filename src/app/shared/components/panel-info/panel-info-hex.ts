import { HexCoordinates, Orientation, defineHex } from 'honeycomb-grid';

export class PanelHex extends defineHex({ dimensions: 90, orientation: Orientation.FLAT, origin: 'topLeft' }) {
  static create(coordinates: HexCoordinates) {
    const hex = new PanelHex(coordinates);
    return hex;
  }
}