/**
 * Created by deven on 07/04/2017.
 */
/**
 *  custom dropdown
 *
*/
if( typeof summernote_options == 'undefined') {
    var summernote_options = {
        "residentFeilds": true,
      };
} else {

}
var dropdown_text =  {

    ResidentFeilds:{
        residentName:"ResidentName",
        residentNumber:"ResidentNumber",
        residentAge:"ResidentAge",
        residentGender:"ResidentGender",
        residentRoom:"ResidentRoom",
        residentNhsNumber:"ResidentNhsNumber",
        residentStatus:"ResidentStatus",
        residentAddressStreet:"ResidentAddressStreet",
        residentAddressCity:"ResidentAddressCity",
        residentAddressCounty:"ResidentAddressCounty",
        residentAddressPostalCode:"ResidentAddressPostalCode",
        residentAddressCountry:"ResidentAddressCountry",
    }   
};


var summernote_dropdown_tpl = {
    "residentFeilds": function () {
        return "<li class='unclick'><a ><b>Account Fields</b></a></li>" +
            "<li><a data-value='{{residentName}}'>" + dropdown_text.ResidentFeilds.residentName + "</a></li>" +
            "<li><a data-value='{{residentNumber}}'>" + dropdown_text.ResidentFeilds.residentNumber + "</a></li>" +
            "<li><a data-value='{{residentAge}}'>" + dropdown_text.ResidentFeilds.residentAge + "</a></li>" +
            "<li><a data-value='{{residentGender}}'>" + dropdown_text.ResidentFeilds.residentGender + "</a></li>" +
            "<li><a data-value='{{residentRoom}}'>" + dropdown_text.ResidentFeilds.residentRoom + "</a></li>" +
            "<li><a data-value='{{residentNhsNumber}}'>" + dropdown_text.ResidentFeilds.residentNhsNumber + "</a></li>" +
            "<li><a data-value='{{residentStatus}}'>" + dropdown_text.ResidentFeilds.residentStatus + "</a></li>" +
            "<li><a data-value='{{residentAddressStreet}}'>" + dropdown_text.ResidentFeilds.residentAddressStreet + "</a></li>" +
            "<li><a data-value='{{residentAddressCity}}'>" + dropdown_text.ResidentFeilds.residentAddressCity + "</a></li>" +
            "<li><a data-value='{{residentAddressCounty}}'>" + dropdown_text.ResidentFeilds.residentAddressCounty + "</a></li>" +
            "<li><a data-value='{{residentAddressPostalCode}}'>" + dropdown_text.ResidentFeilds.residentAddressPostalCode + "</a></li>" +
            "<li><a data-value='{{residentAddressCountry}}'>" + dropdown_text.ResidentFeilds.residentAddressCountry + "</a></li>";
    }
};
(function (factory) {
    /* global define */
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(['jquery'], factory);
    } else if (typeof module === 'object' && module.exports) {
        // Node/CommonJS
        module.exports = factory(require('jquery'));
    } else {
        // Browser globals
        factory(window.jQuery);
    }
}(function ($) {
    // Extends lang for print plugin.
    $.extend(true, $.summernote.lang, {
        'en-US': {
            placeholders: {
                placeholders: 'Placeholder'
            }
        }
    });

// Extends plugins for print plugin.
    $.extend($.summernote.plugins, {

        placeholders: function (context) {
            var self = this;
            var ui = $.summernote.ui;
            var options = context.options;
            var lang = options.langInfo;

            var defaultOptionsCache = {
                "leadoptions":false               
            };

            if(typeof context.options.defaultOptions == 'undefined'){
                 return false;
            }

            self.initialize = function () {

                if(typeof context.options.defaultOptions == 'undefined'){
                    return false;
                }
                defaultOptionsCache = $.extend(true, defaultOptionsCache, context.options.defaultOptions);
            },

            context.memo('button.placeholders', function () {

                var defaultOptionsCache_ = $.extend(true, defaultOptionsCache, context.options.defaultOptions);

                var list = '';
                for(var key in defaultOptionsCache_) {
                    if (summernote_dropdown_tpl[key] !== undefined) {
                        if (defaultOptionsCache_[key]) {
                            list = list + summernote_dropdown_tpl[key]();
                        }
                    }
                }

                if (list == '') {
                    return false;
                }

                var $Dropdown = ui.buttonGroup([

                    ui.button({
                        className: 'dropdown-toggle',
                        contents: lang.placeholders.placeholders + ' ' + ui.icon(options.icons.caret, 'span'),
                        tooltip: lang.placeholders.placeholders,
                        data: {
                            toggle: 'dropdown'
                        },
                        click: function() {
                            // Cursor position must be saved because is lost when dropdown is opened.
                            context.invoke('editor.saveRange');
                        }

                    }),
                    ui.dropdown({
                        className: 'dropdown-style drop-default class_placeholders',
                        contents: list,
                        callback: function ($dropdown) {
                            $dropdown.find('li').each(function () {

                                $(this).click(function (e) {

                                    var placeholder_text = $(this).find("a").attr("data-value");

                                    context.invoke('editor.restoreRange');
                                    context.invoke('editor.focus');
                                    context.invoke("editor.insertText", placeholder_text);
                                    e.preventDefault();

                                });
                            });
                        }
                    })
                ]).render();
                return $Dropdown;

            });

            //return false;
        }
    });
}));
