import 'src/global.css';
import 'src/locales/i18n';
import ThemeProvider from 'src/theme';
import { LocalizationProvider } from 'src/locales';

import { MotionLazy } from 'src/components/animate/motion-lazy';

import SnackbarProvider from 'src/components/snackbar/snackbar-provider';

import {  SettingsProvider } from 'src/components/settings';

import { AuthProvider } from 'src/auth/context/jwt';

import { CheckoutProvider } from 'src/sections/checkout/context';


import { ProductShopDetailsView } from './sections/product/view';

export default function App() {


  return (
    <AuthProvider>
      <LocalizationProvider>
        <SettingsProvider
          defaultSettings={{
            themeMode: 'light', // 'light' | 'dark'
            themeDirection: 'ltr', //  'rtl' | 'ltr'
            themeContrast: 'default', // 'default' | 'bold'
            themeLayout: 'vertical', // 'vertical' | 'horizontal' | 'mini'
            themeColorPresets: 'default', // 'default' | 'cyan' | 'purple' | 'blue' | 'orange' | 'red'
            themeStretch: false,
          }}
        >
          <ThemeProvider>
            <MotionLazy>
              <SnackbarProvider>
                <CheckoutProvider>
                  {/* <Router /> */}
                  <ProductShopDetailsView />
                </CheckoutProvider>
              </SnackbarProvider>
            </MotionLazy>
          </ThemeProvider>
        </SettingsProvider>
      </LocalizationProvider>
    </AuthProvider>
  );
}
