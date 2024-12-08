// import './css/styles.css';
import '../monevac/styles/styles.scss'
import './icon_customImage.js'
import $ from 'jquery';
import 'jquery-mask-plugin';
$.mask = $.fn.mask;

$(document).ready(function() {
    $("#tel").mask("+7 (999) 999-99-99");
  });