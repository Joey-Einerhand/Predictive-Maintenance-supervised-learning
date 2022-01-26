(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{"142f":function(e,t,a){"use strict";a("a6aa")},"159a":function(e,t,a){e.exports=a.p+"../static/img/pipeline.072de736.png"},"162b":function(e,t,a){"use strict";a("826e")},"26d3":function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("h1",{staticClass:"text-4xl text-gray-900 font-bold mb-8"},[e._v("Settings")]),a("div",{staticClass:"max-w-4xl"},[a("modal",{attrs:{name:"train-model",width:"25%",height:"auto",clickToClose:"false",classes:"px-8 py-6 rounded-lg flex justify-center items-center"}},[a("Loading"),a("p",{staticClass:"ml-8"},[e._v(e._s(e.model_message))])],1),a("form",{on:{submit:function(t){return t.preventDefault(),e.train.apply(null,arguments)}}},[a("h2",[e._v("Data settings")]),a("div",{staticClass:"flex items-center mb-2"},[a("label",{staticClass:"w-1/4 mr-4 text-lg font-medium text-gray-900",attrs:{for:"lookback"}},[e._v("Lookback")]),a("input",{directives:[{name:"model",rawName:"v-model.number",value:e.history_window,expression:"history_window",modifiers:{number:!0}}],staticClass:"border border-1 border-gray-500 rounded w-full px-3 py-1",attrs:{type:"number",id:"lookback",name:"lookback"},domProps:{value:e.history_window},on:{input:function(t){t.target.composing||(e.history_window=e._n(t.target.value))},blur:function(t){return e.$forceUpdate()}}})]),a("div",{staticClass:"flex mb-2"},[a("label",{staticClass:"w-1/4 mr-4 text-lg font-medium text-gray-900",attrs:{for:"future"}},[e._v("Future")]),a("input",{directives:[{name:"model",rawName:"v-model.number",value:e.future_window,expression:"future_window",modifiers:{number:!0}}],staticClass:"border border-1 border-gray-500 rounded w-full px-3 py-1",attrs:{type:"number",id:"future",name:"future"},domProps:{value:e.future_window},on:{input:function(t){t.target.composing||(e.future_window=e._n(t.target.value))},blur:function(t){return e.$forceUpdate()}}})]),a("div",{staticClass:"flex mb-2"},[a("label",{staticClass:"w-1/4 mr-4 text-lg font-medium text-gray-900",attrs:{for:"shift"}},[e._v("Shift")]),a("input",{directives:[{name:"model",rawName:"v-model.number",value:e.shift,expression:"shift",modifiers:{number:!0}}],staticClass:"border border-1 border-gray-500 rounded w-full px-3 py-1",attrs:{type:"number",id:"shift",name:"shift"},domProps:{value:e.shift},on:{input:function(t){t.target.composing||(e.shift=e._n(t.target.value))},blur:function(t){return e.$forceUpdate()}}})]),a("div",{staticClass:"flex mb-2"},[a("label",{staticClass:"w-1/4 mr-4 text-lg font-medium text-gray-900",attrs:{for:"random_state"}},[e._v("Random state")]),a("input",{directives:[{name:"model",rawName:"v-model.number",value:e.random_state,expression:"random_state",modifiers:{number:!0}}],staticClass:"border border-1 border-gray-500 rounded w-full px-3 py-1",attrs:{type:"number",id:"random_state",name:"random_state"},domProps:{value:e.random_state},on:{input:function(t){t.target.composing||(e.random_state=e._n(t.target.value))},blur:function(t){return e.$forceUpdate()}}})]),a("h2",[e._v("Train settings")]),a("div",{staticClass:"flex mb-2"},[a("label",{staticClass:"w-1/4 mr-4 text-lg font-medium text-gray-900",attrs:{for:"epochs"}},[e._v("Epochs")]),a("input",{directives:[{name:"model",rawName:"v-model.number",value:e.epochs,expression:"epochs",modifiers:{number:!0}}],staticClass:"border border-1 border-gray-500 rounded w-full px-3 py-1",attrs:{type:"number",id:"epochs",name:"epochs"},domProps:{value:e.epochs},on:{input:function(t){t.target.composing||(e.epochs=e._n(t.target.value))},blur:function(t){return e.$forceUpdate()}}})]),a("div",{staticClass:"flex mb-2"},[a("label",{staticClass:"w-1/4 mr-4 text-lg font-medium text-gray-900",attrs:{for:"patience"}},[e._v("Patience")]),a("input",{directives:[{name:"model",rawName:"v-model.number",value:e.patience,expression:"patience",modifiers:{number:!0}}],staticClass:"border border-1 border-gray-500 rounded w-full px-3 py-1",attrs:{type:"number",id:"patience",name:"patience"},domProps:{value:e.patience},on:{input:function(t){t.target.composing||(e.patience=e._n(t.target.value))},blur:function(t){return e.$forceUpdate()}}})]),e._m(0),a("button",{staticClass:"text-lg bg-green-400 rounded shadow px-4 py-1 text-white hover:bg-green-500 mt-4",attrs:{type:"submit"}},[e._v(" Train ")])])],1)])},s=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"flex mb-2"},[a("label",{staticClass:"mr-20 text-lg font-medium text-gray-900",attrs:{for:"earlyStopping"}},[e._v("EarlyStopping")]),a("input",{staticClass:"border border-1 border-gray-500 rounded mt-2 mr-4 cursor-not-allowed",staticStyle:{transform:"scale(1.5)"},attrs:{type:"checkbox",id:"earlyStopping",name:"earlyStopping",checked:"checked",disabled:"true"}}),a("label",{staticClass:"text-lg",attrs:{for:"earlyStopping"}},[e._v(" true")])])}],n=(a("d3b7"),function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)}),i=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"lds-ring"},[a("div"),a("div"),a("div"),a("div")])}],o={name:"Loading"},l=o,d=(a("142f"),a("2877")),c=Object(d["a"])(l,n,i,!1,null,"0ec8eff9",null),u=c.exports,m={name:"Settings",components:{Loading:u},data:function(){return{history_window:15,future_window:30,shift:1,random_state:0,epochs:25,patience:5,model_message:""}},methods:{train:function(){var e=this;this.model_message="Momenteel wordt het model getraind, dit kan even duren...",this.$modal.show("train-model"),this.$http.post("/api/model/create",{history_window:parseInt(this.history_window),future_window:parseInt(this.future_window),shift:parseInt(this.shift),random_state:parseInt(this.random_state),epochs:parseInt(this.epochs),patience:parseInt(this.patience)}).then((function(){e.model_message="De modellen zijn getraind, de backend wordt herstart..."})).catch((function(){e.model_message="Er is een error tijdens het trainen van de nieuwe modellen, probeer dit opnieuw..."})).finally((function(){setTimeout((function(){e.$modal.hide("train-model")}),5e3)}))}}},p=m,f=(a("162b"),Object(d["a"])(p,r,s,!1,null,"54082047",null));t["default"]=f.exports},"29d4":function(e,t,a){"use strict";a("4e37")},"4e37":function(e,t,a){},5798:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("h1",{staticClass:"text-4xl text-gray-900 font-bold mb-6"},[e._v("Informatie")]),e._m(0),a("div",[a("h1",{staticClass:"text-3xl text-gray-800 font-bold mb-6"},[e._v("Gemaakt door")]),a("div",{staticClass:"grid grid-cols-4 gap-8"},[a("made-by-member",{attrs:{name:"Giuseppe Collura",email:"1826689collura@zuyd.nl",github:"peppe0203"}}),a("made-by-member",{attrs:{name:"Cédric Cortenraede",email:"1845675cortenraede@zuyd.nl",github:"CedricCortenraede"}}),a("made-by-member",{attrs:{name:"Joey Einerhand",email:"1823132einerhand@zuyd.nl",github:"Joey-Einerhand"}}),a("made-by-member",{attrs:{name:"Lennox Narinx",email:"1870920narinx@zuyd.nl",github:"1870920narinx"}})],1)])])},s=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"flex mb-10"},[r("div",{staticClass:"w-full max-w-prose mr-8"},[r("p",{staticClass:"max-w-prose text-gray-700 leading-relaxed"},[e._v(" Het lectoraat Data Intelligence van Zuyd hogeschool zag een kans bij het voorspellen van machineonderhoud. Dit product is het gevolg van deze interesse van Zuyd hogeschool. Voorafgaan aan de ontwikkel fase heeft er een onderzoek plaatsgevonden over welke methodieken mogelijk gebruikt konden worden voor het voorspellen van onderhoud. Uit dit onderzoek blijkt dat LSTM het beste aansloot aan de gekozen dataset. Parallel aan de ontwikkeling is het ontwerp gedocumenteerd, dit is in te zien door de verschillende stakeholders. "),r("br"),r("br"),e._v(" Binnen deze applicatie is het mogelijk om vroegtijdig te acteren voor onderhoud. De applicatie geeft weer wanneer verwacht wordt dat een onderdeel (bijna) defect is. Dit gebeurd op basis van een LSTM model. De gebruiker kan zelf een model inladen, exporteren of aanmaken binnen de applicatie. Tevens heeft de gebruiker de mogelijkheid om de betrouwbaarheid/nauwkeurigheid van het model in te zien op basis van de verschillende 'target' variabelen. Aan de rechter kant ziet u de gehele pipeline van de applicatie. De pipeline geeft weer hoe de applicatie is ingedeeld, van begin tot einde. Voor meer informatie wordt u verwezen naar de bijgeleverde readme, notebook of u kunt een van de ontwikkelaars contacteren. "),r("br"),r("br")])]),r("div",{staticClass:"w-full flex justify-center"},[r("img",{staticClass:"rounded shadow-xl h-96",attrs:{src:a("159a"),alt:"Visualisation about pipeline"}})])])}],n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"relative"},[a("h2",{staticClass:"text-xl text-gray-800 font-medium mb-1"},[e._v(e._s(e.name))]),a("div",{staticClass:"flex items-center"},[a("svg",{staticClass:"h-6 w-6 text-gray-500",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"}},[a("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"}})]),a("a",{staticClass:"block ml-2 text-green-600 hover:text-green-700",attrs:{href:"mailto:"+e.email}},[e._v(e._s(e.email))])]),a("div",{staticClass:"flex items-center"},[a("svg",{staticClass:"text-gray-500",attrs:{width:"24",height:"24",fill:"currentColor"}},[a("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M12 2C6.477 2 2 6.463 2 11.97c0 4.404 2.865 8.14 6.839 9.458.5.092.682-.216.682-.48 0-.236-.008-.864-.013-1.695-2.782.602-3.369-1.337-3.369-1.337-.454-1.151-1.11-1.458-1.11-1.458-.908-.618.069-.606.069-.606 1.003.07 1.531 1.027 1.531 1.027.892 1.524 2.341 1.084 2.91.828.092-.643.35-1.083.636-1.332-2.22-.251-4.555-1.107-4.555-4.927 0-1.088.39-1.979 1.029-2.675-.103-.252-.446-1.266.098-2.638 0 0 .84-.268 2.75 1.022A9.606 9.606 0 0112 6.82c.85.004 1.705.114 2.504.336 1.909-1.29 2.747-1.022 2.747-1.022.546 1.372.202 2.386.1 2.638.64.696 1.028 1.587 1.028 2.675 0 3.83-2.339 4.673-4.566 4.92.359.307.678.915.678 1.846 0 1.332-.012 2.407-.012 2.734 0 .267.18.577.688.48C19.137 20.107 22 16.373 22 11.969 22 6.463 17.522 2 12 2z"}})]),a("a",{staticClass:"block ml-2 text-green-600 hover:text-green-700",attrs:{href:"https://github.com/"+e.github,target:"_blank"}},[e._v(e._s(e.github))])])])},i=[],o={name:"MadeByMember",props:{name:String,email:String,github:String}},l=o,d=a("2877"),c=Object(d["a"])(l,n,i,!1,null,null,null),u=c.exports,m={name:"Information",components:{MadeByMember:u}},p=m,f=Object(d["a"])(p,r,s,!1,null,"1e6665ed",null);t["default"]=f.exports},"826e":function(e,t,a){},a6aa:function(e,t,a){},b0c0:function(e,t,a){var r=a("83ab"),s=a("5e77").EXISTS,n=a("e330"),i=a("9bf2").f,o=Function.prototype,l=n(o.toString),d=/function\b(?:\s|\/\*[\S\s]*?\*\/|\/\/[^\n\r]*[\n\r]+)*([^\s(/]*)/,c=n(d.exec),u="name";r&&!s&&i(o,u,{configurable:!0,get:function(){try{return c(d,l(this))[1]}catch(e){return""}}})},b679:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("h1",{staticClass:"text-4xl text-gray-900 font-bold mb-6"},[e._v("Model prestaties")]),a("div",{staticClass:"flex justify-start"},[a("div",{staticClass:"w-1/3 mr-16"},[a("div",{staticClass:"w-full bg-white border border-1 px-6 py-4 rounded-lg shadow-xl"},[a("div",{staticClass:"flex justify-between items-center"},[a("label",{staticClass:"text-base font-medium"},[e._v("Selecteer een model:")]),a("select",{directives:[{name:"model",rawName:"v-model",value:e.selected_model.name,expression:"selected_model.name"}],staticClass:"rounded-md border-gray-300 shadow-sm focus:border-green-200 focus:ring focus:ring-green-100 focus:ring-opacity-50",on:{change:[function(t){var a=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.$set(e.selected_model,"name",t.target.multiple?a:a[0])},function(t){return e.loadStats()}]}},[a("option",{attrs:{value:"cooler_condition"}},[e._v("Cooler condition")]),a("option",{attrs:{value:"valve_condition"}},[e._v("Valve condition")]),a("option",{attrs:{value:"internal_pump_leakage"}},[e._v(" Internal pump leakage ")]),a("option",{attrs:{value:"hydraulic_accumulator"}},[e._v(" Hydraulic accumulator ")])])]),a("div",{directives:[{name:"show",rawName:"v-show",value:e.selected_model.name,expression:"selected_model.name"}]},[a("div",{staticClass:"w-full bg-gray-100 rounded-full mt-2 mb-4",staticStyle:{height:"1px"}}),a("h2",{staticClass:"capitalize text-xl font-bold text-gray-900 mb-2",class:{"text-green-500":this.stats.accuracy>=80,"text-red-500":this.stats.accuracy<=50,"text-yellow-500":this.stats.accuracy>50&&this.stats.accuracy<80}},[e._v(" "+e._s(e.selected_model.name.replace(/_/g," "))+" ")]),a("div",[a("div",{staticClass:"mb-2"},[a("h3",{staticClass:"text-lg font-medium text-gray-800"},[e._v("Accuracy:")]),a("p",{staticClass:"font-base text-gray-700"},[e._v(e._s(e.stats.accuracy)+"%")])]),a("div",{staticClass:"mb-2"},[a("h3",{staticClass:"text-lg font-medium text-gray-800"},[e._v("Precision:")]),a("p",{staticClass:"font-base text-gray-700"},[e._v(" "+e._s(e.stats.precision.join("%, "))+"% ")])]),a("div",{staticClass:"mb-2"},[a("h3",{staticClass:"text-lg font-medium text-gray-800"},[e._v("Recall:")]),a("p",{staticClass:"font-base text-gray-700"},[e._v(" "+e._s(e.stats.recall.join("%, "))+"% ")])]),a("div",{staticClass:"mb-2"},[a("h3",{staticClass:"text-lg font-medium text-gray-800"},[e._v("F1-score:")]),a("p",{staticClass:"font-base text-gray-700"},[e._v(" "+e._s(e.stats.f1_score.join("%, "))+"% ")])])])])])]),a("div",{staticClass:"h-full"},[a("div",{directives:[{name:"show",rawName:"v-show",value:e.selected_model.name,expression:"selected_model.name"}],staticClass:"bg-white border border-1 rounded-lg shadow-xl overflow-hidden"},[a("img",{staticClass:"h-2/5",attrs:{src:this.selected_model.img,alt:this.selected_model.name.replace(/_/g," ")+" confusion matrix"}})])])])])},s=[],n=(a("b0c0"),{name:"Model",data:function(){return{selected_model:{name:"",img:""},stats:{accuracy:0,precision:[0],recall:[0],f1_score:[0]}}},methods:{loadStats:function(){var e=this;this.$http.get("/api/stats/"+this.selected_model.name).then((function(t){e.selected_model.img=t.request.responseURL+"/confusion",e.stats=t.data}))}}}),i=n,o=(a("29d4"),a("2877")),l=Object(o["a"])(i,r,s,!1,null,"1bb71026",null);t["default"]=l.exports}}]);
//# sourceMappingURL=about.c4a7b4e0.js.map