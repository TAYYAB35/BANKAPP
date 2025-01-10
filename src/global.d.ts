// src/global.d.ts
interface Window {
    snapKitInit: () => void;
    snap: {
      loginkit: {
        mountButton: (targetElementId: string, options: any) => void;
        fetchUserInfo?: () => Promise<any>;
      };
    };
  }
  