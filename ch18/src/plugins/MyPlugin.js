
//create plugin
import User from "../components/User.vue"

export default {
    install: (app, options) => {
        //global component create
        app.component('User', User)

        //custom directive create
        /* app.directive('font-size', (el, binding) => {
           // el.style.fontSize = "70px";

            //option passing
            //el.style.fontSize = options.fontSize;
        }) */

        //provide and inject
         app.provide("website", "Coderjack");
    }
}