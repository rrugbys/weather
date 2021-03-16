/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type WeatherPageQueryVariables = {|
  name: string
|};
export type WeatherPageQueryResponse = {|
  +getCityByName: ?{|
    +id: ?string,
    +name: ?string,
    +country: ?string,
    +coord: ?{|
      +lon: ?number,
      +lat: ?number,
    |},
    +weather: ?{|
      +summary: ?{|
        +icon: ?string,
        +description: ?string,
        +title: ?string,
      |},
      +temperature: ?{|
        +min: ?number,
        +max: ?number,
        +actual: ?number,
        +feelsLike: ?number,
      |},
      +wind: ?{|
        +speed: ?number,
        +deg: ?number,
      |},
      +clouds: ?{|
        +all: ?number,
        +visibility: ?number,
        +humidity: ?number,
      |},
      +timestamp: ?number,
    |},
  |}
|};
export type WeatherPageQuery = {|
  variables: WeatherPageQueryVariables,
  response: WeatherPageQueryResponse,
|};
*/


/*
query WeatherPageQuery(
  $name: String!
) {
  getCityByName(name: $name) {
    id
    name
    country
    coord {
      lon
      lat
    }
    weather {
      summary {
        icon
        description
        title
      }
      temperature {
        min
        max
        actual
        feelsLike
      }
      wind {
        speed
        deg
      }
      clouds {
        all
        visibility
        humidity
      }
      timestamp
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "name"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "name",
        "variableName": "name"
      }
    ],
    "concreteType": "City",
    "kind": "LinkedField",
    "name": "getCityByName",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "id",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "name",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "country",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "concreteType": "Coordinates",
        "kind": "LinkedField",
        "name": "coord",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "lon",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "lat",
            "storageKey": null
          }
        ],
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "concreteType": "Weather",
        "kind": "LinkedField",
        "name": "weather",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "Summary",
            "kind": "LinkedField",
            "name": "summary",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "icon",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "description",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "title",
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "Temperature",
            "kind": "LinkedField",
            "name": "temperature",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "min",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "max",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "actual",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "feelsLike",
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "Wind",
            "kind": "LinkedField",
            "name": "wind",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "speed",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "deg",
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "Clouds",
            "kind": "LinkedField",
            "name": "clouds",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "all",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "visibility",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "humidity",
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "timestamp",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "WeatherPageQuery",
    "selections": (v1/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "WeatherPageQuery",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "95eb2b73453cde61894e6f1d5510beff",
    "id": null,
    "metadata": {},
    "name": "WeatherPageQuery",
    "operationKind": "query",
    "text": "query WeatherPageQuery(\n  $name: String!\n) {\n  getCityByName(name: $name) {\n    id\n    name\n    country\n    coord {\n      lon\n      lat\n    }\n    weather {\n      summary {\n        icon\n        description\n        title\n      }\n      temperature {\n        min\n        max\n        actual\n        feelsLike\n      }\n      wind {\n        speed\n        deg\n      }\n      clouds {\n        all\n        visibility\n        humidity\n      }\n      timestamp\n    }\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '760a014fe190034101999676eafa0278';

module.exports = node;
