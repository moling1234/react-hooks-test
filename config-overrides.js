const path = require('path');
const rewiredAliases = require('@ifchange-engr/rewired-aliases');

module.exports=(config, env) => {
    // 别名配置
    config = rewiredAliases({
        '@': path.join(__dirname, './src')
    })(config, env);

    return config;
};
