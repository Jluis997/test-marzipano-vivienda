var APP_DATA = {
  "scenes": [
    {
      "id": "0-cocina",
      "name": "COCINA",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.4567269745642921,
          "pitch": 0.30730202750202196,
          "rotation": 0,
          "target": "1-sala-comedor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-sala-comedor",
      "name": "SALA COMEDOR",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.2514977954320017,
          "pitch": 0.34964404476212785,
          "rotation": 0,
          "target": "2-exterior"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-exterior",
      "name": "EXTERIOR",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.6371880988281546,
          "pitch": 0.2925317030296757,
          "rotation": 0,
          "target": "0-cocina"
        },
        {
          "yaw": 0.5522540659796729,
          "pitch": 0.2697185374412676,
          "rotation": 0,
          "target": "0-cocina"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "VIVIENDA DE RECREACIÓN",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
