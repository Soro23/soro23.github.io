import { StyleFunctionProps } from "@chakra-ui/react";
import { mode } from '@chakra-ui/theme-tools'

export default {
  global: (props: StyleFunctionProps) => ({
    body: {
      color: mode('light.text', 'dark.text')(props),
      bg: mode('light.bg','dark.bg')(props),
    },
  }),
};
// success:               '#288528',
// tabIcon:               '#484f58',
// darkColor:             '#0d1117',
// textColor:             '#58a6ff',
// borderColor:           '#dbdbdb',
// headerIcon:            '#f0f6fc',
// borderActive:          '#F78166',
// stickyBorder:          '#161b22',
// textColorDark:         '#c9d1d9',
// borderLineDark:        '#484f5824',
// headerTextColor:       'rgba(240,246,252,0.7)',
// borderColorHover:      '#8b949e',
// buttonBackground:      '#21262d',
// borderColorDark:       '#222',
// borderColorLight:      '#30363d',
// headerBackground:      '#F78166',
// textColorEmphasis:     '#1f6feb',
// buttonBackgroundHover: '#30363d',
// aws: '#FF9900',
// php: '#4f5b93',
// reids: '#d82c20',
// react: '#00d8ff',
// expo: '#000',
// vercel: '#000',
// nodejs: '#44883e',
// graphql: '#e535ab',
// mongodb: '#4DB33D',
// nextjs: '#000',
// heroku: '#6567a5',
// jquery: '#38bdf8',
// netlify: '#00AD9F',
// socketio: '#000',
// wordpress: '#21759b',
// magento: '#f2641c',
// ubuntu: '#FFA611',
// synfony: '#000',
// mysql: '#e39306',
// mssql: '#e3363a',
// composer: '#724a31',
// javascript: '#f7df1e',
// typescript: '#2b7489',
// materialui: '#007fff',
// angularjs: '#db1b16',
// reactnative: '#00d8ff',
// tailwindcss: '#38bdf8',
// java: '#4e7fa0',