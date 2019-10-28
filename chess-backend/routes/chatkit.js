var Chatkit = require('@pusher/chatkit-server');

const chatkit = new Chatkit.default({
    instanceLocator: 'v1:us1:539de3eb-f409-40f3-99f2-ab76098c9504',
    key: '1360c3eb-6d8e-49fe-8bd4-f2f160fff0a9:lU9dxmOQowcvAlUrikE1DtyVTYTy6qm05Uv/VCqQI4I='
});

module.exports = chatkit;
