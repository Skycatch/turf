import { polygon, multiPolygon, Feature, FeatureCollection, LineString } from '@turf/helpers';
import { polygonToLine, multiPolygonToLine } from './';

const poly = polygon([[[125, -30], [145, -30], [145, -20], [125, -20], [125, -30]]]);
const multiPoly = multiPolygon([
  [[[125, -30], [145, -30], [145, -20], [125, -20], [125, -30]]],
  [[[135, -40], [155, -40], [155, -30], [135, -30], [135, -40]]]
]);

const feature = polygonToLine(poly);
const collection = multiPolygonToLine(multiPoly);
