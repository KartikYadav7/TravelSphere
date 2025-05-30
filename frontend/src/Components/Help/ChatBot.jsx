import { useEffect } from 'react';

const ChatBot = () => {
  useEffect(() => {
    const existingScript = document.getElementById('bp-webchat-script');
    if (existingScript) return;

    const script = document.createElement('script');
    script.id = 'bp-webchat-script';
    script.src = 'https://cdn.botpress.cloud/webchat/v1/inject.js';
    script.async = true;
    script.onload = () => {
      window.botpressWebChat.init({
       botId: "2dfcc50e-9ab2-4c95-9f1e-15e79585e668",
        //  botId: 'a24bc25d-0645-4448-a41c-f4e06fb2d643',
        clientId:  "2dfcc50e-9ab2-4c95-9f1e-15e79585e668", // Set clientId = botId
        hostUrl: 'https://cdn.botpress.cloud/webchat/v1',
        messagingUrl: 'https://messaging.botpress.cloud',
        composerPlaceholder: 'How can I help you...',
        showPoweredBy: false,
        themeName: 'prism'
      });
    };
    document.body.appendChild(script);
  }, []);

  return null;
};

export default ChatBot;







//  "botId": "2dfcc50e-9ab2-4c95-9f1e-15e79585e668",
//   "clientId": "402b48b4-ad86-4de1-a046-923a841080d1",