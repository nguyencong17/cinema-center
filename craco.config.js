const { default: Base } = require("antd/lib/typography/Base");
const CracoLessPlugin = require("craco-less");

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { 
              '@primary-color': '#1A161F',
              '@body-background': '#0D0C0F',

              '@font-size-base': '10px',

              '@margin-lg': '24px', // containers
              '@margin-md': '16px', // small containers and buttons
              '@margin-sm': '12px', // Form controls and items
              '@margin-xs': '8px', // small items
              '@margin-xss': '4px',

              '@padding-lg': '24px', // containers
              '@padding-md': '16px', // small containers and buttons
              '@padding-sm': '12px', // Form controls and items
              '@padding-xs': '8px', // small items
              '@padding-xss': '4px',

              '@white': '#fff',
              '@black': '#000',
              '@line-height-base': '1.5',

              '@btn-border-radius-base': '0',
              '@btn-primary-color': "#fff",
              '@btn-primary-bg': '#EA1C24',

              '@layout-body-background': '#0D0C0F',
              '@layout-header-background': '#0D0C0F',
              '@layout-header-height': '64px',
              '@layout-header-padding': '0 50px',
              '@layout-header-color': '#fff',
              '@layout-footer-padding': '24px 50px',
              '@layout-footer-background': '#0D0C0F',
              '@layout-sider-background': '#0D0C0F',

              '@border-radius-base': '10px',
              '@border-color-base': '#e5e7eb',
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};