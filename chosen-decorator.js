(function($) {
    'use strict';

    window.chosenDecorator = {
        /** @see http://harvesthq.github.io/chosen/options.html */
        allow_single_deselect: false,
        disable_search: false,
        disable_search_threshold: 0,
        enable_split_word_search: true,
        inherit_select_classes: false,
        max_selected_options: Infinity,
        no_results_text: "No results match",
        placeholder_text_multiple: "Select Some Options",
        placeholder_text_single: "Select an Option",
        search_contains: false,
        single_backstroke_delete: true,
        width: undefined,
        display_disabled_options: true,
        display_selected_options: true,

        /**
         * Constructor
         */
        ready: function() {
            var select = this.querySelector('select');
            var options = {
                allow_single_deselect: this.allow_single_deselect,
                disable_search: this.disable_search,
                disable_search_threshold: this.disable_search_threshold,
                enable_split_word_search: this.enable_split_word_search,
                inherit_select_classes: this.inherit_select_classes,
                max_selected_options: this.max_selected_options,
                no_results_text: this.no_results_text,
                placeholder_text_multiple: this.placeholder_text_multiple,
                placeholder_text_single: this.placeholder_text_single,
                search_contains: this.search_contains,
                single_backstroke_delete: this.single_backstroke_delete,
                width: (undefined != this.width ? this.width+'px': undefined),
                display_disabled_options: this.display_disabled_options,
                display_selected_options: this.display_selected_options
            };

            this.chosen = $(select).chosen(options);
        }
    }
}(jQuery));