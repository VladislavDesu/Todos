const path = require("path");
const resolve = arg => path.resolve(__dirname, arg);

module.exports = {
    webpack: {
        alias: {
            "@": resolve("src/"),
            "@assets": resolve("src/assets/"),
            "@styles": resolve("src/assets/styles/"),
            "@components": resolve("src/components/"),
            "@utils": resolve("src/utils/"),
        }
    }
};