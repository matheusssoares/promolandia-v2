import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'br.com.promolandia',
  appName: 'Promolândia',
  webDir: 'src',
  bundledWebRuntime: false,
  server: {
    androidScheme: 'https',
    cleartext: true,
    url: 'https://10.0.0.151:8100'
  }
};

export default config;
