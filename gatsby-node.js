/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

 const path = require("path");

 exports.onCreateWebpackConfig = ({ actions }) => {
   actions.setWebpackConfig({
     resolve: {
       alias: {
         "@components": path.resolve(__dirname, "src/components"),
         "@assets": path.resolve(__dirname, "src/assets"),
         "@utils": path.resolve(__dirname, "src/utils"),
         "@static": path.resolve(__dirname, "static")
       }
     }
   });
 }
