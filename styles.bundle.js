webpackJsonp(["styles"],{

/***/ "./node_modules/raw-loader/index.js!./node_modules/postcss-loader/lib/index.js??embedded!./node_modules/sass-loader/lib/loader.js??ref--8-3!./src/assets/sass/light-bootstrap-dashboard.scss":
/***/ (function(module, exports) {

module.exports = "/*!\n\n =========================================================\n * Light Bootstrap Dashboard Free Angular CLI - v1.4.0\n =========================================================\n\n * Product Page: https://www.creative-tim.com/product/light-bootstrap-dashboard-angular2\n * Copyright 2016 Creative Tim (http://www.creative-tim.com)\n * Licensed under MIT\n\n =========================================================\n\n * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.\n\n */\n/*      light colors         */\n@keyframes spin {\n  from {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg); }\n  to {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg); } }\n@-webkit-keyframes spin {\n  from {\n    -webkit-transform: rotate(0deg); }\n  to {\n    -webkit-transform: rotate(360deg); } }\n/*           Font Smoothing      */\nbody,\nh1, .h1,\nh2, .h2,\nh3, .h3,\nh4, .h4,\nh5, .h5,\nh6, .h6,\np,\n.navbar,\n.brand,\n.btn-simple,\n.alert,\na,\n.td-name,\ntd,\nbutton.close {\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  font-family: \"Roboto\",\"Helvetica Neue\",Arial,sans-serif;\n  font-weight: 400; }\nh1, .h1, h2, .h2, h3, .h3, h4, .h4 {\n  font-weight: 300;\n  margin: 30px 0 15px; }\nh1, .h1 {\n  font-size: 52px; }\nh2, .h2 {\n  font-size: 36px; }\nh3, .h3 {\n  font-size: 28px;\n  margin: 20px 0 10px; }\nh4, .h4 {\n  font-size: 22px;\n  line-height: 30px; }\nh5, .h5 {\n  font-size: 16px;\n  margin-bottom: 15px; }\nh6, .h6 {\n  font-size: 14px;\n  font-weight: 600;\n  text-transform: uppercase; }\np {\n  font-size: 16px;\n  line-height: 1.5; }\nh1 small, h2 small, h3 small, h4 small, h5 small, h6 small, .h1 small, .h2 small, .h3 small, .h4 small, .h5 small, .h6 small, h1 .small, h2 .small, h3 .small, h4 .small, h5 .small, h6 .small, .h1 .small, .h2 .small, .h3 .small, .h4 .small, .h5 .small, .h6 .small {\n  color: #9A9A9A;\n  font-weight: 300;\n  line-height: 1.5; }\nh1 small, h2 small, h3 small, h1 .small, h2 .small, h3 .small {\n  font-size: 60%; }\nh1 .subtitle {\n  display: block;\n  margin: 0 0 30px; }\n.text-muted {\n  color: #9A9A9A; }\n.text-primary, .text-primary:hover {\n  color: #1D62F0 !important; }\n.text-info, .text-info:hover {\n  color: #1DC7EA !important; }\n.text-success, .text-success:hover {\n  color: #87CB16 !important; }\n.text-warning, .text-warning:hover {\n  color: #FF9500 !important; }\n.text-danger, .text-danger:hover {\n  color: #FF4A55 !important; }\n/*     General overwrite     */\nbody,\n.wrapper {\n  min-height: 100vh;\n  position: relative; }\na {\n  color: #1DC7EA; }\na:hover, a:focus {\n    color: #42d0ed;\n    text-decoration: none; }\na:focus, a:active,\nbutton::-moz-focus-inner,\ninput::-moz-focus-inner,\ninput[type=\"reset\"]::-moz-focus-inner,\ninput[type=\"button\"]::-moz-focus-inner,\ninput[type=\"submit\"]::-moz-focus-inner,\nselect::-moz-focus-inner,\ninput[type=\"file\"] > input[type=\"button\"]::-moz-focus-inner {\n  outline: 0; }\n.ui-slider-handle:focus,\n.navbar-toggle,\ninput:focus {\n  outline: 0 !important; }\n/*           Animations              */\n.form-control,\n.input-group-addon,\n.tagsinput,\n.navbar,\n.navbar .alert {\n  -webkit-transition: all 300ms linear;\n  transition: all 300ms linear; }\n.table > tbody > tr .td-actions .btn {\n  -webkit-transition: all 150ms ease-in;\n  transition: all 150ms ease-in; }\n.btn {\n  -webkit-transition: all 100ms ease-in;\n  transition: all 100ms ease-in; }\n.fa {\n  width: 18px;\n  text-align: center; }\n.margin-top {\n  margin-top: 50px; }\n.wrapper {\n  position: relative;\n  top: 0;\n  height: 100vh; }\n.sidebar,\n.bootstrap-navbar {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  width: 260px;\n  display: block;\n  z-index: 5;\n  color: #fff;\n  font-weight: 200;\n  background-size: cover;\n  background-position: center center; }\n.sidebar .sidebar-wrapper,\n  .bootstrap-navbar .sidebar-wrapper {\n    position: relative;\n    max-height: calc(100vh - 75px);\n    min-height: 100%;\n    overflow: auto;\n    width: 260px;\n    z-index: 4;\n    padding-bottom: 75px; }\n.sidebar .sidebar-wrapper .dropdown .dropdown-backdrop,\n    .bootstrap-navbar .sidebar-wrapper .dropdown .dropdown-backdrop {\n      display: none !important; }\n.sidebar .sidebar-background,\n  .bootstrap-navbar .sidebar-background {\n    position: absolute;\n    z-index: 1;\n    height: 100%;\n    width: 100%;\n    display: block;\n    top: 0;\n    left: 0;\n    background-size: cover;\n    background-position: center center; }\n.sidebar .logo,\n  .bootstrap-navbar .logo {\n    padding: 10px 15px;\n    border-bottom: 1px solid rgba(255, 255, 255, 0.2); }\n.sidebar .logo p,\n    .bootstrap-navbar .logo p {\n      float: left;\n      font-size: 20px;\n      margin: 10px 10px;\n      color: #FFFFFF;\n      line-height: 20px;\n      font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif; }\n.sidebar .logo .simple-text,\n    .bootstrap-navbar .logo .simple-text {\n      text-transform: uppercase;\n      padding: 5px 0px;\n      display: block;\n      font-size: 18px;\n      color: #FFFFFF;\n      text-align: left;\n      font-weight: 400;\n      line-height: 30px; }\n.sidebar .logo-img,\n  .bootstrap-navbar .logo-img {\n    width: 30px;\n    display: inline-block;\n    max-height: 30px;\n    margin-right: 10px; }\n.sidebar .logo-img img,\n    .bootstrap-navbar .logo-img img {\n      width: 35px;\n      top: 11px;\n      position: absolute; }\n.sidebar .logo-tim,\n  .bootstrap-navbar .logo-tim {\n    border-radius: 50%;\n    border: 1px solid #333;\n    display: block;\n    height: 61px;\n    width: 61px;\n    float: left;\n    overflow: hidden; }\n.sidebar .logo-tim img,\n    .bootstrap-navbar .logo-tim img {\n      width: 60px;\n      height: 60px; }\n.sidebar .nav,\n  .bootstrap-navbar .nav {\n    margin-top: 20px;\n    float: none; }\n.sidebar .nav li > a,\n    .bootstrap-navbar .nav li > a {\n      color: #FFFFFF;\n      margin: 5px 15px;\n      opacity: .86;\n      border-radius: 4px;\n      display: block; }\n.sidebar .nav li:hover > a,\n    .bootstrap-navbar .nav li:hover > a {\n      background: rgba(255, 255, 255, 0.13);\n      opacity: 1; }\n.sidebar .nav li.active > a,\n    .bootstrap-navbar .nav li.active > a {\n      color: #FFFFFF;\n      opacity: 1;\n      background: rgba(255, 255, 255, 0.23); }\n.sidebar .nav li a.dropdown-toggle,\n    .bootstrap-navbar .nav li a.dropdown-toggle {\n      background-color: transparent;\n      outline: none; }\n.sidebar .nav li.separator,\n    .bootstrap-navbar .nav li.separator {\n      margin: 15px 0;\n      border-bottom: 1px solid rgba(255, 255, 255, 0.2); }\n.sidebar .nav li.separator + li,\n      .bootstrap-navbar .nav li.separator + li {\n        margin-top: 31px; }\n.sidebar .nav p,\n    .bootstrap-navbar .nav p {\n      margin: 0;\n      line-height: 30px;\n      font-size: 12px;\n      font-weight: 600;\n      text-transform: uppercase;\n      margin-left: 45px;\n      color: #FFFFFF; }\n.sidebar .nav i,\n    .bootstrap-navbar .nav i {\n      font-size: 28px;\n      float: left;\n      margin-right: 15px;\n      line-height: 30px;\n      width: 30px;\n      text-align: center;\n      color: #FFFFFF; }\n.sidebar .nav .caret,\n    .bootstrap-navbar .nav .caret {\n      margin-top: 13px;\n      position: absolute;\n      right: 30px; }\n.sidebar .logo,\n  .bootstrap-navbar .logo {\n    padding: 10px 15px;\n    border-bottom: 1px solid rgba(255, 255, 255, 0.2); }\n.sidebar .logo p,\n    .bootstrap-navbar .logo p {\n      float: left;\n      font-size: 20px;\n      margin: 10px 10px;\n      color: #FFFFFF;\n      line-height: 20px;\n      font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif; }\n.sidebar .logo .simple-text,\n    .bootstrap-navbar .logo .simple-text {\n      text-transform: uppercase;\n      padding: 5px 0px 5px 15px;\n      display: block;\n      font-size: 18px;\n      color: #FFFFFF;\n      text-align: left;\n      font-weight: 400;\n      line-height: 30px; }\n.sidebar .logo-tim,\n  .bootstrap-navbar .logo-tim {\n    border-radius: 50%;\n    border: 1px solid #333;\n    display: block;\n    height: 61px;\n    width: 61px;\n    float: left;\n    overflow: hidden; }\n.sidebar .logo-tim img,\n    .bootstrap-navbar .logo-tim img {\n      width: 60px;\n      height: 60px; }\n.sidebar:after, .sidebar:before,\n  .bootstrap-navbar:after,\n  .bootstrap-navbar:before {\n    display: block;\n    content: \"\";\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    top: 0;\n    left: 0;\n    z-index: 2; }\n.sidebar:before,\n  .bootstrap-navbar:before {\n    opacity: .33;\n    background: #000000; }\n.sidebar:after,\n  .bootstrap-navbar:after {\n    background: #787878;\n    background: -webkit-gradient(linear, left top, left bottom, from(#787878), to(#343434));\n    background: linear-gradient(to bottom, #787878 0%, #343434 100%);\n    background-size: 150% 150%;\n    z-index: 3;\n    opacity: 1; }\n.sidebar[data-image]:after, .sidebar.has-image:after,\n  .bootstrap-navbar[data-image]:after,\n  .bootstrap-navbar.has-image:after {\n    opacity: .77; }\n.sidebar[data-color=\"blue\"]:after,\n  .bootstrap-navbar[data-color=\"blue\"]:after {\n    background: #1F77D0;\n    background: -webkit-gradient(linear, left top, left bottom, from(#1F77D0), to(#533ce1));\n    background: linear-gradient(to bottom, #1F77D0 0%, #533ce1 100%);\n    background-size: 150% 150%; }\n.sidebar[data-color=\"azure\"]:after,\n  .bootstrap-navbar[data-color=\"azure\"]:after {\n    background: #1DC7EA;\n    background: -webkit-gradient(linear, left top, left bottom, from(#1DC7EA), to(#4091ff));\n    background: linear-gradient(to bottom, #1DC7EA 0%, #4091ff 100%);\n    background-size: 150% 150%; }\n.sidebar[data-color=\"green\"]:after,\n  .bootstrap-navbar[data-color=\"green\"]:after {\n    background: #87CB16;\n    background: -webkit-gradient(linear, left top, left bottom, from(#87CB16), to(#6dc030));\n    background: linear-gradient(to bottom, #87CB16 0%, #6dc030 100%);\n    background-size: 150% 150%; }\n.sidebar[data-color=\"orange\"]:after,\n  .bootstrap-navbar[data-color=\"orange\"]:after {\n    background: #FFA534;\n    background: -webkit-gradient(linear, left top, left bottom, from(#FFA534), to(#ff5221));\n    background: linear-gradient(to bottom, #FFA534 0%, #ff5221 100%);\n    background-size: 150% 150%; }\n.sidebar[data-color=\"red\"]:after,\n  .bootstrap-navbar[data-color=\"red\"]:after {\n    background: #FB404B;\n    background: -webkit-gradient(linear, left top, left bottom, from(#FB404B), to(#bb0502));\n    background: linear-gradient(to bottom, #FB404B 0%, #bb0502 100%);\n    background-size: 150% 150%; }\n.sidebar[data-color=\"purple\"]:after,\n  .bootstrap-navbar[data-color=\"purple\"]:after {\n    background: #9368E9;\n    background: -webkit-gradient(linear, left top, left bottom, from(#9368E9), to(#943bea));\n    background: linear-gradient(to bottom, #9368E9 0%, #943bea 100%);\n    background-size: 150% 150%; }\n.main-panel {\n  background: rgba(203, 203, 210, 0.15);\n  position: relative;\n  z-index: 2;\n  float: right;\n  width: calc(100% - 260px);\n  min-height: 100%;\n  overflow: auto; }\n.main-panel .main-content {\n    padding: 30px 15px;\n    min-height: calc(100% - 123px); }\n.main-panel > .footer {\n    border-top: 1px solid #e7e7e7; }\n.main-panel .navbar {\n    margin-bottom: 0; }\n.sidebar,\n.main-panel,\n.sidebar-wrapper,\n.navbar-cmp-fixed .navbar {\n  -webkit-transition-property: top,bottom,width;\n  -webkit-transition-property: top,bottom, width;\n  transition-property: top,bottom, width;\n  -webkit-transition-duration: .2s,.2s, .35s;\n  transition-duration: .2s,.2s, .35s;\n  -webkit-transition-timing-function: linear,linear,ease;\n  transition-timing-function: linear,linear,ease;\n  -webkit-overflow-scrolling: touch; }\n.main-panel {\n  max-height: 100%;\n  height: 100%; }\n.btn {\n  border-width: 2px;\n  background-color: transparent;\n  font-weight: 400;\n  opacity: 0.8;\n  filter: alpha(opacity=80);\n  padding: 8px 16px;\n  border-color: #888888;\n  color: #888888; }\n.btn:hover, .btn:focus, .btn:active, .btn.active,\n  .open > .btn.dropdown-toggle {\n    background-color: transparent;\n    color: #777777;\n    border-color: #777777; }\n.btn.disabled, .btn.disabled:hover, .btn.disabled:focus, .btn.disabled.focus, .btn.disabled:active, .btn.disabled.active, .btn:disabled, .btn:disabled:hover, .btn:disabled:focus, .btn:disabled.focus, .btn:disabled:active, .btn:disabled.active, .btn[disabled], .btn[disabled]:hover, .btn[disabled]:focus, .btn[disabled].focus, .btn[disabled]:active, .btn[disabled].active,\n  fieldset[disabled] .btn,\n  fieldset[disabled] .btn:hover,\n  fieldset[disabled] .btn:focus,\n  fieldset[disabled] .btn.focus,\n  fieldset[disabled] .btn:active,\n  fieldset[disabled] .btn.active {\n    background-color: transparent;\n    border-color: #888888; }\n.btn.btn-fill {\n    color: #FFFFFF;\n    background-color: #888888;\n    opacity: 1;\n    filter: alpha(opacity=100); }\n.btn.btn-fill:hover, .btn.btn-fill:focus, .btn.btn-fill:active, .btn.btn-fill.active,\n    .open > .btn.btn-fill.dropdown-toggle {\n      background-color: #777777;\n      color: #FFFFFF; }\n.btn.btn-fill .caret {\n      border-top-color: #FFFFFF; }\n.btn .caret {\n    border-top-color: #888888; }\n.btn:hover, .btn:focus {\n    opacity: 1;\n    filter: alpha(opacity=100);\n    outline: 0 !important; }\n.btn:active, .btn.active,\n  .open > .btn.dropdown-toggle {\n    -webkit-box-shadow: none;\n    box-shadow: none;\n    outline: 0 !important; }\n.btn.btn-icon {\n    padding: 8px; }\n.btn-primary {\n  border-color: #3472F7;\n  color: #3472F7; }\n.btn-primary:hover, .btn-primary:focus, .btn-primary:active, .btn-primary.active,\n  .open > .btn-primary.dropdown-toggle {\n    background-color: transparent;\n    color: #1D62F0;\n    border-color: #1D62F0; }\n.btn-primary.disabled, .btn-primary.disabled:hover, .btn-primary.disabled:focus, .btn-primary.disabled.focus, .btn-primary.disabled:active, .btn-primary.disabled.active, .btn-primary:disabled, .btn-primary:disabled:hover, .btn-primary:disabled:focus, .btn-primary:disabled.focus, .btn-primary:disabled:active, .btn-primary:disabled.active, .btn-primary[disabled], .btn-primary[disabled]:hover, .btn-primary[disabled]:focus, .btn-primary[disabled].focus, .btn-primary[disabled]:active, .btn-primary[disabled].active,\n  fieldset[disabled] .btn-primary,\n  fieldset[disabled] .btn-primary:hover,\n  fieldset[disabled] .btn-primary:focus,\n  fieldset[disabled] .btn-primary.focus,\n  fieldset[disabled] .btn-primary:active,\n  fieldset[disabled] .btn-primary.active {\n    background-color: transparent;\n    border-color: #3472F7; }\n.btn-primary.btn-fill {\n    color: #FFFFFF;\n    background-color: #3472F7;\n    opacity: 1;\n    filter: alpha(opacity=100); }\n.btn-primary.btn-fill:hover, .btn-primary.btn-fill:focus, .btn-primary.btn-fill:active, .btn-primary.btn-fill.active,\n    .open > .btn-primary.btn-fill.dropdown-toggle {\n      background-color: #1D62F0;\n      color: #FFFFFF; }\n.btn-primary.btn-fill .caret {\n      border-top-color: #FFFFFF; }\n.btn-primary .caret {\n    border-top-color: #3472F7; }\n.btn-success {\n  border-color: #87CB16;\n  color: #87CB16; }\n.btn-success:hover, .btn-success:focus, .btn-success:active, .btn-success.active,\n  .open > .btn-success.dropdown-toggle {\n    background-color: transparent;\n    color: #049F0C;\n    border-color: #049F0C; }\n.btn-success.disabled, .btn-success.disabled:hover, .btn-success.disabled:focus, .btn-success.disabled.focus, .btn-success.disabled:active, .btn-success.disabled.active, .btn-success:disabled, .btn-success:disabled:hover, .btn-success:disabled:focus, .btn-success:disabled.focus, .btn-success:disabled:active, .btn-success:disabled.active, .btn-success[disabled], .btn-success[disabled]:hover, .btn-success[disabled]:focus, .btn-success[disabled].focus, .btn-success[disabled]:active, .btn-success[disabled].active,\n  fieldset[disabled] .btn-success,\n  fieldset[disabled] .btn-success:hover,\n  fieldset[disabled] .btn-success:focus,\n  fieldset[disabled] .btn-success.focus,\n  fieldset[disabled] .btn-success:active,\n  fieldset[disabled] .btn-success.active {\n    background-color: transparent;\n    border-color: #87CB16; }\n.btn-success.btn-fill {\n    color: #FFFFFF;\n    background-color: #87CB16;\n    opacity: 1;\n    filter: alpha(opacity=100); }\n.btn-success.btn-fill:hover, .btn-success.btn-fill:focus, .btn-success.btn-fill:active, .btn-success.btn-fill.active,\n    .open > .btn-success.btn-fill.dropdown-toggle {\n      background-color: #049F0C;\n      color: #FFFFFF; }\n.btn-success.btn-fill .caret {\n      border-top-color: #FFFFFF; }\n.btn-success .caret {\n    border-top-color: #87CB16; }\n.btn-info {\n  border-color: #1DC7EA;\n  color: #1DC7EA; }\n.btn-info:hover, .btn-info:focus, .btn-info:active, .btn-info.active,\n  .open > .btn-info.dropdown-toggle {\n    background-color: transparent;\n    color: #42d0ed;\n    border-color: #42d0ed; }\n.btn-info.disabled, .btn-info.disabled:hover, .btn-info.disabled:focus, .btn-info.disabled.focus, .btn-info.disabled:active, .btn-info.disabled.active, .btn-info:disabled, .btn-info:disabled:hover, .btn-info:disabled:focus, .btn-info:disabled.focus, .btn-info:disabled:active, .btn-info:disabled.active, .btn-info[disabled], .btn-info[disabled]:hover, .btn-info[disabled]:focus, .btn-info[disabled].focus, .btn-info[disabled]:active, .btn-info[disabled].active,\n  fieldset[disabled] .btn-info,\n  fieldset[disabled] .btn-info:hover,\n  fieldset[disabled] .btn-info:focus,\n  fieldset[disabled] .btn-info.focus,\n  fieldset[disabled] .btn-info:active,\n  fieldset[disabled] .btn-info.active {\n    background-color: transparent;\n    border-color: #1DC7EA; }\n.btn-info.btn-fill {\n    color: #FFFFFF;\n    background-color: #1DC7EA;\n    opacity: 1;\n    filter: alpha(opacity=100); }\n.btn-info.btn-fill:hover, .btn-info.btn-fill:focus, .btn-info.btn-fill:active, .btn-info.btn-fill.active,\n    .open > .btn-info.btn-fill.dropdown-toggle {\n      background-color: #42d0ed;\n      color: #FFFFFF; }\n.btn-info.btn-fill .caret {\n      border-top-color: #FFFFFF; }\n.btn-info .caret {\n    border-top-color: #1DC7EA; }\n.btn-warning {\n  border-color: #FF9500;\n  color: #FF9500; }\n.btn-warning:hover, .btn-warning:focus, .btn-warning:active, .btn-warning.active,\n  .open > .btn-warning.dropdown-toggle {\n    background-color: transparent;\n    color: #ED8D00;\n    border-color: #ED8D00; }\n.btn-warning.disabled, .btn-warning.disabled:hover, .btn-warning.disabled:focus, .btn-warning.disabled.focus, .btn-warning.disabled:active, .btn-warning.disabled.active, .btn-warning:disabled, .btn-warning:disabled:hover, .btn-warning:disabled:focus, .btn-warning:disabled.focus, .btn-warning:disabled:active, .btn-warning:disabled.active, .btn-warning[disabled], .btn-warning[disabled]:hover, .btn-warning[disabled]:focus, .btn-warning[disabled].focus, .btn-warning[disabled]:active, .btn-warning[disabled].active,\n  fieldset[disabled] .btn-warning,\n  fieldset[disabled] .btn-warning:hover,\n  fieldset[disabled] .btn-warning:focus,\n  fieldset[disabled] .btn-warning.focus,\n  fieldset[disabled] .btn-warning:active,\n  fieldset[disabled] .btn-warning.active {\n    background-color: transparent;\n    border-color: #FF9500; }\n.btn-warning.btn-fill {\n    color: #FFFFFF;\n    background-color: #FF9500;\n    opacity: 1;\n    filter: alpha(opacity=100); }\n.btn-warning.btn-fill:hover, .btn-warning.btn-fill:focus, .btn-warning.btn-fill:active, .btn-warning.btn-fill.active,\n    .open > .btn-warning.btn-fill.dropdown-toggle {\n      background-color: #ED8D00;\n      color: #FFFFFF; }\n.btn-warning.btn-fill .caret {\n      border-top-color: #FFFFFF; }\n.btn-warning .caret {\n    border-top-color: #FF9500; }\n.btn-danger {\n  border-color: #FF4A55;\n  color: #FF4A55; }\n.btn-danger:hover, .btn-danger:focus, .btn-danger:active, .btn-danger.active,\n  .open > .btn-danger.dropdown-toggle {\n    background-color: transparent;\n    color: #EE2D20;\n    border-color: #EE2D20; }\n.btn-danger.disabled, .btn-danger.disabled:hover, .btn-danger.disabled:focus, .btn-danger.disabled.focus, .btn-danger.disabled:active, .btn-danger.disabled.active, .btn-danger:disabled, .btn-danger:disabled:hover, .btn-danger:disabled:focus, .btn-danger:disabled.focus, .btn-danger:disabled:active, .btn-danger:disabled.active, .btn-danger[disabled], .btn-danger[disabled]:hover, .btn-danger[disabled]:focus, .btn-danger[disabled].focus, .btn-danger[disabled]:active, .btn-danger[disabled].active,\n  fieldset[disabled] .btn-danger,\n  fieldset[disabled] .btn-danger:hover,\n  fieldset[disabled] .btn-danger:focus,\n  fieldset[disabled] .btn-danger.focus,\n  fieldset[disabled] .btn-danger:active,\n  fieldset[disabled] .btn-danger.active {\n    background-color: transparent;\n    border-color: #FF4A55; }\n.btn-danger.btn-fill {\n    color: #FFFFFF;\n    background-color: #FF4A55;\n    opacity: 1;\n    filter: alpha(opacity=100); }\n.btn-danger.btn-fill:hover, .btn-danger.btn-fill:focus, .btn-danger.btn-fill:active, .btn-danger.btn-fill.active,\n    .open > .btn-danger.btn-fill.dropdown-toggle {\n      background-color: #EE2D20;\n      color: #FFFFFF; }\n.btn-danger.btn-fill .caret {\n      border-top-color: #FFFFFF; }\n.btn-danger .caret {\n    border-top-color: #FF4A55; }\n.btn-neutral {\n  border-color: #FFFFFF;\n  color: #FFFFFF; }\n.btn-neutral:hover, .btn-neutral:focus, .btn-neutral:active, .btn-neutral.active,\n  .open > .btn-neutral.dropdown-toggle {\n    background-color: transparent;\n    color: #FFFFFF;\n    border-color: #FFFFFF; }\n.btn-neutral.disabled, .btn-neutral.disabled:hover, .btn-neutral.disabled:focus, .btn-neutral.disabled.focus, .btn-neutral.disabled:active, .btn-neutral.disabled.active, .btn-neutral:disabled, .btn-neutral:disabled:hover, .btn-neutral:disabled:focus, .btn-neutral:disabled.focus, .btn-neutral:disabled:active, .btn-neutral:disabled.active, .btn-neutral[disabled], .btn-neutral[disabled]:hover, .btn-neutral[disabled]:focus, .btn-neutral[disabled].focus, .btn-neutral[disabled]:active, .btn-neutral[disabled].active,\n  fieldset[disabled] .btn-neutral,\n  fieldset[disabled] .btn-neutral:hover,\n  fieldset[disabled] .btn-neutral:focus,\n  fieldset[disabled] .btn-neutral.focus,\n  fieldset[disabled] .btn-neutral:active,\n  fieldset[disabled] .btn-neutral.active {\n    background-color: transparent;\n    border-color: #FFFFFF; }\n.btn-neutral.btn-fill {\n    color: #FFFFFF;\n    background-color: #FFFFFF;\n    opacity: 1;\n    filter: alpha(opacity=100); }\n.btn-neutral.btn-fill:hover, .btn-neutral.btn-fill:focus, .btn-neutral.btn-fill:active, .btn-neutral.btn-fill.active,\n    .open > .btn-neutral.btn-fill.dropdown-toggle {\n      background-color: #FFFFFF;\n      color: #FFFFFF; }\n.btn-neutral.btn-fill .caret {\n      border-top-color: #FFFFFF; }\n.btn-neutral .caret {\n    border-top-color: #FFFFFF; }\n.btn-neutral:active, .btn-neutral.active,\n  .open > .btn-neutral.dropdown-toggle {\n    background-color: #FFFFFF;\n    color: #888888; }\n.btn-neutral.btn-fill, .btn-neutral.btn-fill:hover, .btn-neutral.btn-fill:focus {\n    color: #888888; }\n.btn-neutral.btn-simple:active, .btn-neutral.btn-simple.active {\n    background-color: transparent; }\n.btn:disabled, .btn[disabled], .btn.disabled {\n  opacity: 0.5;\n  filter: alpha(opacity=50); }\n.btn-round {\n  border-width: 1px;\n  border-radius: 30px !important;\n  padding: 9px 18px; }\n.btn-round.btn-icon {\n    padding: 9px; }\n.btn-simple {\n  border: 0;\n  font-size: 16px;\n  padding: 8px 16px; }\n.btn-simple.btn-icon {\n    padding: 8px; }\n.btn-lg {\n  font-size: 18px;\n  border-radius: 6px;\n  padding: 14px 30px;\n  font-weight: 400; }\n.btn-lg.btn-round {\n    padding: 15px 30px; }\n.btn-lg.btn-simple {\n    padding: 16px 30px; }\n.btn-sm {\n  font-size: 12px;\n  border-radius: 3px;\n  padding: 5px 10px; }\n.btn-sm.btn-round {\n    padding: 6px 10px; }\n.btn-sm.btn-simple {\n    padding: 7px 10px; }\n.btn-xs {\n  font-size: 12px;\n  border-radius: 3px;\n  padding: 1px 5px; }\n.btn-xs.btn-round {\n    padding: 2px 5px; }\n.btn-xs.btn-simple {\n    padding: 3px 5px; }\n.btn-wd {\n  min-width: 140px; }\n.btn-group.select {\n  width: 100%; }\n.btn-group.select .btn {\n  text-align: left; }\n.btn-group.select .caret {\n  position: absolute;\n  top: 50%;\n  margin-top: -1px;\n  right: 8px; }\n.form-control::-moz-placeholder {\n  color: #DDDDDD;\n  opacity: 1;\n  filter: alpha(opacity=100); }\n.form-control:-moz-placeholder {\n  color: #DDDDDD;\n  opacity: 1;\n  filter: alpha(opacity=100); }\n.form-control::-webkit-input-placeholder {\n  color: #DDDDDD;\n  opacity: 1;\n  filter: alpha(opacity=100); }\n.form-control:-ms-input-placeholder {\n  color: #DDDDDD;\n  opacity: 1;\n  filter: alpha(opacity=100); }\n.form-control {\n  background-color: #FFFFFF;\n  border: 1px solid #E3E3E3;\n  border-radius: 4px;\n  color: #565656;\n  padding: 8px 12px;\n  height: 40px;\n  -webkit-box-shadow: none;\n  box-shadow: none; }\n.form-control:focus {\n    background-color: #FFFFFF;\n    border: 1px solid #AAAAAA;\n    -webkit-box-shadow: none;\n    box-shadow: none;\n    outline: 0 !important;\n    color: #333333; }\n.has-success .form-control,\n  .has-error .form-control,\n  .has-success .form-control:focus,\n  .has-error .form-control:focus {\n    border-color: #E3E3E3;\n    -webkit-box-shadow: none;\n    box-shadow: none; }\n.has-success .form-control {\n    color: #87CB16; }\n.has-success .form-control:focus {\n    border-color: #87CB16; }\n.has-error .form-control {\n    color: #FF4A55; }\n.has-error .form-control:focus {\n    border-color: #FF4A55; }\n.form-control + .form-control-feedback {\n    border-radius: 6px;\n    font-size: 14px;\n    margin-top: -7px;\n    position: absolute;\n    right: 10px;\n    top: 50%;\n    vertical-align: middle; }\n.open .form-control {\n    border-radius: 4px 4px 0 0;\n    border-bottom-color: transparent; }\n.input-lg {\n  height: 55px;\n  padding: 14px 30px; }\n.has-error .form-control-feedback {\n  color: #FF4A55; }\n.has-success .form-control-feedback {\n  color: #87CB16; }\n.input-group-addon {\n  background-color: #FFFFFF;\n  border: 1px solid #E3E3E3;\n  border-radius: 4px; }\n.has-success .input-group-addon,\n  .has-error .input-group-addon {\n    background-color: #FFFFFF;\n    border: 1px solid #E3E3E3; }\n.has-error .form-control:focus + .input-group-addon {\n    border-color: #FF4A55;\n    color: #FF4A55; }\n.has-success .form-control:focus + .input-group-addon {\n    border-color: #87CB16;\n    color: #87CB16; }\n.form-control:focus + .input-group-addon,\n  .form-control:focus ~ .input-group-addon {\n    background-color: #FFFFFF;\n    border-color: #9A9A9A; }\n.input-group .form-control:first-child,\n.input-group-addon:first-child,\n.input-group-btn:first-child > .dropdown-toggle,\n.input-group-btn:last-child > .btn:not(:last-child):not(.dropdown-toggle) {\n  border-right: 0 none; }\n.input-group .form-control:last-child,\n.input-group-addon:last-child,\n.input-group-btn:last-child > .dropdown-toggle,\n.input-group-btn:first-child > .btn:not(:first-child) {\n  border-left: 0 none; }\n.form-control[disabled], .form-control[readonly], fieldset[disabled] .form-control {\n  background-color: #F5F5F5;\n  color: #888888;\n  cursor: not-allowed; }\n.input-group-btn .btn {\n  border-width: 1px;\n  padding: 9px 16px; }\n.input-group-btn .btn-default:not(.btn-fill) {\n  border-color: #DDDDDD; }\n.input-group-btn:last-child > .btn {\n  margin-left: 0; }\n.input-group-focus .input-group-addon {\n  border-color: #9A9A9A; }\n.alert {\n  border: 0;\n  border-radius: 0;\n  color: #FFFFFF;\n  padding: 10px 15px;\n  font-size: 14px; }\n.container .alert {\n    border-radius: 4px; }\n.navbar .alert {\n    border-radius: 0;\n    left: 0;\n    position: absolute;\n    right: 0;\n    top: 85px;\n    width: 100%;\n    z-index: 3; }\n.navbar:not(.navbar-transparent) .alert {\n    top: 70px; }\n.alert span[data-notify=\"icon\"] {\n    font-size: 30px;\n    display: block;\n    left: 15px;\n    position: absolute;\n    top: 50%;\n    margin-top: -15px; }\n.alert [data-notify=\"icon\"][class*=\"pe-\"] ~ [data-notify=\"message\"] {\n    padding-left: 50px; }\n.alert button.close {\n    position: absolute;\n    right: 10px;\n    top: 50% !important;\n    margin-top: -13px;\n    z-index: 1033;\n    background-color: #FFFFFF;\n    display: block;\n    border-radius: 50%;\n    opacity: .4;\n    line-height: 11px;\n    width: 25px;\n    height: 25px;\n    outline: 0 !important;\n    text-align: center;\n    padding: 3px;\n    font-weight: 300; }\n.alert button.close:hover {\n      opacity: .55; }\n.alert .close ~ span {\n    display: block;\n    max-width: 89%; }\n.alert[data-notify=\"container\"] {\n    padding: 10px 10px 10px 20px;\n    border-radius: 4px; }\n.alert.alert-with-icon {\n    padding-left: 65px; }\n.alert-info {\n  background-color: #63d8f1; }\n.alert-success {\n  background-color: #a1e82c; }\n.alert-warning {\n  background-color: #ffbc67; }\n.alert-danger {\n  background-color: #fc727a; }\n.table .radio,\n.table .checkbox {\n  position: relative;\n  height: 20px;\n  display: block;\n  width: 20px;\n  padding: 0px 0px;\n  margin: 0px 5px;\n  text-align: center; }\n.table .radio .icons,\n  .table .checkbox .icons {\n    left: 5px; }\n.table > thead > tr > th,\n.table > tbody > tr > th,\n.table > tfoot > tr > th,\n.table > thead > tr > td,\n.table > tbody > tr > td,\n.table > tfoot > tr > td {\n  padding: 12px 8px;\n  vertical-align: middle; }\n.table > thead > tr > th {\n  border-bottom-width: 1px;\n  font-size: 12px;\n  text-transform: uppercase;\n  color: #9A9A9A;\n  font-weight: 400;\n  padding-bottom: 5px; }\n.table .td-actions .btn {\n  opacity: 0.36;\n  filter: alpha(opacity=36); }\n.table .td-actions .btn.btn-xs {\n    padding-left: 3px;\n    padding-right: 3px; }\n.table .td-actions {\n  min-width: 90px; }\n.table > tbody > tr {\n  position: relative; }\n.table > tbody > tr:hover .td-actions .btn {\n    opacity: 1;\n    filter: alpha(opacity=100); }\n/*      Checkbox and radio         */\n.checkbox,\n.radio {\n  margin-bottom: 12px; }\n.checkbox label,\n.radio label {\n  display: inline-block;\n  position: relative;\n  cursor: pointer;\n  padding-left: 24px;\n  margin-bottom: 0; }\n.checkbox label::before,\n.checkbox label::after {\n  font-family: 'FontAwesome';\n  content: \"\\f096\";\n  display: inline-block;\n  position: absolute;\n  width: 20px;\n  height: 20px;\n  left: 0;\n  cursor: pointer;\n  line-height: 20px;\n  font-size: 20px;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  top: 0px;\n  color: #DDDDDD;\n  -webkit-transition: color 0.2s linear;\n  transition: color 0.2s linear;\n  padding: 1px; }\n.checkbox label::after {\n  content: \"\";\n  text-align: center;\n  opacity: 1;\n  left: -1px;\n  color: #DDDDDD; }\n.checkbox input[type=\"checkbox\"],\n.radio input[type=\"radio\"] {\n  opacity: 0;\n  margin-left: 0; }\n.checkbox input[type=\"checkbox\"]:checked + label::after,\n.checkbox input[type=\"checkbox\"]:not(:disabled):hover + label::after {\n  font-family: 'FontAwesome';\n  content: \"\\f046\"; }\n.checkbox input[type=\"checkbox\"]:checked + label::after {\n  color: #23CCEF; }\n.checkbox input[type=\"checkbox\"]:not(:disabled):hover + label::before,\n.checkbox input[type=\"checkbox\"]:checked + label::before {\n  opacity: 0; }\n.checkbox input[type=\"checkbox\"]:disabled + label,\n.radio input[type=\"radio\"]:disabled + label,\n.checkbox input[type=\"checkbox\"]:disabled:checked + label::after {\n  color: #DDDDDD; }\n.checkbox input[type=\"checkbox\"]:disabled + label::before,\n.checkbox input[type=\"checkbox\"]:disabled + label::after {\n  cursor: not-allowed; }\n.checkbox input[type=\"checkbox\"]:disabled + label,\n.radio input[type=\"radio\"]:disabled + label {\n  cursor: not-allowed; }\n.checkbox.checkbox-circle label::before {\n  border-radius: 50%; }\n.checkbox.checkbox-inline {\n  padding-left: 0; }\n.checkbox-primary input[type=\"checkbox\"]:checked + label::before {\n  background-color: #428bca;\n  border-color: #428bca; }\n.checkbox-primary input[type=\"checkbox\"]:checked + label::after {\n  color: #fff; }\n.checkbox-danger input[type=\"checkbox\"]:checked + label::before {\n  background-color: #d9534f;\n  border-color: #d9534f; }\n.checkbox-danger input[type=\"checkbox\"]:checked + label::after {\n  color: #fff; }\n.checkbox-info input[type=\"checkbox\"]:checked + label::before {\n  background-color: #5bc0de;\n  border-color: #5bc0de; }\n.checkbox-info input[type=\"checkbox\"]:checked + label::after {\n  color: #fff; }\n.checkbox-warning input[type=\"checkbox\"]:checked + label::before {\n  background-color: #f0ad4e;\n  border-color: #f0ad4e; }\n.checkbox-warning input[type=\"checkbox\"]:checked + label::after {\n  color: #fff; }\n.checkbox-success input[type=\"checkbox\"]:checked + label::before {\n  background-color: #5cb85c;\n  border-color: #5cb85c; }\n.checkbox-success input[type=\"checkbox\"]:checked + label::after {\n  color: #fff; }\n.radio label::before,\n.radio label::after {\n  font-family: 'FontAwesome';\n  content: \"\\f10c\";\n  font-size: 20px;\n  height: 20px;\n  width: 20px;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  display: inline-block;\n  position: absolute;\n  line-height: 20px;\n  left: 0;\n  top: 0;\n  color: #DDDDDD;\n  padding: 1px;\n  -webkit-transition: color 0.2s linear;\n  transition: color 0.2s linear; }\n.radio input[type=\"radio\"]:not(:disabled):hover + label::after,\n.radio input[type=\"radio\"]:checked + label::after {\n  font-family: 'FontAwesome';\n  content: \"\\f192\";\n  color: #DDDDDD; }\n.radio input[type=\"radio\"]:checked:not(:disabled):hover + label::after,\n.radio input[type=\"radio\"]:checked + label::after {\n  color: #23CCEF; }\n.radio input[type=\"radio\"]:disabled + label {\n  color: #ddd; }\n.radio input[type=\"radio\"]:disabled + label::before,\n.radio input[type=\"radio\"]:disabled + label::after {\n  color: #ddd; }\n.radio.radio-inline {\n  margin-top: 0; }\n/* ============================================================\n * bootstrapSwitch v1.3 by Larentis Mattia @spiritualGuru\n * http://www.larentis.eu/switch/\n * ============================================================\n * Licensed under the Apache License, Version 2.0\n * http://www.apache.org/licenses/LICENSE-2.0\n * ============================================================ */\n.has-switch {\n  border-radius: 30px;\n  cursor: pointer;\n  display: inline-block;\n  line-height: 1.72222;\n  overflow: hidden;\n  position: relative;\n  text-align: left;\n  width: 60px;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  -o-user-select: none;\n  user-select: none;\n  /*   this code is for fixing safari bug with hidden overflow for border-radius   */\n  -webkit-mask: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAAAdCAIAAAHFskzeAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIGNIUk0AAG2YAABzjgAA+swAAIT6AAB5gQAA/RMAADBtAAASKQ0eJk4AAAJ6SURBVHjaYvj///////8ZsIH///8z4JKDACYGvICANAAAAP//Yvj//7+joyOmeG1tLX57iQEXL17EYy8AAAD//2L4//8/HhX4Hc1AieuYKPEUE8QB////t7OzI1JPVVUVRAsAAAD//5zRsQlAIQyEYSuxNWUcILOIywsZxwtavAe2cgN8cPnzS3cvpbzI1lpEXEwMFpG9dxpjcAevtfhaZsbXBpB67/xsLlit9b5qzplzfmGqCuBTBwAA//+Cav7////z588ZaAwCAgLg1jH8////58+fDHQEiYmJlGZIskFfX9/AWMzMzDygPqZzHMfHx6Ok6idPntDaSn9/f7h1AAAAAP//xNXBCYQwEAXQkIPk6k0sINiFeEtOgh0kJ2sIFmFngpYgKSIS+R52IazsUTO/gUeY+ZkEAzjPc5qmuq4fxIQQXdet64rfJHgYhrdf7L2/w2VZ5hnwtm0JttbmXK4QAgB2HEfmLmmtAbB5nvP3GABrmoYG5pyTwFxKySjCx3EkgQm2Win17bExhqDHlD/XJ33fv63u+/7/OsUYnXNVVT2IFUXRtu2yLLfrdAEAAP//5JjBCYQwEEUnFhC8Gy9qAyoWLmoDiWetIJ6NJRjIeFBYdgmyp2WdvA4eA/P/DKAPa+0wDE3TwAMpy7LrOmutV+1TeJ7nNE2BBEKIuwkbY7IsA3IURbFt25uwc04pBaQZx9E5dwkvywLUYYxprS/hH5Tpf+A8zAER4zgOQZhzjogRBEYEAN4vKj0uTUTUWoe1tEKIJSnlK5ZO1nUlWTzyPDfG3FVLIQQN1SRJpmn69njo+76u6yd6VlXVtu2+7161AwAA//8DACrtnqL2lIBiAAAAAElFTkSuQmCC\") 0 0 no-repeat;\n  -webkit-mask-size: 60px 24px;\n  mask: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAAAdCAIAAAHFskzeAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIGNIUk0AAG2YAABzjgAA+swAAIT6AAB5gQAA/RMAADBtAAASKQ0eJk4AAAJ6SURBVHjaYvj///////8ZsIH///8z4JKDACYGvICANAAAAP//Yvj//7+joyOmeG1tLX57iQEXL17EYy8AAAD//2L4//8/HhX4Hc1AieuYKPEUE8QB////t7OzI1JPVVUVRAsAAAD//5zRsQlAIQyEYSuxNWUcILOIywsZxwtavAe2cgN8cPnzS3cvpbzI1lpEXEwMFpG9dxpjcAevtfhaZsbXBpB67/xsLlit9b5qzplzfmGqCuBTBwAA//+Cav7////z588ZaAwCAgLg1jH8////58+fDHQEiYmJlGZIskFfX9/AWMzMzDygPqZzHMfHx6Ok6idPntDaSn9/f7h1AAAAAP//xNXBCYQwEAXQkIPk6k0sINiFeEtOgh0kJ2sIFmFngpYgKSIS+R52IazsUTO/gUeY+ZkEAzjPc5qmuq4fxIQQXdet64rfJHgYhrdf7L2/w2VZ5hnwtm0JttbmXK4QAgB2HEfmLmmtAbB5nvP3GABrmoYG5pyTwFxKySjCx3EkgQm2Win17bExhqDHlD/XJ33fv63u+/7/OsUYnXNVVT2IFUXRtu2yLLfrdAEAAP//5JjBCYQwEEUnFhC8Gy9qAyoWLmoDiWetIJ6NJRjIeFBYdgmyp2WdvA4eA/P/DKAPa+0wDE3TwAMpy7LrOmutV+1TeJ7nNE2BBEKIuwkbY7IsA3IURbFt25uwc04pBaQZx9E5dwkvywLUYYxprS/hH5Tpf+A8zAER4zgOQZhzjogRBEYEAN4vKj0uTUTUWoe1tEKIJSnlK5ZO1nUlWTzyPDfG3FVLIQQN1SRJpmn69njo+76u6yd6VlXVtu2+7161AwAA//8DACrtnqL2lIBiAAAAAElFTkSuQmCC\") 0 0 no-repeat; }\n.has-switch.deactivate {\n  opacity: 0.5;\n  filter: alpha(opacity=50);\n  cursor: default !important; }\n.has-switch.deactivate label,\n.has-switch.deactivate span {\n  cursor: default !important; }\n.has-switch > div {\n  position: relative;\n  top: 0;\n  width: 100px; }\n.has-switch > div.switch-animate {\n  -webkit-transition: left 0.25s ease-out;\n  transition: left 0.25s ease-out; }\n.has-switch > div.switch-off {\n  left: -35px; }\n.has-switch > div.switch-on {\n  left: 0; }\n.has-switch > div label {\n  background-color: #FFFFFF;\n  background: white;\n  background: -webkit-gradient(linear, left top, left bottom, from(white), to(#f1f1f2));\n  background: linear-gradient(to bottom, white 0%, #f1f1f2 100%);\n  background-size: 150% 150%;\n  -webkit-box-shadow: 0 1px 1px #FFFFFF inset, 0 1px 1px rgba(0, 0, 0, 0.25);\n          box-shadow: 0 1px 1px #FFFFFF inset, 0 1px 1px rgba(0, 0, 0, 0.25);\n  cursor: pointer; }\n.has-switch input[type=checkbox] {\n  display: none; }\n.has-switch span {\n  /*     box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2) inset; */\n  cursor: pointer;\n  float: left;\n  font-size: 11px;\n  font-weight: 400;\n  height: 24px;\n  line-height: 15px;\n  margin: 0;\n  padding-bottom: 6px;\n  padding-top: 5px;\n  position: relative;\n  text-align: center;\n  text-indent: -10px;\n  width: 50%;\n  z-index: 1;\n  -webkit-transition: 0.25s ease-out;\n  transition: 0.25s ease-out; }\n.has-switch span.switch-left {\n  background-color: #1DC7EA;\n  border-left: 1px solid transparent;\n  border-radius: 30px 0 0 30px;\n  color: #FFFFFF; }\n.has-switch .switch-off span.switch-left {\n  background-color: #DDDDDD; }\n.has-switch span.switch-right {\n  border-radius: 0 30px 30px 0;\n  background-color: #1DC7EA;\n  color: #ffffff;\n  text-indent: 1px; }\n.has-switch .switch-off span.switch-right {\n  background-color: #DDDDDD; }\n.has-switch label {\n  border-radius: 12px;\n  float: left;\n  height: 22px;\n  margin: 1px -13px;\n  padding: 0;\n  position: relative;\n  -webkit-transition: all 0.25s ease-out 0s;\n  transition: all 0.25s ease-out 0s;\n  vertical-align: middle;\n  width: 22px;\n  z-index: 100;\n  -webkit-transition: 0.25s ease-out;\n  transition: 0.25s ease-out; }\n.has-switch .switch-on .fa-check:before {\n  margin-left: 10px; }\n.has-switch:hover .switch-on label {\n  margin: 1px -17px;\n  width: 26px; }\n.has-switch:hover .switch-off label {\n  margin: 1px -13px;\n  width: 26px; }\n.nav > li > a:hover,\n.nav > li > a:focus {\n  background-color: transparent; }\n.navbar {\n  border: 0;\n  font-size: 16px;\n  border-radius: 0; }\n.navbar .navbar-brand {\n    font-weight: 400;\n    margin: 5px 0px;\n    padding: 15px 15px;\n    font-size: 20px; }\n.navbar .navbar-nav > li > a {\n    padding: 10px 15px;\n    margin: 10px 3px;\n    position: relative; }\n.navbar .navbar-nav > li > a.btn {\n    margin: 15px 3px;\n    padding: 8px 16px; }\n.navbar .navbar-nav > li > a.btn-round {\n    margin: 16px 3px; }\n.navbar .navbar-nav > li > a [class^=\"fa\"] {\n    font-size: 19px;\n    position: relative;\n    line-height: 16px;\n    top: 1px; }\n.navbar .navbar-nav .notification {\n    position: absolute;\n    background-color: #FB404B;\n    text-align: center;\n    border-radius: 10px;\n    min-width: 18px;\n    padding: 0 5px;\n    height: 18px;\n    font-size: 12px;\n    color: #FFFFFF;\n    font-weight: bold;\n    line-height: 18px;\n    top: 0px;\n    left: 7px; }\n.navbar .btn {\n    margin: 15px 3px;\n    font-size: 14px; }\n.navbar .btn-simple {\n    font-size: 16px; }\n.navbar.fixed {\n    width: calc(100% - $sidebar-width);\n    right: 0;\n    left: auto;\n    border-radius: 0; }\n.navbar-nav > li > .dropdown-menu {\n  border-radius: 10px;\n  margin-top: -5px; }\n.navbar-transparent .navbar-brand, [class*=\"navbar-ct\"] .navbar-brand {\n  color: #FFFFFF;\n  opacity: 0.9;\n  filter: alpha(opacity=90); }\n.navbar-transparent .navbar-brand:focus, .navbar-transparent .navbar-brand:hover, [class*=\"navbar-ct\"] .navbar-brand:focus, [class*=\"navbar-ct\"] .navbar-brand:hover {\n    background-color: transparent;\n    opacity: 1;\n    filter: alpha(opacity=100); }\n.navbar-transparent .navbar-nav > li > a:not(.btn), [class*=\"navbar-ct\"] .navbar-nav > li > a:not(.btn) {\n  color: #FFFFFF;\n  border-color: #FFFFFF;\n  opacity: 0.8;\n  filter: alpha(opacity=80); }\n.navbar-transparent .navbar-nav > .active > a:not(.btn),\n.navbar-transparent .navbar-nav > .active > a:hover:not(.btn),\n.navbar-transparent .navbar-nav > .active > a:focus:not(.btn),\n.navbar-transparent .navbar-nav > li > a:hover:not(.btn),\n.navbar-transparent .navbar-nav > li > a:focus:not(.btn), [class*=\"navbar-ct\"] .navbar-nav > .active > a:not(.btn),\n[class*=\"navbar-ct\"] .navbar-nav > .active > a:hover:not(.btn),\n[class*=\"navbar-ct\"] .navbar-nav > .active > a:focus:not(.btn),\n[class*=\"navbar-ct\"] .navbar-nav > li > a:hover:not(.btn),\n[class*=\"navbar-ct\"] .navbar-nav > li > a:focus:not(.btn) {\n  background-color: transparent;\n  border-radius: 3px;\n  color: #FFFFFF;\n  opacity: 1;\n  filter: alpha(opacity=100); }\n.navbar-transparent .navbar-nav .nav > li > a.btn:hover, [class*=\"navbar-ct\"] .navbar-nav .nav > li > a.btn:hover {\n  background-color: transparent; }\n.navbar-transparent .navbar-nav > .dropdown > a .caret,\n.navbar-transparent .navbar-nav > .dropdown > a:hover .caret,\n.navbar-transparent .navbar-nav > .dropdown > a:focus .caret, [class*=\"navbar-ct\"] .navbar-nav > .dropdown > a .caret,\n[class*=\"navbar-ct\"] .navbar-nav > .dropdown > a:hover .caret,\n[class*=\"navbar-ct\"] .navbar-nav > .dropdown > a:focus .caret {\n  border-bottom-color: #FFFFFF;\n  border-top-color: #FFFFFF; }\n.navbar-transparent .navbar-nav > .open > a,\n.navbar-transparent .navbar-nav > .open > a:hover,\n.navbar-transparent .navbar-nav > .open > a:focus, [class*=\"navbar-ct\"] .navbar-nav > .open > a,\n[class*=\"navbar-ct\"] .navbar-nav > .open > a:hover,\n[class*=\"navbar-ct\"] .navbar-nav > .open > a:focus {\n  background-color: transparent;\n  color: #FFFFFF;\n  opacity: 1;\n  filter: alpha(opacity=100); }\n.navbar-transparent .btn-default, [class*=\"navbar-ct\"] .btn-default {\n  color: #FFFFFF;\n  border-color: #FFFFFF; }\n.navbar-transparent .btn-default.btn-fill, [class*=\"navbar-ct\"] .btn-default.btn-fill {\n  color: #9A9A9A;\n  background-color: #FFFFFF;\n  opacity: 0.9;\n  filter: alpha(opacity=90); }\n.navbar-transparent .btn-default.btn-fill:hover,\n.navbar-transparent .btn-default.btn-fill:focus,\n.navbar-transparent .btn-default.btn-fill:active,\n.navbar-transparent .btn-default.btn-fill.active,\n.navbar-transparent .open .dropdown-toggle.btn-fill.btn-default, [class*=\"navbar-ct\"] .btn-default.btn-fill:hover,\n[class*=\"navbar-ct\"] .btn-default.btn-fill:focus,\n[class*=\"navbar-ct\"] .btn-default.btn-fill:active,\n[class*=\"navbar-ct\"] .btn-default.btn-fill.active,\n[class*=\"navbar-ct\"] .open .dropdown-toggle.btn-fill.btn-default {\n  border-color: #FFFFFF;\n  opacity: 1;\n  filter: alpha(opacity=100); }\n.navbar-transparent .dropdown-menu .divider {\n  background-color: rgba(255, 255, 255, 0.2); }\n.nav-open .nav .caret {\n  border-bottom-color: #FFFFFF;\n  border-top-color: #FFFFFF; }\n.navbar-default {\n  background-color: rgba(255, 255, 255, 0.96);\n  border-bottom: 1px solid rgba(0, 0, 0, 0.1); }\n.navbar-default .navbar-nav > li > a:not(.btn) {\n    color: #9A9A9A; }\n.navbar-default .navbar-nav > .active > a,\n  .navbar-default .navbar-nav > .active > a:not(.btn):hover,\n  .navbar-default .navbar-nav > .active > a:not(.btn):focus,\n  .navbar-default .navbar-nav > li > a:not(.btn):hover,\n  .navbar-default .navbar-nav > li > a:not(.btn):focus {\n    background-color: transparent;\n    border-radius: 3px;\n    color: #1DC7EA;\n    opacity: 1;\n    filter: alpha(opacity=100); }\n.navbar-default .navbar-nav > .dropdown > a:hover .caret,\n  .navbar-default .navbar-nav > .dropdown > a:focus .caret {\n    border-bottom-color: #1DC7EA;\n    border-top-color: #1DC7EA; }\n.navbar-default .navbar-nav > .open > a,\n  .navbar-default .navbar-nav > .open > a:hover,\n  .navbar-default .navbar-nav > .open > a:focus {\n    background-color: transparent;\n    color: #1DC7EA; }\n.navbar-default .navbar-nav .navbar-toggle:hover, .navbar-default .navbar-nav .navbar-toggle:focus {\n    background-color: transparent; }\n.navbar-default:not(.navbar-transparent) .btn-default:hover {\n    color: #1DC7EA;\n    border-color: #1DC7EA; }\n.navbar-default:not(.navbar-transparent) .btn-neutral,\n  .navbar-default:not(.navbar-transparent) .btn-neutral:hover,\n  .navbar-default:not(.navbar-transparent) .btn-neutral:active {\n    color: #9A9A9A; }\n/*      Navbar with icons            */\n.navbar-icons.navbar .navbar-brand {\n  margin-top: 12px;\n  margin-bottom: 12px; }\n.navbar-icons .navbar-nav > li > a {\n  text-align: center;\n  padding: 6px 15px;\n  margin: 6px 3px; }\n.navbar-icons .navbar-nav [class^=\"pe\"] {\n  font-size: 30px;\n  position: relative; }\n.navbar-icons .navbar-nav p {\n  margin: 3px 0 0; }\n.navbar-form {\n  -webkit-box-shadow: none;\n  box-shadow: none; }\n.navbar-form .form-control {\n    border-radius: 0;\n    border: 0;\n    padding: 0;\n    background-color: transparent;\n    height: 22px;\n    font-size: 16px;\n    line-height: 1.5;\n    color: #E3E3E3; }\n.navbar-transparent .navbar-form .form-control,\n  [class*=\"navbar-ct\"] .navbar-form .form-control {\n    color: #FFFFFF;\n    border: 0;\n    border-bottom: 1px solid rgba(255, 255, 255, 0.6); }\n.navbar-ct-blue {\n  background-color: #4091e2; }\n.navbar-ct-azure {\n  background-color: #63d8f1; }\n.navbar-ct-green {\n  background-color: #a1e82c; }\n.navbar-ct-orange {\n  background-color: #ffbc67; }\n.navbar-ct-red {\n  background-color: #fc727a; }\n.navbar-transparent {\n  padding-top: 15px;\n  background-color: transparent;\n  border-bottom: 1px solid transparent; }\n.navbar-toggle {\n  margin-top: 19px;\n  margin-bottom: 19px;\n  border: 0; }\n.navbar-toggle .icon-bar {\n    background-color: #FFFFFF; }\n.navbar-toggle .navbar-collapse,\n  .navbar-toggle .navbar-form {\n    border-color: transparent; }\n.navbar-toggle.navbar-default .navbar-toggle:hover,\n  .navbar-toggle.navbar-default .navbar-toggle:focus {\n    background-color: transparent; }\n.footer {\n  background-color: #FFFFFF;\n  line-height: 20px; }\n.footer nav > ul {\n    list-style: none;\n    margin: 0;\n    padding: 0;\n    font-weight: normal; }\n.footer nav > ul a:not(.btn) {\n      color: #9A9A9A;\n      display: block;\n      margin-bottom: 3px; }\n.footer nav > ul a:not(.btn):hover, .footer nav > ul a:not(.btn):focus {\n        color: #777777; }\n.footer .social-area {\n    padding: 15px 0; }\n.footer .social-area h5 {\n      padding-bottom: 15px; }\n.footer .social-area > a:not(.btn) {\n    color: #9A9A9A;\n    display: inline-block;\n    vertical-align: top;\n    padding: 10px 5px;\n    font-size: 20px;\n    font-weight: normal;\n    line-height: 20px;\n    text-align: center; }\n.footer .social-area > a:not(.btn):hover, .footer .social-area > a:not(.btn):focus {\n      color: #777777; }\n.footer .copyright {\n    color: #777777;\n    padding: 10px 15px;\n    margin: 10px 3px;\n    line-height: 20px;\n    font-size: 14px; }\n.footer hr {\n    border-color: #DDDDDD; }\n.footer .title {\n    color: #777777; }\n.footer-default {\n  background-color: #F5F5F5; }\n.footer:not(.footer-big) nav > ul {\n  font-size: 14px; }\n.footer:not(.footer-big) nav > ul li {\n    margin-left: 20px;\n    float: left; }\n.footer:not(.footer-big) nav > ul a {\n    padding: 10px 0px;\n    margin: 10px 10px 10px 0px; }\n.dropdown-menu {\n  visibility: hidden;\n  margin: 0;\n  padding: 0;\n  border-radius: 10px;\n  display: block;\n  z-index: 9000;\n  position: absolute;\n  opacity: 0;\n  filter: alpha(opacity=0);\n  -webkit-box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.125);\n  box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.125); }\n.open .dropdown-menu {\n    opacity: 1;\n    filter: alpha(opacity=100);\n    visibility: visible; }\n.select .dropdown-menu {\n    border-radius: 0 0 10px 10px;\n    -webkit-box-shadow: none;\n    box-shadow: none;\n    -webkit-transform-origin: 50% -40px;\n    transform-origin: 50% -40px;\n    -webkit-transform: scale(1);\n    transform: scale(1);\n    -webkit-transition: all 150ms linear;\n    transition: all 150ms linear;\n    margin-top: -20px; }\n.select.open .dropdown-menu {\n    margin-top: -1px; }\n.dropdown-menu > li > a {\n    padding: 8px 16px;\n    color: #333333; }\n.dropdown-menu > li > a img {\n      margin-top: -3px; }\n.dropdown-menu > li > a:focus {\n    outline: 0 !important; }\n.btn-group.select .dropdown-menu {\n    min-width: 100%; }\n.dropdown-menu > li:first-child > a {\n    border-top-left-radius: 10px;\n    border-top-right-radius: 10px; }\n.dropdown-menu > li:last-child > a {\n    border-bottom-left-radius: 10px;\n    border-bottom-right-radius: 10px; }\n.select .dropdown-menu > li:first-child > a {\n    border-radius: 0;\n    border-bottom: 0 none; }\n.dropdown-menu > li > a:hover,\n  .dropdown-menu > li > a:focus {\n    background-color: #F5F5F5;\n    color: #333333;\n    opacity: 1;\n    text-decoration: none; }\n.dropdown-menu.dropdown-blue > li > a:hover,\n  .dropdown-menu.dropdown-blue > li > a:focus {\n    background-color: rgba(52, 114, 247, 0.2); }\n.dropdown-menu.dropdown-azure > li > a:hover,\n  .dropdown-menu.dropdown-azure > li > a:focus {\n    background-color: rgba(29, 199, 234, 0.2); }\n.dropdown-menu.ct-green > li > a:hover,\n  .dropdown-menu.ct-green > li > a:focus {\n    background-color: rgba(135, 203, 22, 0.2); }\n.dropdown-menu.dropdown-orange > li > a:hover,\n  .dropdown-menu.dropdown-orange > li > a:focus {\n    background-color: rgba(255, 149, 0, 0.2); }\n.dropdown-menu.dropdown-red > li > a:hover,\n  .dropdown-menu.dropdown-red > li > a:focus {\n    background-color: rgba(255, 74, 85, 0.2); }\n.dropdown-with-icons > li > a {\n  padding-left: 0px;\n  line-height: 28px; }\n.dropdown-with-icons i {\n  text-align: center;\n  line-height: 28px;\n  float: left; }\n.dropdown-with-icons i[class^=\"pe-\"] {\n    font-size: 24px;\n    width: 46px; }\n.dropdown-with-icons i[class^=\"fa\"] {\n    font-size: 14px;\n    width: 38px; }\n.btn-group.select {\n  overflow: hidden; }\n.btn-group.select.open {\n  overflow: visible; }\n.card {\n  border-radius: 4px;\n  -webkit-box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(63, 63, 68, 0.1);\n          box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(63, 63, 68, 0.1);\n  background-color: #FFFFFF;\n  margin-bottom: 30px; }\n.card .image {\n    width: 100%;\n    overflow: hidden;\n    height: 260px;\n    border-radius: 4px 4px 0 0;\n    position: relative;\n    -webkit-transform-style: preserve-3d;\n    transform-style: preserve-3d; }\n.card .image img {\n      width: 100%; }\n.card .filter {\n    position: absolute;\n    z-index: 2;\n    background-color: rgba(0, 0, 0, 0.68);\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    text-align: center;\n    opacity: 0;\n    filter: alpha(opacity=0); }\n.card .filter .btn {\n      position: relative;\n      top: 50%;\n      -webkit-transform: translateY(-50%);\n      transform: translateY(-50%); }\n.card:hover .filter {\n    opacity: 1;\n    filter: alpha(opacity=100); }\n.card .btn-hover {\n    opacity: 0;\n    filter: alpha(opacity=0); }\n.card:hover .btn-hover {\n    opacity: 1;\n    filter: alpha(opacity=100); }\n.card .content {\n    padding: 15px 15px 10px 15px; }\n.card .header {\n    padding: 15px 15px 0; }\n.card .category,\n  .card label {\n    font-size: 14px;\n    font-weight: 400;\n    color: #9A9A9A;\n    margin-bottom: 0px; }\n.card .category i,\n    .card label i {\n      font-size: 16px; }\n.card label {\n    font-size: 12px;\n    margin-bottom: 5px;\n    text-transform: uppercase; }\n.card .title {\n    margin: 0;\n    color: #333333;\n    font-weight: 300; }\n.card .avatar {\n    width: 30px;\n    height: 30px;\n    overflow: hidden;\n    border-radius: 50%;\n    margin-right: 5px; }\n.card .description {\n    font-size: 14px;\n    color: #333; }\n.card .footer {\n    padding: 0;\n    background-color: transparent;\n    line-height: 30px; }\n.card .footer .legend {\n      padding: 5px 0; }\n.card .footer hr {\n      margin-top: 5px;\n      margin-bottom: 5px; }\n.card .stats {\n    color: #a9a9a9; }\n.card .footer div {\n    display: inline-block; }\n.card .author {\n    font-size: 12px;\n    font-weight: 600;\n    text-transform: uppercase; }\n.card .author i {\n    font-size: 14px; }\n.card h6 {\n    font-size: 12px;\n    margin: 0; }\n.card.card-separator:after {\n    height: 100%;\n    right: -15px;\n    top: 0;\n    width: 1px;\n    background-color: #DDDDDD;\n    content: \"\";\n    position: absolute; }\n.card .ct-chart {\n    margin: 30px 0 30px;\n    height: 245px; }\n.card .table tbody td:first-child,\n  .card .table thead th:first-child {\n    padding-left: 15px; }\n.card .table tbody td:last-child,\n  .card .table thead th:last-child {\n    padding-right: 15px; }\n.card .alert {\n    border-radius: 4px;\n    position: relative; }\n.card .alert.alert-with-icon {\n      padding-left: 65px; }\n.card-user .image {\n  height: 110px; }\n.card-user .image-plain {\n  height: 0;\n  margin-top: 110px; }\n.card-user .author {\n  text-align: center;\n  text-transform: none;\n  margin-top: -70px; }\n.card-user .avatar {\n  width: 124px;\n  height: 124px;\n  border: 5px solid #FFFFFF;\n  position: relative;\n  margin-bottom: 15px; }\n.card-user .avatar.border-gray {\n    border-color: #EEEEEE; }\n.card-user .title {\n  line-height: 24px; }\n.card-user .content {\n  min-height: 240px; }\n.card-user .footer,\n.card-price .footer {\n  padding: 5px 15px 10px; }\n.card-user hr,\n.card-price hr {\n  margin: 5px 15px; }\n.card-plain {\n  background-color: transparent;\n  -webkit-box-shadow: none;\n          box-shadow: none;\n  border-radius: 0; }\n.card-plain .image {\n    border-radius: 4px; }\n.ct-label {\n  fill: rgba(0, 0, 0, 0.4);\n  color: rgba(0, 0, 0, 0.4);\n  font-size: 1.3rem;\n  line-height: 1; }\n.ct-chart-line .ct-label,\n.ct-chart-bar .ct-label {\n  display: block;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex; }\n.ct-label.ct-horizontal.ct-start {\n  -webkit-box-align: flex-end;\n  -ms-flex-align: flex-end;\n  align-items: flex-end;\n  -webkit-box-pack: flex-start;\n  -ms-flex-pack: flex-start;\n  justify-content: flex-start;\n  text-align: left;\n  text-anchor: start; }\n.ct-label.ct-horizontal.ct-end {\n  -webkit-box-align: flex-start;\n  -ms-flex-align: flex-start;\n  align-items: flex-start;\n  -webkit-box-pack: flex-start;\n  -ms-flex-pack: flex-start;\n  justify-content: flex-start;\n  text-align: left;\n  text-anchor: start; }\n.ct-label.ct-vertical.ct-start {\n  -webkit-box-align: flex-end;\n  -ms-flex-align: flex-end;\n  align-items: flex-end;\n  -webkit-box-pack: flex-end;\n  -ms-flex-pack: flex-end;\n  justify-content: flex-end;\n  text-align: right;\n  text-anchor: end; }\n.ct-label.ct-vertical.ct-end {\n  -webkit-box-align: flex-end;\n  -ms-flex-align: flex-end;\n  align-items: flex-end;\n  -webkit-box-pack: flex-start;\n  -ms-flex-pack: flex-start;\n  justify-content: flex-start;\n  text-align: left;\n  text-anchor: start; }\n.ct-chart-bar .ct-label.ct-horizontal.ct-start {\n  -webkit-box-align: flex-end;\n  -ms-flex-align: flex-end;\n  align-items: flex-end;\n  -webkit-box-pack: center;\n  -ms-flex-pack: center;\n  justify-content: center;\n  text-align: center;\n  text-anchor: start; }\n.ct-chart-bar .ct-label.ct-horizontal.ct-end {\n  -webkit-box-align: flex-start;\n  -ms-flex-align: flex-start;\n  align-items: flex-start;\n  -webkit-box-pack: center;\n  -ms-flex-pack: center;\n  justify-content: center;\n  text-align: center;\n  text-anchor: start; }\n.ct-chart-bar.ct-horizontal-bars .ct-label.ct-horizontal.ct-start {\n  -webkit-box-align: flex-end;\n  -ms-flex-align: flex-end;\n  align-items: flex-end;\n  -webkit-box-pack: flex-start;\n  -ms-flex-pack: flex-start;\n  justify-content: flex-start;\n  text-align: left;\n  text-anchor: start; }\n.ct-chart-bar.ct-horizontal-bars .ct-label.ct-horizontal.ct-end {\n  -webkit-box-align: flex-start;\n  -ms-flex-align: flex-start;\n  align-items: flex-start;\n  -webkit-box-pack: flex-start;\n  -ms-flex-pack: flex-start;\n  justify-content: flex-start;\n  text-align: left;\n  text-anchor: start; }\n.ct-chart-bar.ct-horizontal-bars .ct-label.ct-vertical.ct-start {\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  align-items: center;\n  -webkit-box-pack: flex-end;\n  -ms-flex-pack: flex-end;\n  justify-content: flex-end;\n  text-align: right;\n  text-anchor: end; }\n.ct-chart-bar.ct-horizontal-bars .ct-label.ct-vertical.ct-end {\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  align-items: center;\n  -webkit-box-pack: flex-start;\n  -ms-flex-pack: flex-start;\n  justify-content: flex-start;\n  text-align: left;\n  text-anchor: end; }\n.ct-grid {\n  stroke: rgba(0, 0, 0, 0.2);\n  stroke-width: 1px;\n  stroke-dasharray: 2px; }\n.ct-point {\n  stroke-width: 8px;\n  stroke-linecap: round; }\n.ct-line {\n  fill: none;\n  stroke-width: 3px; }\n.ct-area {\n  stroke: none;\n  fill-opacity: 0.8; }\n.ct-bar {\n  fill: none;\n  stroke-width: 10px; }\n.ct-slice-donut {\n  fill: none;\n  stroke-width: 60px; }\n.ct-series-a .ct-point, .ct-series-a .ct-line, .ct-series-a .ct-bar, .ct-series-a .ct-slice-donut {\n  stroke: #1DC7EA; }\n.ct-series-a .ct-slice-pie, .ct-series-a .ct-area {\n  fill: #1DC7EA; }\n.ct-series-b .ct-point, .ct-series-b .ct-line, .ct-series-b .ct-bar, .ct-series-b .ct-slice-donut {\n  stroke: #FB404B; }\n.ct-series-b .ct-slice-pie, .ct-series-b .ct-area {\n  fill: #FB404B; }\n.ct-series-c .ct-point, .ct-series-c .ct-line, .ct-series-c .ct-bar, .ct-series-c .ct-slice-donut {\n  stroke: #FFA534; }\n.ct-series-c .ct-slice-pie, .ct-series-c .ct-area {\n  fill: #FFA534; }\n.ct-series-d .ct-point, .ct-series-d .ct-line, .ct-series-d .ct-bar, .ct-series-d .ct-slice-donut {\n  stroke: #9368E9; }\n.ct-series-d .ct-slice-pie, .ct-series-d .ct-area {\n  fill: #9368E9; }\n.ct-series-e .ct-point, .ct-series-e .ct-line, .ct-series-e .ct-bar, .ct-series-e .ct-slice-donut {\n  stroke: #87CB16; }\n.ct-series-e .ct-slice-pie, .ct-series-e .ct-area {\n  fill: #87CB16; }\n.ct-series-f .ct-point, .ct-series-f .ct-line, .ct-series-f .ct-bar, .ct-series-f .ct-slice-donut {\n  stroke: #1F77D0; }\n.ct-series-f .ct-slice-pie, .ct-series-f .ct-area {\n  fill: #1F77D0; }\n.ct-series-g .ct-point, .ct-series-g .ct-line, .ct-series-g .ct-bar, .ct-series-g .ct-slice-donut {\n  stroke: #5e5e5e; }\n.ct-series-g .ct-slice-pie, .ct-series-g .ct-area {\n  fill: #5e5e5e; }\n.ct-series-h .ct-point, .ct-series-h .ct-line, .ct-series-h .ct-bar, .ct-series-h .ct-slice-donut {\n  stroke: #dd4b39; }\n.ct-series-h .ct-slice-pie, .ct-series-h .ct-area {\n  fill: #dd4b39; }\n.ct-series-i .ct-point, .ct-series-i .ct-line, .ct-series-i .ct-bar, .ct-series-i .ct-slice-donut {\n  stroke: #35465c; }\n.ct-series-i .ct-slice-pie, .ct-series-i .ct-area {\n  fill: #35465c; }\n.ct-series-j .ct-point, .ct-series-j .ct-line, .ct-series-j .ct-bar, .ct-series-j .ct-slice-donut {\n  stroke: #e52d27; }\n.ct-series-j .ct-slice-pie, .ct-series-j .ct-area {\n  fill: #e52d27; }\n.ct-series-k .ct-point, .ct-series-k .ct-line, .ct-series-k .ct-bar, .ct-series-k .ct-slice-donut {\n  stroke: #55acee; }\n.ct-series-k .ct-slice-pie, .ct-series-k .ct-area {\n  fill: #55acee; }\n.ct-series-l .ct-point, .ct-series-l .ct-line, .ct-series-l .ct-bar, .ct-series-l .ct-slice-donut {\n  stroke: #cc2127; }\n.ct-series-l .ct-slice-pie, .ct-series-l .ct-area {\n  fill: #cc2127; }\n.ct-series-m .ct-point, .ct-series-m .ct-line, .ct-series-m .ct-bar, .ct-series-m .ct-slice-donut {\n  stroke: #1769ff; }\n.ct-series-m .ct-slice-pie, .ct-series-m .ct-area {\n  fill: #1769ff; }\n.ct-series-n .ct-point, .ct-series-n .ct-line, .ct-series-n .ct-bar, .ct-series-n .ct-slice-donut {\n  stroke: #6188e2; }\n.ct-series-n .ct-slice-pie, .ct-series-n .ct-area {\n  fill: #6188e2; }\n.ct-series-o .ct-point, .ct-series-o .ct-line, .ct-series-o .ct-bar, .ct-series-o .ct-slice-donut {\n  stroke: #a748ca; }\n.ct-series-o .ct-slice-pie, .ct-series-o .ct-area {\n  fill: #a748ca; }\n.ct-square {\n  display: block;\n  position: relative;\n  width: 100%; }\n.ct-square:before {\n    display: block;\n    float: left;\n    content: \"\";\n    width: 0;\n    height: 0;\n    padding-bottom: 100%; }\n.ct-square:after {\n    content: \"\";\n    display: table;\n    clear: both; }\n.ct-square > svg {\n    display: block;\n    position: absolute;\n    top: 0;\n    left: 0; }\n.ct-minor-second {\n  display: block;\n  position: relative;\n  width: 100%; }\n.ct-minor-second:before {\n    display: block;\n    float: left;\n    content: \"\";\n    width: 0;\n    height: 0;\n    padding-bottom: 93.75%; }\n.ct-minor-second:after {\n    content: \"\";\n    display: table;\n    clear: both; }\n.ct-minor-second > svg {\n    display: block;\n    position: absolute;\n    top: 0;\n    left: 0; }\n.ct-major-second {\n  display: block;\n  position: relative;\n  width: 100%; }\n.ct-major-second:before {\n    display: block;\n    float: left;\n    content: \"\";\n    width: 0;\n    height: 0;\n    padding-bottom: 88.88888889%; }\n.ct-major-second:after {\n    content: \"\";\n    display: table;\n    clear: both; }\n.ct-major-second > svg {\n    display: block;\n    position: absolute;\n    top: 0;\n    left: 0; }\n.ct-minor-third {\n  display: block;\n  position: relative;\n  width: 100%; }\n.ct-minor-third:before {\n    display: block;\n    float: left;\n    content: \"\";\n    width: 0;\n    height: 0;\n    padding-bottom: 83.33333333%; }\n.ct-minor-third:after {\n    content: \"\";\n    display: table;\n    clear: both; }\n.ct-minor-third > svg {\n    display: block;\n    position: absolute;\n    top: 0;\n    left: 0; }\n.ct-major-third {\n  display: block;\n  position: relative;\n  width: 100%; }\n.ct-major-third:before {\n    display: block;\n    float: left;\n    content: \"\";\n    width: 0;\n    height: 0;\n    padding-bottom: 80%; }\n.ct-major-third:after {\n    content: \"\";\n    display: table;\n    clear: both; }\n.ct-major-third > svg {\n    display: block;\n    position: absolute;\n    top: 0;\n    left: 0; }\n.ct-perfect-fourth {\n  display: block;\n  position: relative;\n  width: 100%; }\n.ct-perfect-fourth:before {\n    display: block;\n    float: left;\n    content: \"\";\n    width: 0;\n    height: 0;\n    padding-bottom: 75%; }\n.ct-perfect-fourth:after {\n    content: \"\";\n    display: table;\n    clear: both; }\n.ct-perfect-fourth > svg {\n    display: block;\n    position: absolute;\n    top: 0;\n    left: 0; }\n.ct-perfect-fifth {\n  display: block;\n  position: relative;\n  width: 100%; }\n.ct-perfect-fifth:before {\n    display: block;\n    float: left;\n    content: \"\";\n    width: 0;\n    height: 0;\n    padding-bottom: 66.66666667%; }\n.ct-perfect-fifth:after {\n    content: \"\";\n    display: table;\n    clear: both; }\n.ct-perfect-fifth > svg {\n    display: block;\n    position: absolute;\n    top: 0;\n    left: 0; }\n.ct-minor-sixth {\n  display: block;\n  position: relative;\n  width: 100%; }\n.ct-minor-sixth:before {\n    display: block;\n    float: left;\n    content: \"\";\n    width: 0;\n    height: 0;\n    padding-bottom: 62.5%; }\n.ct-minor-sixth:after {\n    content: \"\";\n    display: table;\n    clear: both; }\n.ct-minor-sixth > svg {\n    display: block;\n    position: absolute;\n    top: 0;\n    left: 0; }\n.ct-golden-section {\n  display: block;\n  position: relative;\n  width: 100%; }\n.ct-golden-section:before {\n    display: block;\n    float: left;\n    content: \"\";\n    width: 0;\n    height: 0;\n    padding-bottom: 61.80469716%; }\n.ct-golden-section:after {\n    content: \"\";\n    display: table;\n    clear: both; }\n.ct-golden-section > svg {\n    display: block;\n    position: absolute;\n    top: 0;\n    left: 0; }\n.ct-major-sixth {\n  display: block;\n  position: relative;\n  width: 100%; }\n.ct-major-sixth:before {\n    display: block;\n    float: left;\n    content: \"\";\n    width: 0;\n    height: 0;\n    padding-bottom: 60%; }\n.ct-major-sixth:after {\n    content: \"\";\n    display: table;\n    clear: both; }\n.ct-major-sixth > svg {\n    display: block;\n    position: absolute;\n    top: 0;\n    left: 0; }\n.ct-minor-seventh {\n  display: block;\n  position: relative;\n  width: 100%; }\n.ct-minor-seventh:before {\n    display: block;\n    float: left;\n    content: \"\";\n    width: 0;\n    height: 0;\n    padding-bottom: 56.25%; }\n.ct-minor-seventh:after {\n    content: \"\";\n    display: table;\n    clear: both; }\n.ct-minor-seventh > svg {\n    display: block;\n    position: absolute;\n    top: 0;\n    left: 0; }\n.ct-major-seventh {\n  display: block;\n  position: relative;\n  width: 100%; }\n.ct-major-seventh:before {\n    display: block;\n    float: left;\n    content: \"\";\n    width: 0;\n    height: 0;\n    padding-bottom: 53.33333333%; }\n.ct-major-seventh:after {\n    content: \"\";\n    display: table;\n    clear: both; }\n.ct-major-seventh > svg {\n    display: block;\n    position: absolute;\n    top: 0;\n    left: 0; }\n.ct-octave {\n  display: block;\n  position: relative;\n  width: 100%; }\n.ct-octave:before {\n    display: block;\n    float: left;\n    content: \"\";\n    width: 0;\n    height: 0;\n    padding-bottom: 50%; }\n.ct-octave:after {\n    content: \"\";\n    display: table;\n    clear: both; }\n.ct-octave > svg {\n    display: block;\n    position: absolute;\n    top: 0;\n    left: 0; }\n.ct-major-tenth {\n  display: block;\n  position: relative;\n  width: 100%; }\n.ct-major-tenth:before {\n    display: block;\n    float: left;\n    content: \"\";\n    width: 0;\n    height: 0;\n    padding-bottom: 40%; }\n.ct-major-tenth:after {\n    content: \"\";\n    display: table;\n    clear: both; }\n.ct-major-tenth > svg {\n    display: block;\n    position: absolute;\n    top: 0;\n    left: 0; }\n.ct-major-eleventh {\n  display: block;\n  position: relative;\n  width: 100%; }\n.ct-major-eleventh:before {\n    display: block;\n    float: left;\n    content: \"\";\n    width: 0;\n    height: 0;\n    padding-bottom: 37.5%; }\n.ct-major-eleventh:after {\n    content: \"\";\n    display: table;\n    clear: both; }\n.ct-major-eleventh > svg {\n    display: block;\n    position: absolute;\n    top: 0;\n    left: 0; }\n.ct-major-twelfth {\n  display: block;\n  position: relative;\n  width: 100%; }\n.ct-major-twelfth:before {\n    display: block;\n    float: left;\n    content: \"\";\n    width: 0;\n    height: 0;\n    padding-bottom: 33.33333333%; }\n.ct-major-twelfth:after {\n    content: \"\";\n    display: table;\n    clear: both; }\n.ct-major-twelfth > svg {\n    display: block;\n    position: absolute;\n    top: 0;\n    left: 0; }\n.ct-double-octave {\n  display: block;\n  position: relative;\n  width: 100%; }\n.ct-double-octave:before {\n    display: block;\n    float: left;\n    content: \"\";\n    width: 0;\n    height: 0;\n    padding-bottom: 25%; }\n.ct-double-octave:after {\n    content: \"\";\n    display: table;\n    clear: both; }\n.ct-double-octave > svg {\n    display: block;\n    position: absolute;\n    top: 0;\n    left: 0; }\n@media (min-width: 992px) {\n  .navbar-form {\n    margin-top: 21px;\n    margin-bottom: 21px;\n    padding-left: 5px;\n    padding-right: 5px; }\n  .sidebar .nav-mobile-menu {\n    display: none; }\n  .footer:not(.footer-big) nav > ul li:first-child {\n    margin-left: 0; }\n  body > .navbar-collapse.collapse {\n    display: none !important; }\n  .card form [class*=\"col-\"] {\n    padding: 6px; }\n  .card form [class*=\"col-\"]:first-child {\n    padding-left: 15px; }\n  .card form [class*=\"col-\"]:last-child {\n    padding-right: 15px; }\n  .navbar-cmp-fixed .navbar {\n    width: calc(100% - 260px); } }\n/*          Changes for small display      */\n@media (max-width: 991px) {\n  .main-panel {\n    width: 100%; }\n  .navbar-transparent {\n    padding-top: 15px;\n    background-color: rgba(0, 0, 0, 0.45); }\n  body {\n    position: relative;\n    overflow-x: hidden; }\n  .main-panel {\n    -webkit-transform: translate3d(0px, 0, 0);\n    transform: translate3d(0px, 0, 0);\n    -webkit-transition: all 0.33s cubic-bezier(0.685, 0.0473, 0.346, 1);\n    transition: all 0.33s cubic-bezier(0.685, 0.0473, 0.346, 1);\n    left: 0; }\n  .navbar .container {\n    left: 0;\n    width: 100%;\n    -webkit-transition: all 0.33s cubic-bezier(0.685, 0.0473, 0.346, 1);\n    transition: all 0.33s cubic-bezier(0.685, 0.0473, 0.346, 1);\n    position: relative; }\n  .navbar .navbar-collapse.collapse,\n  .navbar .navbar-collapse.collapse.in,\n  .navbar .navbar-collapse.collapsing {\n    display: none !important; }\n  .responsive-nav > li {\n    float: none;\n    position: relative;\n    display: block; }\n  .sidebar,\n  .bootstrap-navbar {\n    position: fixed;\n    display: block;\n    top: 0;\n    height: 100%;\n    right: 0;\n    left: auto;\n    z-index: 1032;\n    visibility: visible;\n    background-color: #999;\n    overflow-y: visible;\n    border-top: none;\n    text-align: left;\n    padding: 0;\n    -webkit-transform: translate3d(260px, 0, 0);\n    transform: translate3d(260px, 0, 0);\n    -webkit-transition: all 0.33s cubic-bezier(0.685, 0.0473, 0.346, 1);\n    transition: all 0.33s cubic-bezier(0.685, 0.0473, 0.346, 1); }\n    .sidebar > ul,\n    .bootstrap-navbar > ul {\n      position: relative;\n      z-index: 4;\n      overflow-y: scroll;\n      height: calc(100vh - 61px);\n      width: 100%; }\n    .sidebar::before,\n    .bootstrap-navbar::before {\n      top: 0;\n      left: 0;\n      height: 100%;\n      width: 100%;\n      position: absolute;\n      background-color: #282828;\n      display: block;\n      content: \"\";\n      z-index: 1; }\n    .sidebar .logo,\n    .bootstrap-navbar .logo {\n      position: relative;\n      z-index: 4; }\n    .sidebar .nav.nav-mobile-menu li > a,\n    .bootstrap-navbar .nav.nav-mobile-menu li > a {\n      padding: 10px 15px; }\n    .sidebar .nav.nav-mobile-menu .fa,\n    .bootstrap-navbar .nav.nav-mobile-menu .fa {\n      font-size: 18px; }\n    .sidebar .nav i,\n    .bootstrap-navbar .nav i {\n      font-size: 22px; }\n    .sidebar .nav-mobile-menu .open .dropdown-menu,\n    .bootstrap-navbar .nav-mobile-menu .open .dropdown-menu {\n      position: static;\n      float: none;\n      width: auto;\n      margin-top: 0;\n      background-color: transparent;\n      border: 0;\n      -webkit-box-shadow: none;\n      box-shadow: none; }\n      .sidebar .nav-mobile-menu .open .dropdown-menu li > a,\n      .bootstrap-navbar .nav-mobile-menu .open .dropdown-menu li > a {\n        padding-left: 60px; }\n    .sidebar .sidebar-wrapper .nav-mobile-menu ~ .nav,\n    .bootstrap-navbar .sidebar-wrapper .nav-mobile-menu ~ .nav {\n      margin-top: 0; }\n  .nav-open .navbar-collapse {\n    -webkit-transform: translate3d(0px, 0, 0);\n    transform: translate3d(0px, 0, 0); }\n  .nav-open .navbar .container {\n    left: -250px; }\n  .nav-open .main-panel {\n    left: 0;\n    -webkit-transform: translate3d(-260px, 0, 0);\n    transform: translate3d(-260px, 0, 0); }\n  .nav-open .sidebar {\n    -webkit-transform: translate3d(0px, 0, 0);\n    transform: translate3d(0px, 0, 0); }\n  .nav-open .navbar-cmp-fixed .navbar > div {\n    -webkit-transform: translate3d(-260px, 0, 0);\n    transform: translate3d(-260px, 0, 0); }\n  .navbar-toggle .icon-bar {\n    display: block;\n    position: relative;\n    background: #fff;\n    width: 24px;\n    height: 2px;\n    border-radius: 1px;\n    margin: 0 auto; }\n  .navbar-header .navbar-toggle {\n    margin: 10px 15px 10px 0;\n    width: 40px;\n    height: 40px; }\n  .icon-bar:nth-child(2),\n  .icon-bar:nth-child(3),\n  .icon-bar:nth-child(4) {\n    outline: 1px solid transparent; }\n  .icon-bar:nth-child(2) {\n    top: 0px;\n    -webkit-animation: topbar-back 500ms linear 0s;\n    animation: topbar-back 500ms 0s;\n    -webkit-animation-fill-mode: forwards;\n    animation-fill-mode: forwards; }\n  .icon-bar:nth-child(3) {\n    opacity: 1; }\n  .icon-bar:nth-child(4) {\n    bottom: 0px;\n    -webkit-animation: bottombar-back 500ms linear 0s;\n    animation: bottombar-back 500ms 0s;\n    -webkit-animation-fill-mode: forwards;\n    animation-fill-mode: forwards; }\n  .toggled .icon-bar:nth-child(2) {\n    top: 6px;\n    -webkit-animation: topbar-x 500ms linear 0s;\n    animation: topbar-x 500ms 0s;\n    -webkit-animation-fill-mode: forwards;\n    animation-fill-mode: forwards; }\n  .toggled .icon-bar:nth-child(3) {\n    opacity: 0; }\n  .toggled .icon-bar:nth-child(4) {\n    bottom: 6px;\n    -webkit-animation: bottombar-x 500ms linear 0s;\n    animation: bottombar-x 500ms 0s;\n    -webkit-animation-fill-mode: forwards;\n    animation-fill-mode: forwards; }\n  @keyframes topbar-x {\n    0% {\n      top: 0px;\n      -webkit-transform: rotate(0deg);\n              transform: rotate(0deg); }\n    45% {\n      top: 6px;\n      -webkit-transform: rotate(145deg);\n              transform: rotate(145deg); }\n    75% {\n      -webkit-transform: rotate(130deg);\n              transform: rotate(130deg); }\n    100% {\n      -webkit-transform: rotate(135deg);\n              transform: rotate(135deg); } }\n  @-webkit-keyframes topbar-x {\n    0% {\n      top: 0px;\n      -webkit-transform: rotate(0deg); }\n    45% {\n      top: 6px;\n      -webkit-transform: rotate(145deg); }\n    75% {\n      -webkit-transform: rotate(130deg); }\n    100% {\n      -webkit-transform: rotate(135deg); } }\n  @keyframes topbar-back {\n    0% {\n      top: 6px;\n      -webkit-transform: rotate(135deg);\n              transform: rotate(135deg); }\n    45% {\n      -webkit-transform: rotate(-10deg);\n              transform: rotate(-10deg); }\n    75% {\n      -webkit-transform: rotate(5deg);\n              transform: rotate(5deg); }\n    100% {\n      top: 0px;\n      -webkit-transform: rotate(0);\n              transform: rotate(0); } }\n  @-webkit-keyframes topbar-back {\n    0% {\n      top: 6px;\n      -webkit-transform: rotate(135deg); }\n    45% {\n      -webkit-transform: rotate(-10deg); }\n    75% {\n      -webkit-transform: rotate(5deg); }\n    100% {\n      top: 0px;\n      -webkit-transform: rotate(0); } }\n  @keyframes bottombar-x {\n    0% {\n      bottom: 0px;\n      -webkit-transform: rotate(0deg);\n              transform: rotate(0deg); }\n    45% {\n      bottom: 6px;\n      -webkit-transform: rotate(-145deg);\n              transform: rotate(-145deg); }\n    75% {\n      -webkit-transform: rotate(-130deg);\n              transform: rotate(-130deg); }\n    100% {\n      -webkit-transform: rotate(-135deg);\n              transform: rotate(-135deg); } }\n  @-webkit-keyframes bottombar-x {\n    0% {\n      bottom: 0px;\n      -webkit-transform: rotate(0deg); }\n    45% {\n      bottom: 6px;\n      -webkit-transform: rotate(-145deg); }\n    75% {\n      -webkit-transform: rotate(-130deg); }\n    100% {\n      -webkit-transform: rotate(-135deg); } }\n  @keyframes bottombar-back {\n    0% {\n      bottom: 6px;\n      -webkit-transform: rotate(-135deg);\n              transform: rotate(-135deg); }\n    45% {\n      -webkit-transform: rotate(10deg);\n              transform: rotate(10deg); }\n    75% {\n      -webkit-transform: rotate(-5deg);\n              transform: rotate(-5deg); }\n    100% {\n      bottom: 0px;\n      -webkit-transform: rotate(0);\n              transform: rotate(0); } }\n  @-webkit-keyframes bottombar-back {\n    0% {\n      bottom: 6px;\n      -webkit-transform: rotate(-135deg); }\n    45% {\n      -webkit-transform: rotate(10deg); }\n    75% {\n      -webkit-transform: rotate(-5deg); }\n    100% {\n      bottom: 0px;\n      -webkit-transform: rotate(0); } }\n  @-webkit-keyframes fadeIn {\n    0% {\n      opacity: 0; }\n    100% {\n      opacity: 1; } }\n  @keyframes fadeIn {\n    0% {\n      opacity: 0; }\n    100% {\n      opacity: 1; } }\n  .dropdown-menu .divider {\n    background-color: rgba(229, 229, 229, 0.15); }\n  .responsive-nav {\n    margin: 1px 0; }\n    .responsive-nav .open .dropdown-menu > li > a {\n      padding: 10px 15px 10px 60px; }\n  .responsive-nav > li > a,\n  .responsive-nav > li > a:hover,\n  .responsive-nav > li > a:focus,\n  .responsive-nav .active > a,\n  .responsive-nav .active > a:hover,\n  .responsive-nav .active > a:focus,\n  .responsive-nav .open .dropdown-menu > li > a,\n  .responsive-nav .open .dropdown-menu > li > a:hover,\n  .responsive-nav .open .dropdown-menu > li > a:focus,\n  .responsive-nav .open .dropdown-menu > li > a:active {\n    color: white; }\n  .responsive-nav > li > a,\n  .responsive-nav > li > a:hover,\n  .responsive-nav > li > a:focus {\n    opacity: .7;\n    background-color: transparent;\n    outline: none; }\n  .responsive-nav .open .dropdown-menu > li > a:hover,\n  .responsive-nav .open .dropdown-menu > li > a:focus {\n    background-color: rgba(255, 255, 255, 0.1); }\n  .responsive-nav.responsive-nav .open .dropdown-menu > li > a:active {\n    opacity: 1; }\n  .responsive-nav .dropdown > a:hover .caret {\n    border-bottom-color: #fff;\n    border-top-color: #fff; }\n  .responsive-nav .dropdown > a:active .caret {\n    border-bottom-color: white;\n    border-top-color: white; }\n  .social-line .btn {\n    margin: 0 0 10px 0; }\n  .subscribe-line .form-control {\n    margin: 0 0 10px 0; }\n  .social-line.pull-right {\n    float: none; }\n  .footer nav.pull-left {\n    float: none !important; }\n  .social-area.pull-right {\n    float: none !important; }\n  .form-control + .form-control-feedback {\n    margin-top: -8px; }\n  .navbar-toggle:hover, .navbar-toggle:focus {\n    background-color: transparent !important; }\n  .btn.dropdown-toggle {\n    margin-bottom: 0; }\n  .media-post .author {\n    width: 20%;\n    float: none !important;\n    display: block;\n    margin: 0 auto 10px; }\n  .media-post .media-body {\n    width: 100%; }\n  .navbar-collapse.collapse {\n    height: 100% !important; }\n  .navbar-collapse.collapse.in {\n    display: block; }\n  .navbar-header .collapse, .navbar-toggle {\n    display: block !important; }\n  .navbar-header {\n    float: none; }\n  .responsive-nav .open .dropdown-menu {\n    position: static;\n    float: none;\n    width: auto;\n    margin-top: 0;\n    background-color: transparent;\n    border: 0;\n    -webkit-box-shadow: none;\n    box-shadow: none; }\n  .navbar-collapse .nav p {\n    margin: 0; }\n  .navbar-collapse [class^=\"pe-7s-\"] {\n    float: left;\n    font-size: 20px;\n    margin-right: 10px; }\n  .close-layer {\n    height: 100%;\n    width: calc(100% - 260px);\n    position: fixed;\n    opacity: 0;\n    display: block;\n    top: 0;\n    left: 0px;\n    content: \"\";\n    z-index: 1030;\n    overflow-x: hidden;\n    background: transparent;\n    -webkit-transition: all 370ms ease-in;\n    transition: all 370ms ease-in; }\n    .close-layer.visible {\n      opacity: 1; } }\n@media (min-width: 992px) {\n  .table-full-width {\n    margin-left: -15px;\n    margin-right: -15px; }\n  .table-responsive {\n    overflow: visible; } }\n@media (max-width: 991px) {\n  .table-responsive {\n    width: 100%;\n    margin-bottom: 15px;\n    overflow-x: scroll;\n    overflow-y: hidden;\n    -ms-overflow-style: -ms-autohiding-scrollbar;\n    -webkit-overflow-scrolling: touch; } }\n"

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getElement = (function (fn) {
	var memo = {};

	return function(selector) {
		if (typeof memo[selector] === "undefined") {
			var styleTarget = fn.call(this, selector);
			// Special case to return head of iframe instead of iframe itself
			if (styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[selector] = styleTarget;
		}
		return memo[selector]
	};
})(function (target) {
	return document.querySelector(target)
});

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__("./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
	if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertInto + " " + options.insertAt.before);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	options.attrs.type = "text/css";

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./src/assets/sass/light-bootstrap-dashboard.scss":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/raw-loader/index.js!./node_modules/postcss-loader/lib/index.js??embedded!./node_modules/sass-loader/lib/loader.js??ref--8-3!./src/assets/sass/light-bootstrap-dashboard.scss");
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {"hmr":true}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__("./node_modules/style-loader/lib/addStyles.js")(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../node_modules/raw-loader/index.js!../../../node_modules/postcss-loader/lib/index.js??embedded!../../../node_modules/sass-loader/lib/loader.js??ref--8-3!./light-bootstrap-dashboard.scss", function() {
			var newContent = require("!!../../../node_modules/raw-loader/index.js!../../../node_modules/postcss-loader/lib/index.js??embedded!../../../node_modules/sass-loader/lib/loader.js??ref--8-3!./light-bootstrap-dashboard.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/assets/sass/light-bootstrap-dashboard.scss");


/***/ })

},[2]);
//# sourceMappingURL=styles.bundle.js.map